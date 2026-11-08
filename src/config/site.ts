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
  name: 'Josué',
  email: 'josueeloo@icloud.com',
  links: {
    github: 'Josueviillaa',
    linkedin: 'josuevillaa',
  },
  // Perfil de HackTheBox. Actualiza rank/machines cuando cambien
  // (HTB no da API pública, así que se mantienen a mano).
  htb: {
    url: 'https://app.hackthebox.com/users/2811454',
    rank: 'Professional', // TODO(Josu): tu rango actual de HTB
    machines: 60, // TODO(Josu): máquinas comprometidas
  },
} as const;

interface Fact {
  label: string;
  value: string;
}

interface LocaleContent {
  role: string;
  /** Titular principal del hero (propuesta de valor, no el nombre). */
  headline: string;
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
    headline: 'Seguridad ofensiva, documentada paso a paso.',
    pitch:
      'Especializado en aplicaciones web y Active Directory. Cada máquina que comprometo acaba en un writeup público: qué enumeré, qué funcionó y por qué.',
    status: 'Abierto a nuevas oportunidades',
    description:
      'Josué — pentester junior con Máster en Ciberseguridad & IA. Seguridad ofensiva en aplicaciones web y Active Directory: writeups de HackTheBox, certificaciones y notas técnicas.',
    about: [
      'Soy pentester junior con Máster en Ciberseguridad & IA. Me muevo en seguridad ofensiva —aplicaciones web y Active Directory— y aprendo rompiendo sistemas en entornos controlados para entender cómo se defienden.',
      'Cada máquina que comprometo acaba en un writeup: enumeración, vector de entrada, escalada y la lección de cada fase. Escribir lo que hago me obliga a entenderlo de verdad, no solo a ejecutarlo.',
      'Busco incorporarme a un equipo de seguridad ofensiva —red o purple team—, preferiblemente en remoto. Metódico, autodidacta y cómodo trabajando en equipo.',
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
    headline: 'Offensive security, documented step by step.',
    pitch:
      'Focused on web applications and Active Directory. Every machine I compromise ends in a public write-up: what I enumerated, what worked and why.',
    status: 'Open to new opportunities',
    description:
      'Josué — junior pentester with an MSc in Cybersecurity & AI. Offensive security for web apps and Active Directory: HackTheBox write-ups, certifications and technical notes.',
    about: [
      "I'm a junior pentester with an MSc in Cybersecurity & AI. I work in offensive security —web applications and Active Directory— and learn by breaking systems in controlled environments to understand how they're defended.",
      'Every machine I compromise ends in a write-up: enumeration, entry vector, privilege escalation and the lesson from each phase. Writing down what I do forces me to truly understand it, not just run it.',
      'I want to join an offensive-security team —red or purple team—, ideally remote. Methodical, self-taught and comfortable working as part of a team.',
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
export const htbUrl = site.htb.url;
