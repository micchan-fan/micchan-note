import { defineCollection, z } from 'astro:content';

const newsPosts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.string(),
  }),
});

const schedules = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    schedule: z.string(),
  }),
});

export const collections = { newsPosts, schedules };
