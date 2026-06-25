import type { CollectionConfig } from 'payload'
import { slugify } from '@/lib/slugify'
import { isContentManager } from '@/lib/access/isContentManager'

export const Blogs: CollectionConfig = {
  slug: 'blogs',

  access: {
    create: isContentManager,
    read: () => true,
    update: isContentManager,
    delete: isContentManager,
  },

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'featured', 'publishedAt'],
  },

  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data?.content) return data

        const text =
          JSON.stringify(data.content)
            .replace(/<[^>]*>/g, '')
            .replace(/[{}[\]"]/g, ' ') || ''

        const wordCount = text.trim().split(/\s+/).filter(Boolean).length

        data.readingTime = Math.max(1, Math.ceil(wordCount / 225))

        return data
      },
    ],
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
        position: 'sidebar',
        description:
          'Automatically generated from Blog Title during creation and cannot be changed later.',
      },
      hooks: {
        beforeValidate: [
          ({ data, value, operation }) => {
            if (operation !== 'create') return value
            return slugify(data?.title || '')
          },
        ],
      },
    },

    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },

    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },

    {
      name: 'categories',
      type: 'text',
      hasMany: true,
      required: true,
      admin: {
        description: 'Press Enter after each category (e.g. CSAT, Prelims, Strategy).',
      },
    },

    {
      name: 'tags',
      type: 'text',
      hasMany: true,
      admin: {
        description: 'Press Enter after each tag.',
      },
    },

    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      required: true,
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Unpublished',
          value: 'unpublished',
        },
      ],
    },

    {
      name: 'publishedAt',
      type: 'date',
    },

    {
      name: 'readingTime',
      type: 'number',
      admin: {
        readOnly: true,
      },
    },

    {
      name: 'seoTitle',
      type: 'text',
    },

    {
      name: 'seoDescription',
      type: 'textarea',
    },

    {
      name: 'canonicalUrl',
      type: 'text',
    },

    {
      name: 'isAIGenerated',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'generatedBy',
      type: 'text',
    },
  ],
}
