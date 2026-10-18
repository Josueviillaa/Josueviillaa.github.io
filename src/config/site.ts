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
      'Soy Josue y la ciberseguridad me engancha desde pequeño. Siempre me ha dado por romper cosas para después arreglarlas —trastear con consolas, móviles y todo lo que cayera en mis manos—. Esa curiosidad por entender cómo funciona algo por dentro, y cómo se rompe, es la que me trajo al pentesting.',
      'Acabo de terminar el Máster en Ciberseguridad & IA en Evolve con buena nota. De cara al futuro me quiero especializar en purple team, con el foco puesto en el lado ofensivo del red team.',
      'Busco un equipo —preferiblemente en remoto— para hacer prácticas o trabajar. Soy una persona abierta y proactiva, me manejo bien en equipo, valoro rodearme de buena gente y tengo muchas ganas de seguir formándome.',
    ],
    facts: [
      { label: 'Rol', value: 'Pentester junior' },
      { label: 'Formación', value: 'Máster en Ciberseguridad & IA (Evolve)' },
      { label: 'Ubicación', value: '🇪🇸 España' },
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
      "I'm Josue and cybersecurity has hooked me since I was a kid. I was always taking things apart to put them back together —tinkering with consoles, phones and anything within reach—. That curiosity for how something works inside, and how it breaks, is what led me to pentesting.",
      "I've just finished the MSc in Cybersecurity & AI at Evolve with a good grade. Going forward I want to specialize in purple team, with the focus on the offensive, red-team side.",
      "I'm looking for a team —ideally remote— for an internship or a job. I'm open and proactive, I work well in a team, I value good people around me and I'm eager to keep learning.",
    ],
    facts: [
      { label: 'Role', value: 'Junior pentester' },
      { label: 'Education', value: 'MSc in Cybersecurity & AI (Evolve)' },
      { label: 'Location', value: '🇪🇸 Spain' },
      { label: 'Languages', value: 'Spanish (native) · English (B2)' },
    ],
    profile: { role: 'junior pentester', education: 'msc cybersecurity & ai · evolve' },
  },
};

export const githubUrl = `https://github.com/${site.links.github}`;
export const linkedinUrl = `https://www.linkedin.com/in/${site.links.linkedin}`;
