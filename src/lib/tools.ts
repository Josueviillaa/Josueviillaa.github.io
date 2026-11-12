import { getCollection, type CollectionEntry } from 'astro:content';

export type Tool = CollectionEntry<'tools'>;

/** Herramientas publicadas, de la más reciente a la más antigua. Los borradores solo se ven en dev. */
export async function getTools(): Promise<Tool[]> {
  const entries = await getCollection('tools', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
