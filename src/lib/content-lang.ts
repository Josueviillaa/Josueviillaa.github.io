import type { Lang } from '../i18n';

/** Contenido bilingüe por subcarpeta: `x.mdx` es español, `en/x.mdx` es
 *  inglés. El id del loader es `x` o `en/x`. */
export const isEn = (id: string) => id.startsWith('en/');

/** Slug de URL (sin el prefijo de idioma). */
export const baseSlug = (id: string) => id.replace(/^en\//, '');

/**
 * Devuelve las entradas del idioma pedido. En inglés, por cada artículo en
 * español usa su versión `.en` si existe, y si no cae al español (fallback),
 * para que /en/ nunca tenga páginas que falten mientras se traduce.
 */
export function pickLang<T extends { id: string }>(entries: T[], lang: Lang): T[] {
  const es = entries.filter((e) => !isEn(e.id));
  if (lang === 'es') return es;
  const en = new Map(entries.filter((e) => isEn(e.id)).map((e) => [baseSlug(e.id), e]));
  return es.map((e) => en.get(e.id) ?? e);
}
