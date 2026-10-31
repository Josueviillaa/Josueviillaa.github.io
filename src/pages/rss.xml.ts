import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getWriteups } from '../lib/writeups';
import { getNotes } from '../lib/notes';
import { withBase } from '../lib/url';
import { site } from '../config/site';

export async function GET(context: APIContext) {
  const [writeups, notes] = await Promise.all([getWriteups(), getNotes()]);

  const items = [
    ...writeups.map((w) => ({
      title: w.data.title,
      pubDate: w.data.date,
      description: w.data.summary,
      link: withBase(`/writeups/${w.id}/`),
      categories: w.data.tags,
    })),
    ...notes.map((n) => ({
      title: n.data.title,
      pubDate: n.data.date,
      description: n.data.summary,
      link: withBase(`/notas/${n.id}/`),
      categories: n.data.tags,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: `${site.name} — writeups y notas`,
    description: 'Writeups de máquinas de HackTheBox y notas de seguridad ofensiva de Josu.',
    site: context.site ?? 'https://josueviillaa.github.io',
    items,
    customData: '<language>es</language>',
  });
}
