/** Prefija una ruta interna con el `base` de Astro (necesario en GitHub Pages de proyecto). */
export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
