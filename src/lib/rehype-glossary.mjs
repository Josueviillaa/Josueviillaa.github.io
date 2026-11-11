/**
 * rehype-glossary — en el contenido de writeups/notas, envuelve cada
 * término del glosario en un <abbr class="gl"> con su definición, para
 * mostrar un tooltip accesible (ratón, teclado y táctil).
 *
 * Reglas de seguridad:
 *  - NUNCA toca código: salta <code>, <pre> y el componente <Terminal>.
 *  - No toca enlaces (<a>), títulos (<h1>–<h6>) ni abreviaturas ya puestas.
 *  - Coincidencia exacta y sensible a mayúsculas, con límites de palabra
 *    (así "OOM" no marca "ROOM" ni "RCE" cualquier texto).
 */
import { glossary } from '../data/glossary.mjs';

const SKIP_TAGS = new Set(['code', 'pre', 'a', 'abbr', 'script', 'style', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
const SKIP_COMPONENTS = new Set(['Terminal']);

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Términos ordenados por longitud (los largos primero) para casar bien.
const TERMS = Object.keys(glossary).sort((a, b) => b.length - a.length);
// Límites de palabra que también excluyen el guion, para no partir
// identificadores tipo "CVE-2026-109618" (no marca el "CVE" suelto).
const RE = new RegExp(`(?<![\\p{L}\\p{N}_-])(${TERMS.map(escapeRe).join('|')})(?![\\p{L}\\p{N}_-])`, 'gu');

function makeAbbr(term) {
  const def = glossary[term];
  return {
    type: 'element',
    tagName: 'abbr',
    properties: {
      className: ['gl'],
      tabIndex: 0,
      ariaLabel: `${term}: ${def}`,
      dataDef: def,
    },
    children: [{ type: 'text', value: term }],
  };
}

function splitText(value) {
  RE.lastIndex = 0;
  if (!RE.test(value)) return null;
  RE.lastIndex = 0;
  const out = [];
  let last = 0;
  let m;
  while ((m = RE.exec(value)) !== null) {
    const term = m[1];
    if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
    out.push(makeAbbr(term));
    last = m.index + term.length;
  }
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

function walk(node) {
  const children = node.children;
  if (!children || !children.length) return;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 'element') {
      if (SKIP_TAGS.has(child.tagName)) continue;
      walk(child);
    } else if (child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement') {
      if (child.name && SKIP_COMPONENTS.has(child.name)) continue;
      walk(child);
    } else if (child.type === 'text' && child.value) {
      const parts = splitText(child.value);
      if (parts) {
        children.splice(i, 1, ...parts);
        i += parts.length - 1;
      }
    }
  }
}

export default function rehypeGlossary() {
  return (tree) => {
    walk(tree);
  };
}
