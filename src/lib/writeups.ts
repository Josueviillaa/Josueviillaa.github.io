import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Writeup = CollectionEntry<'writeups'>;
export type Difficulty = Writeup['data']['difficulty'];

/** Writeups publicados, del más reciente al más antiguo. Los borradores solo se ven en dev. */
export async function getWriteups(): Promise<Writeup[]> {
  const entries = await getCollection('writeups', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const dateLocale: Record<Lang, string> = { es: 'es-ES', en: 'en-GB' };

export function formatDate(date: Date, lang: Lang = 'es'): string {
  return new Intl.DateTimeFormat(dateLocale[lang], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
