// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL y BASE_PATH los inyecta el workflow de GitHub Pages
// (.github/workflows/deploy.yml). En local no hace falta tocarlos.
// - Repo "usuario.github.io" → base "/"
// - Repo "portfolio"         → base "/portfolio"
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      // Colores de sintaxis para ambos temas; el fondo lo ponen nuestros tokens.
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
