/**
 * Estima el tiempo de lectura (en minutos) del cuerpo de un artículo.
 * Se cuenta solo la prosa: se descartan bloques de código, código en línea
 * y etiquetas HTML/MDX para no inflar la cifra. Mínimo 1 minuto.
 */
export function readingTime(raw: string | undefined, wpm = 200): number {
  const text = (raw ?? '')
    .replace(/```[\s\S]*?```/g, ' ') // bloques de código cercados
    .replace(/`[^`]*`/g, ' ') // código en línea
    .replace(/<[^>]+>/g, ' ') // etiquetas HTML/JSX
    .replace(/[#>*_|~\-]/g, ' '); // signos de markdown
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}
