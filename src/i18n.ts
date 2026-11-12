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
  logical = logical.replace(/^(writeups|notas|herramientas)\/.+$/, '$1/');
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
    'privacy.nav': 'privacidad',
    'privacy.title': 'Privacidad',
    'notice.text': 'Esta web solo guarda tus preferencias (tema e idioma) en tu navegador. Sin cookies de seguimiento.',
    'notice.ok': 'Entendido',
    'notice.more': 'Más info',

    'hero.aria': 'Resumen de perfil',
    'hero.cmd': 'cat perfil.txt',
    'hero.role_label': 'rol',
    'hero.education_label': 'formación',
    'hero.certs_label': 'certs',
    'hero.writeups_label': 'writeups',
    'hero.htb_label': 'htb',
    'unit.machine_one': 'máquina',
    'unit.machine_many': 'máquinas',

    'about.kicker': 'whoami',
    'about.title': 'Sobre mí',

    'skills.kicker': 'skills',
    'skills.title': 'Skills y stack',
    'skills.intro': 'Las áreas, técnicas y herramientas con las que trabajo a diario en laboratorios y máquinas.',

    'certs.kicker': 'certs',
    'certs.title': 'Certificaciones',

    'writeups.kicker': 'writeups',
    'writeups.title': 'Máquinas resueltas',
    'writeups.intro':
      'Writeups de máquinas retiradas de HackTheBox: enumeración, vector de entrada, escalada y lo que aprendí en cada fase.',
    'writeups.empty': 'Aún no hay writeups publicados.',
    'writeups.all': 'Ver todos los writeups',
    'writeups.back': 'inicio',
    'filter.all': 'Todas',
    'filter.aria': 'Filtrar máquinas',
    'writeups.count_one': 'máquina',
    'writeups.count_many': 'máquinas',

    'nav.notes': 'notas',
    'notes.kicker': 'notas',
    'notes.title': 'Notas y técnicas',
    'notes.intro':
      'Apuntes sobre vectores y técnicas de seguridad ofensiva, explicados de forma genérica — el concepto, no una máquina concreta.',
    'notes.empty': 'Aún no hay notas publicadas.',
    'notes.sections': 'secciones',
    'notes.footer':
      'Nota técnica con fines educativos. Se describe el concepto del vector de forma genérica, para aplicarlo solo en entornos autorizados.',
    'note.read': 'leer',

    'nav.tools': 'herramientas',
    'tools.kicker': 'herramientas',
    'tools.title': 'Herramientas',
    'tools.intro':
      'Utilidades y scripts que he escrito resolviendo máquinas y laboratorios. Código abierto, documentado y pensado para usarse solo en entornos autorizados.',
    'tools.empty': 'Aún no hay herramientas publicadas.',
    'tools.count_one': 'herramienta',
    'tools.count_many': 'herramientas',
    'tools.footer':
      'Herramienta con fines educativos y de investigación. Úsala únicamente sobre sistemas propios o con autorización explícita.',
    'tool.read': 'ver',
    'tool.download': 'Descargar',
    'tool.github': 'Ver en GitHub',
    'tool.lang_label': 'lenguaje',

    'contact.kicker': 'contacto',
    'contact.title': 'Hablemos',
    'contact.body':
      'Si buscas un perfil ofensivo junior —metódico, autodidacta y con hambre de crecer— para un puesto, unas prácticas o un proyecto, hablemos. Respondo por email o LinkedIn.',
    'contact.cta': 'Escríbeme',

    'card.read': 'leer writeup',
    'card.techniques': 'Técnicas',

    'cert.flags': 'flags capturadas',
    'cert.of': 'de',
    'cert.flags_word': 'flags',
    'cert.verify': 'verificar credencial',
    'cert.status.obtenida': 'obtenida',
    'cert.status.en-curso': 'en curso',
    'cert.status.planificada': 'próximamente',

    'copy.label': 'copiar',
    'copy.done': 'copiado',
    'copy.fallback': 'ctrl+c',
    'copy.aria_prefix': 'Copiar',
    'copy.aria_suffix': 'al portapapeles',
    'copy.status_ok': 'Email copiado al portapapeles',
    'copy.status_fallback': 'Email seleccionado, pulsa Ctrl+C para copiarlo',

    'pager.aria': 'Navegación entre writeups',
    'pager.prev': 'anterior',
    'pager.next': 'siguiente',
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
    'privacy.nav': 'privacy',
    'privacy.title': 'Privacy',
    'notice.text': 'This site only stores your preferences (theme and language) in your browser. No tracking cookies.',
    'notice.ok': 'Got it',
    'notice.more': 'Learn more',

    'hero.aria': 'Profile summary',
    'hero.cmd': 'cat profile.txt',
    'hero.role_label': 'role',
    'hero.education_label': 'education',
    'hero.certs_label': 'certs',
    'hero.writeups_label': 'writeups',
    'hero.htb_label': 'htb',
    'unit.machine_one': 'machine',
    'unit.machine_many': 'machines',

    'about.kicker': 'whoami',
    'about.title': 'About me',

    'skills.kicker': 'skills',
    'skills.title': 'Skills & stack',
    'skills.intro': 'The areas, techniques and tools I work with day to day across labs and machines.',

    'certs.kicker': 'certs',
    'certs.title': 'Certifications',

    'writeups.kicker': 'writeups',
    'writeups.title': 'Solved machines',
    'writeups.intro':
      'Write-ups of retired HackTheBox machines: enumeration, entry vector, privilege escalation and lessons from each phase. The full write-ups are in Spanish.',
    'writeups.empty': 'No write-ups published yet.',
    'writeups.all': 'View all write-ups',
    'writeups.back': 'home',
    'filter.all': 'All',
    'filter.aria': 'Filter machines',
    'writeups.count_one': 'machine',
    'writeups.count_many': 'machines',

    'nav.notes': 'notes',
    'notes.kicker': 'notes',
    'notes.title': 'Notes & techniques',
    'notes.intro':
      'Notes on offensive-security vectors and techniques, explained generically — the concept, not a specific machine.',
    'notes.empty': 'No notes published yet.',
    'notes.sections': 'sections',
    'notes.footer':
      'Technical note for educational purposes. The vector is described generically, to be applied only in authorized environments.',
    'note.read': 'read',

    'nav.tools': 'tools',
    'tools.kicker': 'tools',
    'tools.title': 'Tools',
    'tools.intro':
      'Utilities and scripts I wrote while solving machines and labs. Open source, documented and meant to be used only in authorized environments.',
    'tools.empty': 'No tools published yet.',
    'tools.count_one': 'tool',
    'tools.count_many': 'tools',
    'tools.footer':
      'Tool for educational and research purposes. Use it only against your own systems or with explicit authorization.',
    'tool.read': 'view',
    'tool.download': 'Download',
    'tool.github': 'View on GitHub',
    'tool.lang_label': 'language',

    'contact.kicker': 'contact',
    'contact.title': "Let's talk",
    'contact.body':
      "If you're looking for a junior offensive-security profile —methodical, self-taught and hungry to grow— for a role, an internship or a project, let's talk. I reply by email or LinkedIn.",
    'contact.cta': 'Get in touch',

    'card.read': 'read writeup',
    'card.techniques': 'Techniques',

    'cert.flags': 'flags captured',
    'cert.of': 'of',
    'cert.flags_word': 'flags',
    'cert.verify': 'verify credential',
    'cert.status.obtenida': 'achieved',
    'cert.status.en-curso': 'in progress',
    'cert.status.planificada': 'upcoming',

    'copy.label': 'copy',
    'copy.done': 'copied',
    'copy.fallback': 'ctrl+c',
    'copy.aria_prefix': 'Copy',
    'copy.aria_suffix': 'to clipboard',
    'copy.status_ok': 'Email copied to clipboard',
    'copy.status_fallback': 'Email selected, press Ctrl+C to copy it',

    'pager.aria': 'Writeup navigation',
    'pager.prev': 'previous',
    'pager.next': 'next',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

/** Devuelve una función de traducción para el idioma dado. */
export function useT(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui.es[key];
}
