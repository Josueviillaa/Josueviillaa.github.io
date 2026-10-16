/**
 * SKILLS / STACK
 * Cada objeto es una categoría del grid. Añade, quita o reordena libremente.
 * TODO(Josu): los items son EJEMPLOS; deja solo lo que de verdad hayas practicado.
 */

export interface SkillGroup {
  /** Etiqueta corta en monoespaciada, estilo ruta */
  key: string;
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    key: 'web',
    title: 'Web',
    items: ['OWASP Top 10', 'Inyección de comandos', 'SQLi', 'SSTI', 'File upload', 'IDOR', 'LFI / path traversal'],
  },
  {
    key: 'ad',
    title: 'Active Directory',
    items: ['Enumeración LDAP / SMB', 'Kerberoasting', 'AS-REP roasting', 'BloodHound', 'Pass-the-hash'],
  },
  {
    key: 'linux',
    title: 'Linux privesc',
    items: ['sudo -l', 'SUID / capabilities', 'PATH hijacking', 'Cron jobs', 'Credenciales en ficheros'],
  },
  {
    key: 'recon',
    title: 'Enumeración',
    items: ['Escaneo de puertos y servicios', 'Fuzzing de rutas y vhosts', 'Fingerprinting de versiones', 'Búsqueda de CVEs'],
  },
  {
    key: 'tools',
    title: 'Herramientas',
    items: ['Burp Suite', 'nmap', 'ffuf', 'chisel', 'netexec', 'impacket', 'linpeas', 'Metasploit'],
  },
];
