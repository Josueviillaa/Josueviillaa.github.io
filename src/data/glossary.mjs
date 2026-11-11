/**
 * GLOSARIO — términos de ciberseguridad que, en writeups y notas, se
 * convierten automáticamente en un tooltip con su significado al pasar
 * el ratón o enfocarlos con el teclado.
 *
 * Para añadir uno: añade una línea  'TÉRMINO': 'definición breve',
 * La coincidencia es EXACTA y sensible a mayúsculas (así "RCE" marca
 * solo el acrónimo, no cualquier palabra). Nunca toca código ni comandos.
 */
export const glossary = {
  // Ejecución / acceso
  RCE: 'Remote Code Execution — ejecución remota de código en el sistema objetivo.',
  LFI: 'Local File Inclusion — forzar al servidor a incluir ficheros locales.',
  RFI: 'Remote File Inclusion — forzar al servidor a incluir un fichero remoto.',
  SSRF: 'Server-Side Request Forgery — hacer que el servidor lance peticiones en tu nombre.',
  SSTI: 'Server-Side Template Injection — inyección en el motor de plantillas del servidor.',
  XXE: 'XML External Entity — inyección de entidades externas al parsear XML.',
  SQLi: 'SQL Injection — inyección de comandos en una consulta SQL.',
  XSS: 'Cross-Site Scripting — inyectar JavaScript que se ejecuta en el navegador de la víctima.',
  CSRF: 'Cross-Site Request Forgery — forzar acciones usando la sesión de la víctima.',
  IDOR: 'Insecure Direct Object Reference — acceder a datos de otros cambiando un identificador.',

  // Memoria / binarios
  OOM: 'Out Of Memory — el proceso agota la memoria disponible y aborta.',
  ASLR: 'Address Space Layout Randomization — aleatoriza las direcciones de memoria para dificultar exploits.',
  UAF: 'Use-After-Free — usar memoria que ya había sido liberada.',
  SUID: 'Set User ID — bit que hace que un binario se ejecute con permisos de su propietario (a menudo root).',
  FUSE: 'Filesystem in Userspace — montar sistemas de ficheros desde el espacio de usuario.',
  OverlayFS: 'Sistema de ficheros en capas del kernel Linux.',

  // Active Directory / Windows
  AD: 'Active Directory — el servicio de directorio de Windows.',
  ADCS: 'Active Directory Certificate Services — la PKI (autoridad de certificados) de Active Directory.',
  SMB: 'Server Message Block — protocolo de compartición de ficheros de Windows.',
  LDAP: 'Lightweight Directory Access Protocol — protocolo de consulta de directorios.',
  NTLM: 'Protocolo de autenticación de Windows basado en hashes NT.',
  Kerberoasting: 'Robar tickets de servicio Kerberos para crackear su contraseña offline.',
  RDP: 'Remote Desktop Protocol — escritorio remoto de Windows.',

  // Conceptos generales
  CVE: 'Common Vulnerabilities and Exposures — identificador público único de una vulnerabilidad.',
  PoC: 'Proof of Concept — código mínimo que demuestra que la vulnerabilidad es explotable.',
  DoS: 'Denial of Service — saturar un servicio hasta dejarlo inoperativo.',
  MFA: 'Multi-Factor Authentication — autenticación con más de un factor.',
  JWT: 'JSON Web Token — token firmado que transporta la sesión del usuario.',
  OWASP: 'Open Worldwide Application Security Project — referencia de seguridad en aplicaciones web.',
  OCR: 'Optical Character Recognition — extraer texto de una imagen.',
  VPN: 'Virtual Private Network — túnel de red cifrado.',
  DFIR: 'Digital Forensics & Incident Response — forense digital y respuesta a incidentes.',
  C2: 'Command and Control — la infraestructura desde la que el atacante controla el sistema comprometido.',

  // Active Directory
  DC: 'Domain Controller — el servidor que gestiona la autenticación y el directorio de un dominio Windows.',
  RODC: 'Read-Only Domain Controller — un DC de solo lectura, con credenciales cacheadas limitadas; pensado para sedes poco seguras.',
  OU: 'Organizational Unit — contenedor para organizar y delegar objetos dentro de Active Directory.',
  GPO: 'Group Policy Object — política que aplica configuración a usuarios y equipos del dominio.',
  SYSVOL: 'Carpeta compartida del DC con scripts y políticas del dominio, legible por todos los usuarios.',
  ACL: 'Access Control List — lista de permisos que define quién puede hacer qué sobre un objeto.',
  SID: 'Security Identifier — identificador único de una cuenta o grupo en Windows.',
  RID: 'Relative Identifier — la parte final del SID que distingue cada objeto dentro del dominio.',
  UPN: 'User Principal Name — nombre de inicio de sesión con forma de correo (usuario@dominio).',

  // Kerberos / certificados / ADCS
  KDC: 'Key Distribution Center — el servicio de Kerberos que emite los tickets de autenticación.',
  TGT: 'Ticket Granting Ticket — ticket inicial de Kerberos que permite pedir acceso a otros servicios.',
  PKINIT: 'Extensión de Kerberos para autenticarse con un certificado en lugar de contraseña.',
  PKI: 'Public Key Infrastructure — el conjunto de certificados, claves y autoridades que los emiten.',
  CA: 'Certificate Authority — la autoridad que emite y firma los certificados.',
  SAN: 'Subject Alternative Name — campo del certificado que indica para qué identidades es válido; clave en los abusos de ADCS.',
  EKU: 'Extended Key Usage — campo que define para qué sirve un certificado (p. ej. autenticación de cliente).',
  RBCD: 'Resource-Based Constrained Delegation — delegación que, mal configurada, permite suplantar usuarios en AD.',
  ESC4: 'Abuso de ADCS: permisos excesivos sobre una plantilla de certificado permiten modificarla y escalar.',
  ESC7: 'Abuso de ADCS: permisos de gestión sobre la propia CA permiten emitir certificados a voluntad.',

  // Servicios y protocolos
  WinRM: 'Windows Remote Management — servicio de administración remota de Windows (puertos 5985/5986).',
  MSSQL: 'Microsoft SQL Server — el motor de base de datos de Microsoft.',
  SNMP: 'Simple Network Management Protocol — gestión de red; sus "community strings" suelen filtrar información.',
  RPC: 'Remote Procedure Call — invocar funciones de otro proceso o máquina como si fueran locales.',
  DCOM: 'Distributed COM — mecanismo de Windows para invocar objetos en remoto; se abusa para ejecución y movimiento lateral.',
  VNC: 'Virtual Network Computing — protocolo de escritorio remoto.',
  IIS: 'Internet Information Services — el servidor web de Windows.',

  // Ejecución en Windows
  MSI: 'Paquete de instalación de Windows; si se instala con privilegios elevados puede servir para escalar.',
  DLL: 'Dynamic Link Library — librería de Windows; cargar una maliciosa (DLL hijacking) da ejecución de código.',

  // Criptografía
  AES: 'Advanced Encryption Standard — el algoritmo de cifrado simétrico estándar actual.',
  GCM: 'Galois/Counter Mode — modo de cifrado que además garantiza integridad (AES-GCM).',
  IV: 'Initialization Vector — valor aleatorio que hace que cifrar el mismo texto dé resultados distintos.',
  ROT13: 'Cifrado de sustitución trivial que desplaza cada letra 13 posiciones; no es seguridad real.',

  // Web y varios
  PHPSESSID: 'La cookie con la que PHP identifica la sesión de un usuario.',
  CWE: 'Common Weakness Enumeration — catálogo de tipos de debilidad de software (la clase; el CVE es el caso concreto).',
  SOCKS: 'Protocolo de proxy que permite tunelizar tráfico (pivoting hacia redes internas).',
  SASL: 'Simple Authentication and Security Layer — marco de autenticación usado por servicios como LDAP o Kafka.',
};
