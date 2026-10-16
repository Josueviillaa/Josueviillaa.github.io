/**
 * CERTIFICACIONES
 * Para añadir una nueva, copia el objeto de ejemplo y edítalo.
 * `status` controla el color del badge:
 *   obtenida → acento · en-curso → warn · planificada → neutro
 */

export type CertStatus = 'obtenida' | 'en-curso' | 'planificada';

export interface Cert {
  code: string;
  name: string;
  issuer: string;
  status: CertStatus;
  /** Fecha de obtención, texto libre (p. ej. "2026" o "mar 2026") */
  date?: string;
  /** Flags / objetivos del examen, si aplica */
  flags?: { captured: number; total: number };
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
    // TODO(Josu): fecha de obtención, p. ej. 'jun 2026'.
    date: undefined,
    flags: { captured: 7, total: 7 },
    // TODO(Josu): URL de verificación de la credencial (o déjalo en undefined).
    verifyUrl: undefined,
  },
  // Ejemplo para la siguiente:
  // {
  //   code: 'OSCP',
  //   name: 'Offensive Security Certified Professional',
  //   issuer: 'OffSec',
  //   status: 'planificada',
  // },
];
