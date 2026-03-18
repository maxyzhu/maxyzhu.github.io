import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'zod'

const writings = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        cover: image().optional(),
    })
})

export const collections = { writings }