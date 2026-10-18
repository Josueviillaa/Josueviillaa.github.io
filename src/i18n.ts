/**
 * ============================================================
 *  i18n — interfaz en español (por defecto) e inglés.
 *  El español vive en `/`, el inglés en `/en/`.
 *  Los writeups se mantienen en español (su contenido .mdx).
 *
 *  Para traducir un texto nuevo: añade la clave en ES y EN aquí
 *  y úsala con  t('mi.clave')  en el componente.
 * ============================================================
 */
import { withBase } from './lib/url';

export type Lang = 'es' | 'en';
export const defaultLang: Lang = 'es';
export const locales: Lang[] = ['es', 'en'];

/** Detecta el idioma a partir de la ruta (`/en/...` → en, resto → es). */
export function getLang(url: URL): Lang {
  const base = import.meta.env.BASE_URL || '/';
  const path = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const first = path.split('/').filter(Boolean)[0];
  return first === 'en' ? 'en' : 'es';
}

/** Ruta de la home en un idioma dado, ya con el `base` aplicado. */
export function homeHref(lang: Lang): string {
  return lang === 'en' ? withBase('/en/') : withBase('/');
}

/** Ruta "lógica" (sin base ni prefijo de idioma): '' = home, 'writeups/' = listado… */
function logicalPath(url: URL): string {
  const base = import.meta.env.BASE_URL || '/';
  let p = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  p = p.replace(/^\//, '');
  if (p === 'en' || p.startsWith('en/')) p = p.slice(2).replace(/^\//, '');
  return p;
}

/**
 * Enlace equivalente en el otro idioma. Mantiene al usuario en la misma
 * página cuando existe en ambos (home, listado de writeups); desde el detalle
 * de un writeup (solo español) lleva al listado del otro idioma.
 */
export function switchHref(url: URL, target: Lang): string {
  let logical = logicalPath(url);
  if (/^writeups\/.+/.test(logical)) logical = 'writeups/';
  const prefix = target === 'en' ? 'en/' : '';
  return withBase(`/${prefix}${logical}`);
}

export const localeTag: Record<Lang, string> = { es: 'es', en: 'en' };
export const ogLocale: Record<Lang, string> = { es: 'es_ES', en: 'en_US' };

const ui = {
  es: {
    'nav.about': 'sobre mí',
    'nav.skills': 'skills',
    'nav.certs': 'certs',
    'nav.writeups': 'writeups',
    'nav.contact': 'contacto',
    'nav.menu': 'menú',
    'nav.close': 'cerrar',
    'nav.aria': 'Principal',
    'lang.aria': 'Idioma',

    'a11y.skip': 'Saltar al contenido',
    'footer.note': 'Construido con Astro · contenido educativo sobre entornos autorizados',

    'hero.aria': 'Resumen de perfil',
    'hero.cmd': 'cat perfil.txt',
    'hero.role_label': 'rol',
    'hero.education_label': 'formación',
    'hero.certs_label': 'certs',
    'hero.writeups_label': 'writeups',
    'unit.machine_one': 'máquina',
    'unit.machine_many': 'máquinas',

    'about.kicker': 'whoami',
    'about.title': 'Sobre mí',

    'skills.kicker': 'skills',
    'skills.title': 'Skills y stack',
    'skills.intro': 'Áreas y herramientas con las que trabajo en laboratorios y máquinas.',

    'certs.kicker': 'certs',
    'certs.title': 'Certificaciones',

    'writeups.kicker': 'writeups',
    'writeups.title': 'Máquinas resueltas',
    'writeups.intro':
      'Writeups de máquinas retiradas de HackTheBox: enumeración, vector de entrada, escalada y lo que aprendí en cada fase.',
    'writeups.empty': 'Aún no hay writeups publicados.',
    'writeups.all': 'Ver todos los writeups',
    'writeups.back': 'inicio',
    'writeups.count_one': 'máquina',
    'writeups.count_many': 'máquinas',

    'contact.kicker': 'contacto',
    'contact.title': 'Hablemos',
    'contact.body':
      'Si tienes un puesto, unas prácticas o un proyecto en el que encaje un perfil junior con método y ganas de aprender, escríbeme. Respondo por email o LinkedIn.',

    'card.read': 'leer writeup',
    'card.techniques': 'Técnicas',

    'cert.flags': 'flags capturadas',
    'cert.of': 'de',
    'cert.flags_word': 'flags',
    'cert.verify': 'verificar credencial',
    'cert.status.obtenida': 'obtenida',
    'cert.status.en-curso': 'en curso',
    'cert.status.planificada': 'planificada',

    'copy.label': 'copiar',
    'copy.done': 'copiado',
    'copy.fallback': 'ctrl+c',
    'copy.aria_prefix': 'Copiar',
    'copy.aria_suffix': 'al portapapeles',
    'copy.status_ok': 'Email copiado al portapapeles',
    'copy.status_fallback': 'Email seleccionado, pulsa Ctrl+C para copiarlo',
  },

  en: {
    'nav.about': 'about',
    'nav.skills': 'skills',
    'nav.certs': 'certs',
    'nav.writeups': 'writeups',
    'nav.contact': 'contact',
    'nav.menu': 'menu',
    'nav.close': 'close',
    'nav.aria': 'Main',
    'lang.aria': 'Language',

    'a11y.skip': 'Skip to content',
    'footer.note': 'Built with Astro · educational content on authorized environments',

    'hero.aria': 'Profile summary',
    'hero.cmd': 'cat profile.txt',
    'hero.role_label': 'role',
    'hero.education_label': 'education',
    'hero.certs_label': 'certs',
    'hero.writeups_label': 'writeups',
    'unit.machine_one': 'machine',
    'unit.machine_many': 'machines',

    'about.kicker': 'whoami',
    'about.title': 'About me',

    'skills.kicker': 'skills',
    'skills.title': 'Skills & stack',
    'skills.intro': 'Areas and tools I work with across labs and machines.',

    'certs.kicker': 'certs',
    'certs.title': 'Certifications',

    'writeups.kicker': 'writeups',
    'writeups.title': 'Solved machines',
    'writeups.intro':
      'Write-ups of retired HackTheBox machines: enumeration, entry vector, privilege escalation and lessons from each phase. The full write-ups are in Spanish.',
    'writeups.empty': 'No write-ups published yet.',
    'writeups.all': 'View all write-ups',
    'writeups.back': 'home',
    'writeups.count_one': 'machine',
    'writeups.count_many': 'machines',

    'contact.kicker': 'contact',
    'contact.title': "Let's talk",
    'contact.body':
      'If you have a role, an internship or a project where a methodical junior keen to learn fits in, reach out. I reply by email or LinkedIn.',

    'card.read': 'read writeup',
    'card.techniques': 'Techniques',

    'cert.flags': 'flags captured',
    'cert.of': 'of',
    'cert.flags_word': 'flags',
    'cert.verify': 'verify credential',
    'cert.status.obtenida': 'achieved',
    'cert.status.en-curso': 'in progress',
    'cert.status.planificada': 'planned',

    'copy.label': 'copy',
    'copy.done': 'copied',
    'copy.fallback': 'ctrl+c',
    'copy.aria_prefix': 'Copy',
    'copy.aria_suffix': 'to clipboard',
    'copy.status_ok': 'Email copied to clipboard',
    'copy.status_fallback': 'Email selected, press Ctrl+C to copy it',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

/** Devuelve una función de traducción para el idioma dado. */
export function useT(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui.es[key];
}
