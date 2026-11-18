import { getWriteups } from './writeups';
import { site } from '../config/site';

const osFamily = (os: string) => (os.toLowerCase().startsWith('windows') ? 'Windows' : 'Linux');
const tally = (arr: string[]) => arr.reduce<Record<string, number>>((m, k) => ((m[k] = (m[k] || 0) + 1), m), {});

export type Row = [string, number];

export interface Stats {
  machines: number;
  writeupsCount: number;
  techniquesCount: number;
  cveCount: number;
  osData: Row[];
  diffData: Row[];
  topTags: Row[];
}

/** Agrega estadísticas de los writeups publicados (para la home y /stats). */
export async function getStats(): Promise<Stats> {
  const writeups = await getWriteups();

  const osData = (Object.entries(tally(writeups.map((w) => osFamily(w.data.os)))) as Row[]).sort((a, b) => b[1] - a[1]);

  const diffOrder = ['Easy', 'Medium', 'Hard', 'Insane'];
  const diffCount = tally(writeups.map((w) => w.data.difficulty));
  const diffData = diffOrder.filter((d) => diffCount[d]).map((d) => [d, diffCount[d]] as Row);

  const allTags = writeups.flatMap((w) => w.data.tags.map((x) => x.toLowerCase().trim()));
  const techniquesCount = new Set(allTags).size;
  const cveCount = new Set(allTags.filter((x) => /^cve-/.test(x))).size;

  const noise = new Set(['linux', 'windows']);
  const tagCounts = tally(allTags.filter((x) => !noise.has(x) && !/^cve-/.test(x)));
  const topTags = (Object.entries(tagCounts) as Row[]).sort((a, b) => b[1] - a[1]).slice(0, 10);

  return {
    machines: site.htb.machines,
    writeupsCount: writeups.length,
    techniquesCount,
    cveCount,
    osData,
    diffData,
    topTags,
  };
}
