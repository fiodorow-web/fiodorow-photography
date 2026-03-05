import { defineField, defineType } from 'sanity'
import { BulkImageUpload } from '../components/BulkImageUpload'

export default defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł',
            type: 'string',
            description: 'Nazwa sesji, np. "Joanna & Darek"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Data sesji',
            type: 'date',
            options: {
                dateFormat: 'DD MMMM YYYY',
            },
        }),
        defineField({
            name: 'category',
            title: 'Kategoria',
            type: 'string',
            options: {
                list: [
                    { title: 'Reportaż ślubny', value: 'reportaz-slubny' },
                    { title: 'Sesja poślubna', value: 'sesja-poslubna' },
                    { title: 'Sesja narzeczeńska', value: 'sesja-narzeczenska' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'venue',
            title: 'Miejsce',
            type: 'object',
            description: 'Miejsce sesji z opcjonalnym linkiem zewnętrznym (np. Google Maps, strona sali)',
            fields: [
                defineField({
                    name: 'venueName',
                    title: 'Nazwa miejsca',
                    type: 'string',
                    description: 'np. "Sala Wodnik, Kontuń"',
                }),
                defineField({
                    name: 'venueUrl',
                    title: 'Link do miejsca',
                    type: 'url',
                    description: 'np. link do Google Maps lub strony sali weselnej',
                    validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
                }),
            ],
        }),
        defineField({
            name: 'coverImage',
            title: 'Zdjęcie główne',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Galeria zdjęć',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
            components: {
                input: BulkImageUpload,
            },
        }),
        defineField({
            name: 'featured',
            title: 'Wyróżnione',
            type: 'boolean',
            description: 'Pokaż na stronie głównej',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Kolejność',
            type: 'number',
            description: 'Niższa liczba = wyżej na liście',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'coverImage',
        },
    },
    orderings: [
        {
            title: 'Data (najnowsze)',
            name: 'dateDesc',
            by: [{ field: 'date', direction: 'desc' }],
        },
        {
            title: 'Kolejność',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
})
