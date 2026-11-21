import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';
import { pickLang, baseSlug } from './content-lang';

export type Writeup = CollectionEntry<'writeups'>;
export type Difficulty = Writeup['data']['difficulty'];
export { baseSlug as writeupSlug };

/** Writeups del idioma pedido (inglés con fallback al español), recientes primero. */
export async function getWriteups(lang: Lang = 'es'): Promise<Writeup[]> {
  const entries = await getCollection('writeups', ({ data }) => import.meta.env.DEV || !data.draft);
  return pickLang(entries, lang).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
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
