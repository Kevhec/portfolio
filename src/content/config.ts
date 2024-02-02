import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    mockup: image().refine((img) => img.width > 375, {
      message: "Mockup must be at least 375 pixels wide!"
    }),
    mockupAlt: z.string(),
  }),
});

export default { projects: projectCollection };
