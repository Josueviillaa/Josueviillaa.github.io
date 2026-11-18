/**
 * Cobertura MITRE ATT&CK — mapea las técnicas demostradas en los writeups a
 * tácticas y técnicas de ATT&CK Enterprise. `writeups` son slugs de
 * src/content/writeups. Mantener honesto: solo lo que el writeup enseña.
 */
import type { Lang } from '../i18n';

export interface AttackTechnique {
  id: string;
  name: string;
  writeups: string[];
}
export interface AttackTactic {
  id: string;
  name: Record<Lang, string>;
  techniques: AttackTechnique[];
}

export const attack: AttackTactic[] = [
  {
    id: 'TA0001',
    name: { es: 'Acceso inicial', en: 'Initial Access' },
    techniques: [
      { id: 'T1190', name: 'Exploit Public-Facing Application', writeups: ['2million', 'monitored', 'searcher', 'stream', 'makesense', 'headless', 'alert'] },
      { id: 'T1078', name: 'Valid Accounts', writeups: ['escapetwo', 'manager', 'resolute', 'cascade'] },
    ],
  },
  {
    id: 'TA0002',
    name: { es: 'Ejecución', en: 'Execution' },
    techniques: [
      { id: 'T1059', name: 'Command & Scripting Interpreter', writeups: ['2million', 'headless', 'searcher', 'escapetwo', 'manager'] },
    ],
  },
  {
    id: 'TA0004',
    name: { es: 'Escalada de privilegios', en: 'Privilege Escalation' },
    techniques: [
      { id: 'T1548', name: 'Abuse Elevation Control (sudo/SUID)', writeups: ['alert', 'headless', 'searcher', 'monitored'] },
      { id: 'T1068', name: 'Exploitation for Privilege Escalation', writeups: ['2million', 'doubletake'] },
      { id: 'T1574', name: 'Hijack Execution Flow (PATH)', writeups: ['searcher', 'headless'] },
    ],
  },
  {
    id: 'TA0005',
    name: { es: 'Evasión de defensas', en: 'Defense Evasion' },
    techniques: [
      { id: 'T1140', name: 'Deobfuscate / Decode Information', writeups: ['makesense', 'cascade'] },
    ],
  },
  {
    id: 'TA0006',
    name: { es: 'Acceso a credenciales', en: 'Credential Access' },
    techniques: [
      { id: 'T1110', name: 'Brute Force (spraying / RID / john)', writeups: ['resolute', 'manager', 'alert'] },
      { id: 'T1552', name: 'Unsecured Credentials', writeups: ['searcher', 'escapetwo', 'stream', 'monitored'] },
      { id: 'T1555', name: 'Credentials from Password Stores', writeups: ['doubletake'] },
      { id: 'T1649', name: 'Forge Authentication Certificates (ADCS)', writeups: ['manager', 'escapetwo', 'scaffold'] },
    ],
  },
  {
    id: 'TA0007',
    name: { es: 'Descubrimiento', en: 'Discovery' },
    techniques: [
      { id: 'T1046', name: 'Network Service Discovery', writeups: ['2million', 'cascade', 'manager', 'stream'] },
      { id: 'T1087', name: 'Account Discovery (LDAP)', writeups: ['cascade', 'resolute', 'manager', 'scaffold'] },
    ],
  },
  {
    id: 'TA0008',
    name: { es: 'Movimiento lateral', en: 'Lateral Movement' },
    techniques: [
      { id: 'T1021', name: 'Remote Services (WinRM/SMB/VNC)', writeups: ['resolute', 'cascade', 'manager', 'escapetwo'] },
      { id: 'T1550', name: 'Use Alternate Authentication Material (PtH)', writeups: ['manager'] },
    ],
  },
];
