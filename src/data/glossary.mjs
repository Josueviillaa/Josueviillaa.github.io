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
};
