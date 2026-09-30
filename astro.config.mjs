// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { createClient } from '@sanity/client';
import { readFileSync, readdirSync } from 'node:fs';

// Daty ostatniej zmiany do sitemapy — tylko tam, gdzie znamy je dokładnie:
// realizacje (_updatedAt z Sanity) i wpisy bloga (data z frontmattera).
// Pozostałe strony bez lastmod — zgadywana data szkodzi bardziej niż jej brak.
async function loadLastmod() {
  const lastmod = new Map();
  try {
    const client = createClient({ projectId: 'eulheo47', dataset: 'production', useCdn: true, apiVersion: '2024-01-01' });
    const items = await client.fetch('*[_type == "portfolio" && defined(slug.current)]{ "slug": slug.current, _updatedAt }');
    for (const { slug, _updatedAt } of items) lastmod.set(`/portfolio/${slug}/`, _updatedAt);
  } catch (error) {
    console.warn('[sitemap] brak dat z Sanity, realizacje bez lastmod:', error.message);
  }
  const blogDir = './src/content/blog';
  for (const file of readdirSync(blogDir).filter((f) => f.endsWith('.md'))) {
    const frontmatter = readFileSync(`${blogDir}/${file}`, 'utf-8').split('---')[1] ?? '';
    const date = frontmatter.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})"?/m)?.[1];
    if (date) lastmod.set(`/blog/${file.replace(/\.md$/, '')}/`, date);
  }
  return lastmod;
}

const lastmod = await loadLastmod();

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
      serialize(item) {
        const date = lastmod.get(new URL(item.url).pathname);
        if (date) item.lastmod = new Date(date).toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});