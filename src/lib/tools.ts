import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';
import { pickLang, baseSlug } from './content-lang';

export type Tool = CollectionEntry<'tools'>;
export { baseSlug as toolSlug };

/** Herramientas del idioma pedido (inglés con fallback al español), recientes primero. */
export async function getTools(lang: Lang = 'es'): Promise<Tool[]> {
  const entries = await getCollection('tools', ({ data }) => import.meta.env.DEV || !data.draft);
  return pickLang(entries, lang).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
