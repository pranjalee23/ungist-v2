import type { CollectionConfig } from 'payload'
import { isTeacher } from '@/lib/access/isTeacher'
import { validateYear } from '@/lib/validators'

export const Questions: CollectionConfig = {
  slug: 'questions',

  access: {
    create: isTeacher,
    read: isTeacher,
    update: isTeacher,
    delete: isTeacher,
  },

  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation !== 'create') return data

        if (!data.subject || !data.category || !data.year) {
          return data
        }

        const category = await req.payload.findByID({
          collection: 'categories',
          id: data.category,
        })

        const categorySubject =
          typeof category.subject === 'object' ? category.subject.id : category.subject

        if (String(categorySubject) !== String(data.subject)) {
          throw new Error('Selected category does not belong to the selected subject.')
        }

        const subject = await req.payload.findByID({
          collection: 'subjects',
          id: data.subject,
        })

        const subjectCode = subject.code

        const existingQuestions = await req.payload.find({
          collection: 'questions',
          where: {
            subject: {
              equals: data.subject,
            },
            year: {
              equals: data.year,
            },
          },
          limit: 10000,
        })

        const lastNumber = existingQuestions.docs
          .map((q: any) => {
            const parts = q.questionCode?.split('-')
            return Number(parts?.[2] || 0)
          })
          .reduce((max: number, current: number) => Math.max(max, current), 0)

        const nextNumber = lastNumber + 1

        data.questionCode = `${subjectCode}-${data.year}-${String(nextNumber).padStart(4, '0')}`

        return data
      },
    ],
  },

  admin: {
    useAsTitle: 'question',
  },

  fields: [
    {
      name: 'questionCode',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'subject',
      type: 'relationship',
      relationTo: 'subjects',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      validate: validateYear,
    },
    {
      name: 'passage',
      type: 'richText',
    },
    {
      name: 'question',
      type: 'textarea',
      required: true,
    },
    {
      name: 'questionImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
    },
    {
      name: 'difficulty',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Easy',
          value: 'easy',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Hard',
          value: 'hard',
        },
      ],
    },
    {
      name: 'source',
      type: 'select',
      required: true,
      options: [
        {
          label: 'PYQ',
          value: 'pyq',
        },
        {
          label: 'Mock',
          value: 'mock',
        },
        {
          label: 'Diagnostic',
          value: 'diagnostic',
        },
        {
          label: 'Practice',
          value: 'practice',
        },
      ],
    },
    {
      name: 'marks',
      type: 'number',
      defaultValue: 2.5,
    },
    {
      name: 'negativeMarks',
      type: 'number',
      defaultValue: 0.83,
    },
    {
      name: 'optionA',
      type: 'textarea',
      required: true,
    },
    {
      name: 'optionB',
      type: 'textarea',
      required: true,
    },
    {
      name: 'optionC',
      type: 'textarea',
      required: true,
    },
    {
      name: 'optionD',
      type: 'textarea',
      required: true,
    },
    {
      name: 'correctAnswer',
      type: 'select',
      required: true,
      options: [
        {
          label: 'A',
          value: 'A',
        },
        {
          label: 'B',
          value: 'B',
        },
        {
          label: 'C',
          value: 'C',
        },
        {
          label: 'D',
          value: 'D',
        },
      ],
    },
    {
      name: 'explanation',
      type: 'richText',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'skillsTested',
      type: 'select',
      hasMany: true,
      options: [
        'Percentages',
        'Ratio',
        'Profit & Loss',
        'Time & Work',
        'Time & Distance',
        'Data Interpretation',
        'Logical Reasoning',
        'Reading Comprehension',
      ],
    },
    {
      name: 'cognitiveLevel',
      type: 'select',
      options: [
        {
          label: 'Basic',
          value: 'basic',
        },
        {
          label: 'Intermediate',
          value: 'intermediate',
        },
        {
          label: 'Advanced',
          value: 'advanced',
        },
      ],
    },
    {
      name: 'estimatedTimeSeconds',
      type: 'number',
      defaultValue: 90,
    },
    {
      name: 'isAIGenerated',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'generatedBy',
      type: 'text',
    },
  ],
}
