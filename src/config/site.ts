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
    rank: 'Professional',
    machines: 75,
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
    role: 'Pentester junior · Máster en Ciberseguridad e IA',
    headline: 'Seguridad ofensiva documentada paso a paso.',
    pitch:
      'Trabajo sobre todo aplicaciones web y Active Directory. Cuando termino una máquina escribo un writeup contando cómo entré y cómo escalé.',
    status: 'Abierto a nuevas oportunidades',
    description:
      'Josué, pentester junior con Máster en Ciberseguridad e IA. Seguridad ofensiva en aplicaciones web y Active Directory, con writeups de HackTheBox, certificaciones y notas técnicas.',
    about: [
      'Soy pentester junior y tengo un Máster en Ciberseguridad e IA. Me dedico a la seguridad ofensiva, sobre todo a aplicaciones web y Active Directory. Aprendo rompiendo sistemas en laboratorios, que es como entiendo de verdad cómo funcionan y cómo se protegen.',
      'Llevo más de 75 máquinas de HackTheBox resueltas y voy publicando writeups de las que mejores lecciones dejan. Escribir lo que hago me obliga a entender bien cada paso, desde la enumeración hasta la escalada de privilegios.',
      'Ahora quiero entrar en un equipo de seguridad ofensiva, de red team o purple team, mejor en remoto. Me organizo bien y aprendo rápido por mi cuenta, y estoy cómodo trabajando en equipo.',
    ],
    facts: [
      { label: 'Rol', value: 'Pentester junior' },
      { label: 'Formación', value: 'Máster en Ciberseguridad e IA (Evolve)' },
      { label: 'Ubicación', value: '🇪🇸 España' },
      { label: 'Disponibilidad', value: 'Remoto · CET (UTC+1)' },
      { label: 'Idiomas', value: 'Español (nativo) · Inglés (B2)' },
    ],
    profile: { role: 'pentester junior', education: 'máster en ciberseguridad e ia · evolve' },
  },

  en: {
    role: 'Junior pentester · MSc in Cybersecurity & AI',
    headline: 'Offensive security documented step by step.',
    pitch:
      'I mostly work on web applications and Active Directory. When I finish a machine I write a public write-up on how I got in and how I escalated.',
    status: 'Open to new opportunities',
    description:
      'Josué, junior pentester with an MSc in Cybersecurity & AI. Offensive security for web apps and Active Directory, with HackTheBox write-ups, certifications and technical notes.',
    about: [
      "I'm a junior pentester with an MSc in Cybersecurity & AI. I work in offensive security, mostly web applications and Active Directory. I learn by breaking systems in labs, which is how I really get how they work and how they are defended.",
      "I've solved more than 75 HackTheBox machines, and I publish write-ups of the ones with the best lessons. Writing things down forces me to understand every step, from enumeration to privilege escalation.",
      "I now want to join an offensive-security team, red team or purple team, ideally remote. I'm organised and pick things up fast on my own, and I'm comfortable working in a team.",
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
