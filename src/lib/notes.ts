import { getCollection, type CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

/** Notas publicadas, de la más reciente a la más antigua. Los borradores solo se ven en dev. */
export async function getNotes(): Promise<Note[]> {
  const entries = await getCollection('notes', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
