import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    projectName: z.string(),
    excerpt: z.string(),
    description: z.string(),
    wasForClient: z.boolean(),
    stack: z.array(z.string()),
    logo: image(),
    mockup: image().refine((img) => img.width >= 375, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    mockupAlt: z.string(),
    demoLink: z.string(),
    galleryImages: z.array(z.object({
      src: image().refine((img) => img.width >= 375, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      alt: z.string(),
    })),
  }),
});

export const collections = {
  projects: projectCollection
};
