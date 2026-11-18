/**
 * SKILLS / STACK
 * Cada objeto es una categoría del grid. Añade, quita o reordena libremente.
 * Los títulos e items tienen versión `es` / `en`; los términos técnicos
 * (nombres de herramientas, siglas) se dejan igual en ambos idiomas.
 * Refleja lo practicado en las máquinas resueltas (ver src/content/writeups).
 */
import type { Lang } from '../i18n';

export interface SkillGroup {
  /** Etiqueta corta en monoespaciada, estilo ruta */
  key: string;
  title: Record<Lang, string>;
  items: Record<Lang, string[]>;
}

export const skills: SkillGroup[] = [
  {
    key: 'web',
    title: { es: 'Web', en: 'Web' },
    items: {
      es: ['OWASP Top 10', 'SQLi', 'SSTI', 'XSS', 'XXE', 'Inyección de comandos', 'File upload bypass', 'LFI / path traversal', 'IDOR', 'Bypass de autenticación'],
      en: ['OWASP Top 10', 'SQLi', 'SSTI', 'XSS', 'XXE', 'Command injection', 'File upload bypass', 'LFI / path traversal', 'IDOR', 'Auth bypass'],
    },
  },
  {
    key: 'active-directory',
    title: { es: 'Active Directory', en: 'Active Directory' },
    items: {
      es: ['Enumeración LDAP / SMB', 'BloodHound', 'Kerberoasting', 'AS-REP roasting', 'Password spraying', 'Pass-the-hash', 'Abuso de ACLs', 'ADCS (ESC1–ESC9)'],
      en: ['LDAP / SMB enumeration', 'BloodHound', 'Kerberoasting', 'AS-REP roasting', 'Password spraying', 'Pass-the-hash', 'ACL abuse', 'ADCS (ESC1–ESC9)'],
    },
  },
  {
    key: 'linux-privesc',
    title: { es: 'Linux privesc', en: 'Linux privesc' },
    items: {
      es: ['Abuso de sudo', 'SUID / capabilities', 'PATH hijacking', 'Cron / timers de systemd', 'Servicios escribibles', 'Credenciales en ficheros', 'Exploits de kernel'],
      en: ['sudo abuse', 'SUID / capabilities', 'PATH hijacking', 'Cron / systemd timers', 'Writable services', 'Credentials in files', 'Kernel exploits'],
    },
  },
  {
    key: 'enumeration',
    title: { es: 'Enumeración', en: 'Enumeration' },
    items: {
      es: ['Escaneo de puertos y servicios', 'Fuzzing de rutas y vhosts', 'Fingerprinting de versiones', 'SNMP / fuga de información', 'Búsqueda de CVEs'],
      en: ['Port & service scanning', 'Path & vhost fuzzing', 'Version fingerprinting', 'SNMP / info disclosure', 'CVE research'],
    },
  },
  {
    key: 'pivoting',
    title: { es: 'Pivoting y post-explotación', en: 'Pivoting & post-exploitation' },
    items: {
      es: ['Túneles SSH', 'chisel / SOCKS', 'Port forwarding', 'Escape de contenedores', 'Movimiento lateral'],
      en: ['SSH tunneling', 'chisel / SOCKS', 'Port forwarding', 'Container escape', 'Lateral movement'],
    },
  },
  {
    key: 'tooling',
    title: { es: 'Herramientas', en: 'Tooling' },
    items: {
      es: ['Burp Suite', 'nmap', 'ffuf', 'BloodHound', 'netexec', 'impacket', 'certipy', 'evil-winrm', 'chisel', 'John / hashcat', 'linPEAS'],
      en: ['Burp Suite', 'nmap', 'ffuf', 'BloodHound', 'netexec', 'impacket', 'certipy', 'evil-winrm', 'chisel', 'John / hashcat', 'linPEAS'],
    },
  },
];
