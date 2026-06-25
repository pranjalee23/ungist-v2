import type { CollectionConfig } from 'payload'

export const Imports: CollectionConfig = {
  slug: 'imports',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'status', 'totalRows', 'createdAt'],
  },

  fields: [
    {
      name: 'name',
      label: 'Import Name',
      type: 'text',
      required: true,
    },

    {
      name: 'type',
      label: 'Import Type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Questions',
          value: 'questions',
        },
        {
          label: 'Blogs',
          value: 'blogs',
        },
        {
          label: 'Students',
          value: 'students',
        },
        {
          label: 'Authors',
          value: 'authors',
        },
        {
          label: 'Leads',
          value: 'leads',
        },
      ],
    },

    {
      name: 'file',
      label: 'Import File',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Validating',
          value: 'validating',
        },
        {
          label: 'Importing',
          value: 'importing',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
      ],
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    {
      name: 'totalRows',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    {
      name: 'successfulRows',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    {
      name: 'failedRows',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    {
      name: 'errors',
      type: 'array',
      admin: {
        readOnly: true,
      },
      fields: [
        {
          name: 'row',
          type: 'number',
        },
        {
          name: 'field',
          type: 'text',
        },
        {
          name: 'message',
          type: 'text',
        },
      ],
    },

    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    {
      name: 'startedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    {
      name: 'completedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],

  timestamps: true,
}
