import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Fiodorow Photography'),
    image: image(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('5 min'),
  }),
});

export const collections = { blog };
