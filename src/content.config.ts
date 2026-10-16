import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Writeups de máquinas. Cada archivo .md/.mdx en src/content/writeups/
 * es una máquina; el nombre del archivo es el slug de la URL.
 * Los archivos que empiezan por "_" se ignoran (útil para plantillas).
 */
const writeups = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    platform: z.string().default('HackTheBox'),
    /** SO; texto libre, p. ej. "Linux" o "Linux (Ubuntu)" */
    os: z.string().default('Linux'),
    /** easy/medium/hard/insane en cualquier mayúscula/minúscula; se normaliza */
    difficulty: z
      .preprocess(
        (v) => (typeof v === 'string' && v.length ? v[0].toUpperCase() + v.slice(1).toLowerCase() : v),
        z.enum(['Easy', 'Medium', 'Hard', 'Insane']),
      ),
    /** Fecha de publicación del writeup */
    date: z.coerce.date(),
    /** Puertos: números o textos; "22" y 22 valen igual */
    ports: z.array(z.coerce.string()).default([]),
    tags: z.array(z.string()).default([]),
    /** Una o dos frases; se muestra en la tarjeta de la home */
    summary: z.string(),
    retired: z.boolean().default(true),
    /** true = no se publica en el build de producción */
    draft: z.boolean().default(false),
  }),
});

export const collections = { writeups };
