import { defineField, defineType } from 'sanity'

export const practiceArea = defineType({
    name: 'practiceArea',
    title: 'Practice Area',
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
            name: 'description_en',
            title: 'Description (English - Short)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'description_tr',
            title: 'Description (Turkish - Short)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'content_en',
            title: 'Content (English)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'content_tr',
            title: 'Content (Turkish)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
