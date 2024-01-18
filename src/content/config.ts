import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    mockup: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export default { projects: projectCollection };
