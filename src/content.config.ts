import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base:'./src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    projectName: z.string(),
    excerpt: z.string(),
    description: z.string(),
    wasForClient: z.boolean(),
    stack: z.array(z.string()),
    logo: image(),
    mockup: image(),
    mockupAlt: z.string(),
    demoLink: z.string(),
    galleryImages: z.array(z.object({
      src: image(),
      alt: z.string(),
    })),
  }),
});

export const collections = {
  projects: projectCollection
};
