/**
 * ============================================================
 *  TUS DATOS — edita este archivo para personalizar la web.
 *  Lo que siga con  TODO(Josu)  es un placeholder por rellenar.
 * ============================================================
 */

export const site = {
  name: 'Josu',
  role: 'Pentester junior · Máster en Ciberseguridad & IA',

  // Frases del hero: rotan solas (deja una sola si no quieres rotación).
  pitches: [
    'Aprendo atacando sistemas en entornos controlados y documento cada paso: qué enumeré, qué funcionó y por qué.',
    'Del purple al red team: entender cómo se rompe algo es el primer paso para saber protegerlo.',
    'Llevo rompiendo cosas para arreglarlas desde pequeño. Ahora, con método y por escrito.',
  ],

  // Texto junto al dot animado del hero: también rota.
  statuses: ['buscando prácticas', 'buscando trabajo', 'abierto a oportunidades'],

  email: 'josueeloo@icloud.com',

  links: {
    github: 'Josueviillaa',
    linkedin: 'josuevillaa',
  },

  description:
    'Josu — pentester junior y máster en Ciberseguridad & IA. CV, certificaciones y writeups de máquinas de HackTheBox.',

  /** SOBRE MÍ — 2-3 párrafos. Cada string es un párrafo. */
  about: [
    'Soy Josue y la ciberseguridad me engancha desde pequeño. Siempre me ha dado por romper cosas para después arreglarlas —trastear con consolas, móviles y todo lo que cayera en mis manos—. Esa curiosidad por entender cómo funciona algo por dentro, y cómo se rompe, es la que me trajo al pentesting.',
    'Acabo de terminar el Máster en Ciberseguridad & IA en Evolve con buena nota. De cara al futuro me quiero especializar en purple team, con el foco puesto en el lado ofensivo del red team.',
    'Busco un equipo —preferiblemente en remoto— para hacer prácticas o trabajar. Soy una persona abierta y proactiva, me manejo bien en equipo, valoro rodearme de buena gente y tengo muchas ganas de seguir formándome.',
  ],

  /** Datos rápidos de la ficha lateral. */
  facts: [
    { label: 'Rol', value: 'Pentester junior' },
    { label: 'Formación', value: 'Máster en Ciberseguridad & IA (Evolve)' },
    { label: 'Ubicación', value: '🇪🇸 España' },
    { label: 'Idiomas', value: 'Español (nativo) · Inglés (B2)' },
  ],
} as const;

export const githubUrl = `https://github.com/${site.links.github}`;
export const linkedinUrl = `https://www.linkedin.com/in/${site.links.linkedin}`;
