import type { CollectionConfig } from 'payload'
import { slugify } from '@/lib/slugify'
import { isContentManager } from '@/lib/access/isContentManager'
import { validateEmail } from '@/lib/validators'

export const Authors: CollectionConfig = {
  slug: 'authors',

  access: {
    create: isContentManager,
    read: () => true,
    update: isContentManager,
    delete: isContentManager,
  },

  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      name: 'name',
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
          'Automatically generated from Author Name during creation and cannot be changed later.',
      },
      hooks: {
        beforeValidate: [
          ({ data, value, operation }) => {
            if (operation !== 'create') return value
            return slugify(data?.name || '')
          },
        ],
      },
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      validate: validateEmail,
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'linkedin',
      type: 'text',
    },
    {
      name: 'twitter',
      type: 'text',
    },
    {
      name: 'instagram',
      type: 'text',
    },
    {
      name: 'facebook',
      type: 'text',
    },
    {
      name: 'youtube',
      type: 'text',
    },
    {
      name: 'telegram',
      type: 'text',
    },
    {
      name: 'whatsapp',
      type: 'text',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
