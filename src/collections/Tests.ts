import type { CollectionConfig } from 'payload'
import { slugify } from '@/lib/slugify'
import { isTeacher } from '@/lib/access/isTeacher'

export const Tests: CollectionConfig = {
  slug: 'tests',

  access: {
    create: isTeacher,
    read: isTeacher,
    update: isTeacher,
    delete: isTeacher,
  },

  admin: {
    useAsTitle: 'title',
  },

  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.durationMinutes != null && data.durationMinutes < 0) {
          throw new Error('Duration must be 0 or greater.')
        }

        if (data.active && (!data.questions || data.questions.length === 0)) {
          throw new Error('Active tests must include at least one question.')
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'title',
      label: 'Test Title',
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
          'Automatically generated from Test Title during creation and cannot be changed later.',
      },
      hooks: {
        beforeValidate: [
          ({ data, value, operation }) => {
            if (operation !== 'create') {
              return value
            }

            if (!data?.title) {
              return ''
            }

            return data?.title ? slugify(data.title) : ''
          },
        ],
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Diagnostic',
          value: 'diagnostic',
        },
        {
          label: 'Generated',
          value: 'generated',
        },
        {
          label: 'Mock',
          value: 'mock',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'durationMinutes',
      label: 'Duration (minutes)',
      type: 'number',
      min: 0,
      defaultValue: 0,
    },
    {
      name: 'questions',
      type: 'relationship',
      relationTo: 'questions',
      hasMany: true,
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
