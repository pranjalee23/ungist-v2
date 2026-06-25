import type { CollectionConfig } from 'payload'
import { isOperationsManager } from '@/lib/access/isOperationsManager'
import { validateEmail, validatePhone } from '@/lib/validators'
import { normalizePhone } from '@/lib/phone'

export const Leads: CollectionConfig = {
  slug: 'leads',

  access: {
    create: isOperationsManager,
    read: isOperationsManager,
    update: isOperationsManager,
    delete: isOperationsManager,
  },

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'status', 'source'],
  },

  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.phone) {
          data.phone = normalizePhone(data.phone)
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      unique: true,
      required: true,
      validate: validateEmail,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      validate: (value: string | null | undefined) =>
        validatePhone(normalizePhone(value as string)),
    },
    {
      name: 'countryCode',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'website',
      options: [
        {
          label: 'Website',
          value: 'website',
        },
        {
          label: 'Blog',
          value: 'blog',
        },
        {
          label: 'Diagnostic Test',
          value: 'diagnostic',
        },
        {
          label: 'WhatsApp',
          value: 'whatsapp',
        },
        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'YouTube',
          value: 'youtube',
        },
        {
          label: 'Referral',
          value: 'referral',
        },
        {
          label: 'Offline Walk-in',
          value: 'walkin',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        {
          label: 'New',
          value: 'new',
        },
        {
          label: 'Contacted',
          value: 'contacted',
        },
        {
          label: 'Interested',
          value: 'interested',
        },
        {
          label: 'Demo Classes Taken',
          value: 'demo_class_taken',
        },
        {
          label: 'Converted',
          value: 'converted',
        },
        {
          label: 'Lost',
          value: 'lost',
        },
      ],
    },
    {
      name: 'productInterest',
      type: 'select',
      options: [
        {
          label: 'CSAT Foundation Course',
          value: 'csat-foundation',
        },
        {
          label: 'Test Series',
          value: 'test-series',
        },
        {
          label: 'Book',
          value: 'book',
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'newsletterOptIn',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'leadCreatedAt',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'student',
      type: 'relationship',
      relationTo: 'students',
    },
  ],
}
