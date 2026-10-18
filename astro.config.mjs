// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL y BASE_PATH los inyecta el workflow de GitHub Pages
// (.github/workflows/deploy.yml). En local no hace falta tocarlos.
// - Repo "usuario.github.io" → base "/"
// - Repo "portfolio"         → base "/portfolio"
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
    }),
  ],
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
