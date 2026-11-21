import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';
import { pickLang, baseSlug } from './content-lang';

export type Note = CollectionEntry<'notes'>;
export { baseSlug as noteSlug };

/** Notas del idioma pedido (inglés con fallback al español), recientes primero. */
export async function getNotes(lang: Lang = 'es'): Promise<Note[]> {
  const entries = await getCollection('notes', ({ data }) => import.meta.env.DEV || !data.draft);
  return pickLang(entries, lang).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
