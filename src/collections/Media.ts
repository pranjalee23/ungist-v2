import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  access: {
    read: () => true,
  },

  upload: true,

  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'folder', 'mimeType', 'updatedAt'],
  },

  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'folder',
      type: 'select',
      defaultValue: 'misc',
      options: [
        { label: 'Blog Images', value: 'blog-images' },
        { label: 'Faculty', value: 'faculty' },
        { label: 'Question PDFs', value: 'question-pdfs' },
        { label: 'Question CSV', value: 'question-csv' },
        { label: 'Question Excel', value: 'question-excel' },
        { label: 'Student Imports', value: 'student-imports' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Documents', value: 'documents' },
        { label: 'Logos', value: 'logos' },
        { label: 'Miscellaneous', value: 'misc' },
      ],
    },
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
    },
    {
      name: 'credit',
      type: 'text',
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [({ req, value }) => value || req.user?.id],
      },
    },
  ],
}
