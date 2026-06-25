import type { CollectionConfig } from 'payload'
import { isAdmin } from '@/lib/access/isAdmin'
import { isTeacher } from '@/lib/access/isTeacher'
import { canViewStudentData } from '@/lib/access/canViewStudentData'
import { validatePercentage, validatePercentile, validatePositiveNumber, validateRank } from '@/lib/validators'

export const TestAttempts: CollectionConfig = {
  slug: 'test-attempts',

  access: {
    create: isTeacher,
    read: canViewStudentData,
    update: isTeacher,
    delete: isAdmin,
  },

  admin: {
    useAsTitle: 'student',
  },

  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data?.student) {
          throw new Error('A student is required for a test attempt.')
        }

        if (!data?.test) {
          throw new Error('A test is required for a test attempt.')
        }

        if (!data?.startedAt) {
          throw new Error('The attempt start time is required.')
        }

        if (data.score != null && data.score < 0) {
          throw new Error('Score must be 0 or greater.')
        }

        if (data.rank != null && data.rank < 0) {
          throw new Error('Rank must be 0 or greater.')
        }

        if (data.percentage != null && (data.percentage < 0 || data.percentage > 100)) {
          throw new Error('Percentage must be between 0 and 100.')
        }

        if (data.percentile != null && (data.percentile < 0 || data.percentile > 100)) {
          throw new Error('Percentile must be between 0 and 100.')
        }

        if (data.correctAnswers != null && data.correctAnswers < 0) {
          throw new Error('Correct answers must be 0 or greater.')
        }

        if (data.wrongAnswers != null && data.wrongAnswers < 0) {
          throw new Error('Wrong answers must be 0 or greater.')
        }

        if (data.unattemptedAnswers != null && data.unattemptedAnswers < 0) {
          throw new Error('Unattempted answers must be 0 or greater.')
        }

        if (data.timeTakenSeconds != null && data.timeTakenSeconds < 0) {
          throw new Error('Time taken must be 0 or greater.')
        }

        if (
          Array.isArray(data.responses) &&
          data.responses.some((response) => response?.timeTakenSeconds < 0)
        ) {
          throw new Error('Response timeTakenSeconds must be 0 or greater.')
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'student',
      label: 'Student',
      type: 'relationship',
      relationTo: 'students',
      required: true,
    },
    {
      name: 'test',
      label: 'Test',
      type: 'relationship',
      relationTo: 'tests',
      required: true,
    },
    {
      name: 'startedAt',
      label: 'Started At',
      type: 'date',
      required: true,
    },
    {
      name: 'completedAt',
      label: 'Completed At',
      type: 'date',
    },
    {
      name: 'score',
      label: 'Score',
      type: 'number',
      validate: validatePositiveNumber,
    },
    {
      name: 'percentage',
      label: 'Percentage',
      type: 'number',
      validate: validatePercentage,
    },
    {
      name: 'percentile',
      label: 'Percentile',
      type: 'number',
      validate: validatePercentile,
    },
    {
      name: 'rank',
      label: 'Rank',
      type: 'number',
      validate: validateRank,
    },
    {
      name: 'correctAnswers',
      label: 'Correct Answers',
      type: 'number',
      min: 0,
    },
    {
      name: 'wrongAnswers',
      label: 'Wrong Answers',
      type: 'number',
      min: 0,
    },
    {
      name: 'unattemptedAnswers',
      label: 'Unattempted Answers',
      type: 'number',
      min: 0,
    },
    {
      name: 'timeTakenSeconds',
      label: 'Time Taken (seconds)',
      type: 'number',
      min: 0,
    },
    {
      name: 'responses',
      label: 'Responses',
      type: 'array',
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'relationship',
          relationTo: 'questions',
          required: true,
        },
        {
          name: 'selectedAnswer',
          label: 'Selected Answer',
          type: 'select',
          options: [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' },
            { label: 'D', value: 'D' },
          ],
        },
        {
          name: 'correctAnswer',
          label: 'Correct Answer',
          type: 'select',
          options: [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' },
            { label: 'D', value: 'D' },
          ],
        },
        {
          name: 'isCorrect',
          label: 'Is Correct',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'timeTakenSeconds',
          label: 'Time Taken (seconds)',
          type: 'number',
          min: 0,
        },
        {
          name: 'notes',
          label: 'Notes',
          type: 'textarea',
        },
      ],
    },
  ],
}
