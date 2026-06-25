import type { CollectionConfig } from 'payload'
import { slugify } from '@/lib/slugify'
import { isTeacher } from '@/lib/access/isTeacher'

export const Categories: CollectionConfig = {
  slug: 'categories',

  access: {
    create: isTeacher,
    read: isTeacher,
    update: isTeacher,
    delete: isTeacher,
  },

  admin: {
    useAsTitle: 'name',
  },

  hooks: {
    beforeChange: [
      async ({ data, originalDoc, operation, req }) => {
        if (operation !== 'update') return data

        const nameChanged = data.name && originalDoc?.name && data.name !== originalDoc.name

        const slugChanged = data.slug && originalDoc?.slug && data.slug !== originalDoc.slug

        const subjectChanged =
          data.subject && originalDoc?.subject && data.subject !== originalDoc.subject

        if (!nameChanged && !slugChanged && !subjectChanged) {
          return data
        }

        const questions = await req.payload.find({
          collection: 'questions',
          where: {
            category: {
              equals: originalDoc.id,
            },
          },
          limit: 1,
        })

        if (questions.totalDocs > 0) {
          throw new Error(
            'Category name, subject name and slug cannot be changed after questions have been linked to this category.',
          )
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'name',
      label: 'Category Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description:
          'Automatically generated from Category Name during creation and cannot be changed later.',
      },
      hooks: {
        beforeValidate: [
          ({ data, value, operation }) => {
            // Only generate during create
            if (operation !== 'create') {
              return value
            }

            return data?.name ? slugify(data.name) : ''
          },
        ],
      },
    },
    {
      name: 'subject',
      type: 'relationship',
      relationTo: 'subjects',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
