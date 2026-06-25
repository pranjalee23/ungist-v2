import type { CollectionConfig } from 'payload'
import { slugify } from '@/lib/slugify'
import { isTeacher } from '@/lib/access/isTeacher'

export const Subjects: CollectionConfig = {
  slug: 'subjects',

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
        // Only check on updates
        if (operation !== 'update') return data

        const nameChanged = data.name && originalDoc?.name && data.name !== originalDoc.name

        const codeChanged = data.code && originalDoc?.code && data.code !== originalDoc.code

        const slugChanged = data.slug && originalDoc?.slug && data.slug !== originalDoc.slug

        if (!nameChanged && !codeChanged && !slugChanged) {
          return data
        }

        const questions = await req.payload.find({
          collection: 'questions',
          where: {
            subject: {
              equals: originalDoc.id,
            },
          },
          limit: 1,
        })

        if (questions.totalDocs > 0) {
          throw new Error(
            'Subject name, code and slug cannot be changed after questions have been linked to this subject.',
          )
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'name',
      label: 'Subject Name',
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
          'Automatically generated from Subject Name during creation and cannot be changed later.',
      },
      hooks: {
        beforeValidate: [
          ({ data, value, operation }) => {
            if (operation !== 'create') {
              return value
            }

            if (!data?.name) return ''

            return slugify(data.name)
          },
        ],
      },
    },
    {
      name: 'code',
      label: 'Subject Code',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Automatically generated from Subject Name. Used in Question Codes.',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (!data?.name) return ''

            return data.name
              .trim()
              .toUpperCase()
              .replace(/\s+/g, '_')
              .replace(/[^A-Z_]/g, '')
          },
        ],
      },
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
