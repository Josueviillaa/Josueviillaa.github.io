/**
 * CERTIFICACIONES
 * Para añadir una nueva, copia un objeto y edítalo.
 * `status` controla el color y el emblema de la card:
 *   obtenida → acento (badge holográfico) · en-curso → warn · planificada → "próximamente"
 */

export type CertStatus = 'obtenida' | 'en-curso' | 'planificada';

export interface Cert {
  code: string;
  name: string;
  issuer: string;
  status: CertStatus;
  /** Fecha de obtención, texto libre (p. ej. "2026" o "mar 2026") */
  date?: string;
  /** URL de verificación de la credencial */
  verifyUrl?: string;
  note?: string;
}

export const certs: Cert[] = [
  {
    code: 'eJPT',
    name: 'eLearnSecurity Junior Penetration Tester',
    issuer: 'INE Security',
    status: 'obtenida',
    // TODO(Josu): fecha de obtención y URL de verificación, si quieres mostrarlas.
    date: undefined,
    verifyUrl: undefined,
  },
  {
    code: 'eCPPT',
    name: 'eLearnSecurity Certified Professional Penetration Tester',
    issuer: 'INE Security',
    status: 'planificada',
  },
  {
    code: 'CEH',
    name: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    status: 'planificada',
  },
  {
    code: 'OSCP',
    name: 'Offensive Security Certified Professional',
    issuer: 'OffSec',
    status: 'planificada',
  },
];
