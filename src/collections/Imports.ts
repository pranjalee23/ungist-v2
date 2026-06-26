import type { CollectionConfig } from 'payload'
import { isContentManager } from '@/lib/access/isContentManager'
import { importEndpoints } from '@/lib/imports/endpoints'

export const Imports: CollectionConfig = {
  slug: 'imports',

  access: {
    create: isContentManager,
    read: isContentManager,
    update: isContentManager,
    delete: isContentManager,
  },

  endpoints: importEndpoints,

  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        if (operation === 'create' && !data.uploadedBy) {
          data.uploadedBy = req.user?.id
        }
        return data
      },
    ],
  },

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
      label: 'Entity / Import Type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Questions',
          value: 'questions',
        },
        {
          label: 'Subjects',
          value: 'subjects',
        },
        {
          label: 'Categories',
          value: 'categories',
        },
        {
          label: 'Blogs',
          value: 'blogs',
        },
        {
          label: 'Authors',
          value: 'authors',
        },
        {
          label: 'Students',
          value: 'students',
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
      admin: {
        description: 'Upload a CSV, Excel, JSON, or (for Questions) PDF file. Provide this OR a Source URL.',
      },
      validate: (value: unknown, { data }: { data?: { sourceUrl?: string } }) =>
        value || data?.sourceUrl ? true : 'Provide an import file or a Source URL.',
    },

    {
      name: 'sourceUrl',
      label: 'Source URL',
      type: 'text',
      admin: {
        description: 'Optional. A published Google Sheets link (or public CSV URL) to import instead of a file.',
      },
    },

    {
      name: 'mode',
      label: 'Import Mode',
      type: 'select',
      defaultValue: 'strict',
      options: [
        { label: 'Strict (any error aborts the whole import)', value: 'strict' },
        { label: 'Best effort (skip bad rows, import the rest)', value: 'best_effort' },
      ],
      admin: {
        position: 'sidebar',
      },
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
          label: 'Preview Ready',
          value: 'preview_ready',
        },
        {
          label: 'Needs Review',
          value: 'needs_review',
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
      name: 'actions',
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          Field: '@/app/(payload)/admin/components/ImportActions',
        },
      },
    },

    {
      name: 'preview',
      label: 'Preview Analysis',
      type: 'group',
      admin: {
        readOnly: true,
      },
      fields: [
        { name: 'validRows', type: 'number', defaultValue: 0 },
        { name: 'errorRows', type: 'number', defaultValue: 0 },
        { name: 'duplicateRows', type: 'number', defaultValue: 0 },
        { name: 'unknownSubjects', type: 'number', defaultValue: 0 },
        { name: 'unknownCategories', type: 'number', defaultValue: 0 },
      ],
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
