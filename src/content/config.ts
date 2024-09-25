import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
	}),
});

const weekly = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
	}),
});

const resource = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
})

export const collections = { blog, weekly, resource};
