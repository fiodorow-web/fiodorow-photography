// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fiodorowphotography.pl',
  output: 'static',
  build: {
    // Wstaw CSS inline w <head> zamiast osobnego pliku blokującego
    // renderowanie (usuwa żądanie z krytycznej ścieżki → szybszy LCP/FCP).
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/polityka-prywatnosci') &&
        !page.includes('/studio'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});