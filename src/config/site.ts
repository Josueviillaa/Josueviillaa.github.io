/**
 * ============================================================
 *  TUS DATOS — edita este archivo para personalizar la web.
 *  Todo lo marcado con  TODO(Josu)  es un placeholder que
 *  debes sustituir por tu información real.
 * ============================================================
 */

export const site = {
  name: 'Josu',
  role: 'Pentester junior · Estudiante de Máster en Ciberseguridad',

  // TODO(Josu): revisa la línea de pitch; es lo primero que lee un reclutador.
  pitch:
    'Aprendo atacando sistemas en entornos controlados y documento cada paso: qué enumeré, qué funcionó, qué no y por qué.',

  // Texto junto al dot animado del hero. Neutro a propósito.
  // TODO(Josu): cámbialo si quieres indicar disponibilidad (p. ej. "Buscando prácticas").
  status: 'online',

  // TODO(Josu): tu email real.
  email: 'tu-email@ejemplo.com',

  links: {
    // TODO(Josu): tu usuario de GitHub (solo el usuario, sin URL).
    github: 'TU-USUARIO-GITHUB',
    // TODO(Josu): tu slug de LinkedIn (lo que va tras linkedin.com/in/).
    linkedin: 'TU-USUARIO-LINKEDIN',
  },

  // Descripción para buscadores y previsualizaciones al compartir el enlace.
  description:
    'Josu — pentester junior y estudiante de Máster en Ciberseguridad. CV, certificaciones y writeups de máquinas de HackTheBox.',

  /**
   * SOBRE MÍ — 2-3 párrafos.
   * TODO(Josu): sustituye los tres textos entre corchetes por los tuyos.
   * Cada string del array es un párrafo.
   */
  about: [
    '[TODO(Josu) · Párrafo 1 — Quién eres y qué te llevó a la ciberseguridad ofensiva. Dos o tres frases, en primera persona.]',
    '[TODO(Josu) · Párrafo 2 — Qué estás estudiando ahora (el máster, en qué centro) y en qué áreas te estás especializando.]',
    '[TODO(Josu) · Párrafo 3 — Qué tipo de puesto o equipo buscas y qué aportas. Opcional: idiomas, ubicación o disponibilidad.]',
  ],

  /**
   * Datos rápidos que aparecen junto a "Sobre mí".
   * TODO(Josu): completa o elimina las filas que no quieras mostrar.
   */
  facts: [
    { label: 'Rol', value: 'Pentester junior' },
    { label: 'Formación', value: 'Máster en Ciberseguridad (en curso)' },
    { label: 'Ubicación', value: '[TODO(Josu)]' },
    { label: 'Idiomas', value: '[TODO(Josu)]' },
  ],
} as const;

export const githubUrl = `https://github.com/${site.links.github}`;
export const linkedinUrl = `https://www.linkedin.com/in/${site.links.linkedin}`;
