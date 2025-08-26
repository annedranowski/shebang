import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      pubDate: z.coerce.date(),        // date of writing
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).optional(),
    }),
  }),
};
