import type { CollectionConfig } from 'payload'
import { isAdmin } from '@/lib/access/isAdmin'
import { isOperationsManager } from '@/lib/access/isOperationsManager'
import { canViewStudentData } from '@/lib/access/canViewStudentData'
import { validateEmail, validatePhone } from '@/lib/validators'
import { normalizePhone } from '@/lib/phone'

export const Students: CollectionConfig = {
  slug: 'students',

  access: {
    create: isOperationsManager,
    read: canViewStudentData,
    update: isOperationsManager,
    delete: isAdmin,
  },

  admin: {
    useAsTitle: 'name',
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

    beforeChange: [
      ({ data }) => {
        if (data.score != null && data.score < 0) {
          throw new Error('Score must be 0 or greater.')
        }

        if (data.rank != null && data.rank < 0) {
          throw new Error('Rank must be 0 or greater.')
        }

        if (data.percentile != null && (data.percentile < 0 || data.percentile > 100)) {
          throw new Error('Percentile must be between 0 and 100.')
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'name',
      label: 'Student Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      unique: true,
      validate: validateEmail,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      required: true,
      validate: (value: string | null | undefined) =>
        validatePhone(normalizePhone(value as string)),
    },
    {
      name: 'score',
      label: 'Score',
      type: 'number',
      min: 0,
      defaultValue: 0,
    },
    {
      name: 'rank',
      label: 'Rank',
      type: 'number',
      min: 0,
      defaultValue: 0,
    },
    {
      name: 'percentile',
      label: 'Percentile',
      type: 'number',
      min: 0,
      max: 100,
      defaultValue: 0,
    },
    {
      name: 'recommendedProgram',
      label: 'Recommended Program',
      type: 'text',
    },
    {
      name: 'active',
      label: 'Active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'lastLogin',
      label: 'Last Login',
      type: 'date',
    },
  ],
}
