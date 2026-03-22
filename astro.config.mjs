// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fiodorowphotography.pl',
  output: 'static',
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