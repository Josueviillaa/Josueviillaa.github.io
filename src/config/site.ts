/**
 * ============================================================
 *  TUS DATOS — edita este archivo para personalizar la web.
 *  Lo que siga con  TODO(Josu)  es un placeholder por rellenar.
 *
 *  El sitio es bilingüe: cada texto tiene versión `es` y `en`
 *  dentro de `content`. Lo que no depende del idioma (nombre,
 *  email, enlaces) vive en `site`.
 * ============================================================
 */
import type { Lang } from '../i18n';

export const site = {
  name: 'Josu',
  email: 'josueeloo@icloud.com',
  links: {
    github: 'Josueviillaa',
    linkedin: 'josuevillaa',
  },
} as const;

interface Fact {
  label: string;
  value: string;
}

interface LocaleContent {
  role: string;
  /** Frase del hero. */
  pitch: string;
  /** Texto junto al dot del hero (estado, sobrio). */
  status: string;
  description: string;
  /** SOBRE MÍ — 2-3 párrafos. Cada string es un párrafo. */
  about: string[];
  /** Datos rápidos de la ficha lateral. */
  facts: Fact[];
  /** Valores del panel "terminal" del hero. */
  profile: { role: string; education: string };
}

export const content: Record<Lang, LocaleContent> = {
  es: {
    role: 'Pentester junior · Máster en Ciberseguridad & IA',
    pitch:
      'Aprendo atacando sistemas en entornos controlados y documento cada paso: qué enumeré, qué funcionó y por qué.',
    status: 'Abierto a nuevas oportunidades',
    description:
      'Josu — pentester junior y máster en Ciberseguridad & IA. CV, certificaciones y writeups de máquinas de HackTheBox.',
    about: [
      'Pentester junior con Máster en Ciberseguridad & IA, especializado en seguridad ofensiva: aplicaciones web y Active Directory. Documento cada máquina que resuelvo —enumeración, vector de entrada, escalada y la lección de cada fase.',
      'Busco incorporarme a un equipo de seguridad ofensiva, preferiblemente en remoto. Metódico, autodidacta y acostumbrado a trabajar en equipo.',
    ],
    facts: [
      { label: 'Rol', value: 'Pentester junior' },
      { label: 'Formación', value: 'Máster en Ciberseguridad & IA (Evolve)' },
      { label: 'Ubicación', value: '🇪🇸 España' },
      { label: 'Disponibilidad', value: 'Remoto · CET (UTC+1)' },
      { label: 'Idiomas', value: 'Español (nativo) · Inglés (B2)' },
    ],
    profile: { role: 'pentester junior', education: 'máster en ciberseguridad & ia · evolve' },
  },

  en: {
    role: 'Junior pentester · MSc in Cybersecurity & AI',
    pitch:
      'I learn by attacking systems in controlled environments and documenting every step: what I enumerated, what worked and why.',
    status: 'Open to new opportunities',
    description:
      'Josu — junior pentester with an MSc in Cybersecurity & AI. CV, certifications and HackTheBox machine write-ups.',
    about: [
      'Junior pentester with an MSc in Cybersecurity & AI, focused on offensive security: web applications and Active Directory. I document every machine I solve —enumeration, entry vector, privilege escalation and the lesson from each phase.',
      'Looking to join an offensive-security team, ideally remote. Methodical, self-taught and used to working as part of a team.',
    ],
    facts: [
      { label: 'Role', value: 'Junior pentester' },
      { label: 'Education', value: 'MSc in Cybersecurity & AI (Evolve)' },
      { label: 'Location', value: '🇪🇸 Spain' },
      { label: 'Availability', value: 'Remote · CET (UTC+1)' },
      { label: 'Languages', value: 'Spanish (native) · English (B2)' },
    ],
    profile: { role: 'junior pentester', education: 'msc cybersecurity & ai · evolve' },
  },
};

export const githubUrl = `https://github.com/${site.links.github}`;
export const linkedinUrl = `https://www.linkedin.com/in/${site.links.linkedin}`;
