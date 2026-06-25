import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '@/lib/access/isSuperAdmin'
import { validatePhone } from '@/lib/validators'
import { normalizePhone } from '@/lib/phone'

export const Users: CollectionConfig = {
  slug: 'users',

  access: {
    create: isSuperAdmin,
    read: isSuperAdmin,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },

  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'role', 'active'],
  },

  auth: true,

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
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      options: [
        {
          label: 'Super Admin',
          value: 'super_admin',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Teacher',
          value: 'teacher',
        },
        {
          label: 'Content Manager',
          value: 'content_manager',
        },
        {
          label: 'Operations Manager',
          value: 'operations_manager',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      validate: (value: string | null | undefined) =>
        validatePhone(normalizePhone(value as string)),
    },
    // {
    //   name: 'profileImage',
    //   type: 'upload',
    //   relationTo: 'media',  //error: you must be logged in to access media
    // },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'lastLoginAt',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}
