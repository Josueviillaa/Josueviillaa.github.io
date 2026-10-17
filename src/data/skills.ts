/**
 * SKILLS / STACK
 * Cada objeto es una categoría del grid. Añade, quita o reordena libremente.
 * Los títulos e items tienen versión `es` / `en`; los términos técnicos
 * (nombres de herramientas, siglas) se dejan igual en ambos idiomas.
 * TODO(Josu): los items son EJEMPLOS; deja solo lo que de verdad hayas practicado.
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
      es: ['OWASP Top 10', 'Inyección de comandos', 'SQLi', 'SSTI', 'File upload', 'IDOR', 'LFI / path traversal'],
      en: ['OWASP Top 10', 'Command injection', 'SQLi', 'SSTI', 'File upload', 'IDOR', 'LFI / path traversal'],
    },
  },
  {
    key: 'ad',
    title: { es: 'Active Directory', en: 'Active Directory' },
    items: {
      es: ['Enumeración LDAP / SMB', 'Kerberoasting', 'AS-REP roasting', 'BloodHound', 'Pass-the-hash'],
      en: ['LDAP / SMB enumeration', 'Kerberoasting', 'AS-REP roasting', 'BloodHound', 'Pass-the-hash'],
    },
  },
  {
    key: 'linux',
    title: { es: 'Linux privesc', en: 'Linux privesc' },
    items: {
      es: ['sudo -l', 'SUID / capabilities', 'PATH hijacking', 'Cron jobs', 'Credenciales en ficheros'],
      en: ['sudo -l', 'SUID / capabilities', 'PATH hijacking', 'Cron jobs', 'Credentials in files'],
    },
  },
  {
    key: 'recon',
    title: { es: 'Enumeración', en: 'Enumeration' },
    items: {
      es: ['Escaneo de puertos y servicios', 'Fuzzing de rutas y vhosts', 'Fingerprinting de versiones', 'Búsqueda de CVEs'],
      en: ['Port & service scanning', 'Path & vhost fuzzing', 'Version fingerprinting', 'CVE research'],
    },
  },
  {
    key: 'tools',
    title: { es: 'Herramientas', en: 'Tooling' },
    items: {
      es: ['Burp Suite', 'nmap', 'ffuf', 'chisel', 'netexec', 'impacket', 'linpeas', 'Metasploit'],
      en: ['Burp Suite', 'nmap', 'ffuf', 'chisel', 'netexec', 'impacket', 'linpeas', 'Metasploit'],
    },
  },
];
