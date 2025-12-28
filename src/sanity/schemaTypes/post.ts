import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title_en',
            title: 'Title (English)',
            type: 'string',
        }),
        defineField({
            name: 'title_tr',
            title: 'Title (Turkish)',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title_en',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'body_en',
            title: 'Body (English)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'body_tr',
            title: 'Body (Turkish)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
