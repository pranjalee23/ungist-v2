// For Data Imports - Ensuring all column names are consistent start
import type { RawRow as ImportRow } from './types'

export const HEADER_MAPS = {
  questions: {
    subject: 'subject',

    category: 'category',

    year: 'year',

    question: 'question',

    passage: 'passage',

    'option a': 'optionA',
    optiona: 'optionA',
    option_a: 'optionA',

    'option b': 'optionB',
    optionb: 'optionB',
    option_b: 'optionB',

    'option c': 'optionC',
    optionc: 'optionC',
    option_c: 'optionC',

    'option d': 'optionD',
    optiond: 'optionD',
    option_d: 'optionD',

    answer: 'correctAnswer',
    'correct answer': 'correctAnswer',
    correctanswer: 'correctAnswer',

    explanation: 'explanation',

    difficulty: 'difficulty',

    source: 'source',

    marks: 'marks',

    'negative marks': 'negativeMarks',
    negativemarks: 'negativeMarks',

    tags: 'tags',
  },
}

function normalizeHeader(header: string): string {
  return header.trim().toLowerCase().replace(/[_-]/g, ' ').replace(/\s+/g, ' ')
}

function normalizeValue(value: unknown): unknown {
  if (typeof value !== 'string') {
    return value
  }

  return value.trim()
}

export function transformQuestionRow(row: ImportRow): ImportRow {
  const transformed: ImportRow = {}

  for (const key of Object.keys(row)) {
    const normalized = normalizeHeader(key)

    const mappedKey =
      HEADER_MAPS.questions[normalized as keyof typeof HEADER_MAPS.questions] ?? normalized

    let value = normalizeValue(row[key])

    switch (mappedKey) {
      case 'difficulty':
        value = String(value).toLowerCase()
        break

      case 'source':
        value = String(value).toLowerCase()
        break

      case 'correctAnswer':
        value = String(value).toUpperCase()
        break

      case 'year':
      case 'marks':
      case 'negativeMarks':
        value = Number(value)
        break

      case 'tags':
        if (typeof value === 'string') {
          value = value
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean)
        }
        break
    }

    transformed[mappedKey] = value
  }

  return transformed
}



// export function mapHeaders(row: Record<string, unknown>): Record<string, unknown> {
//   const mapped: Record<string, unknown> = {}

//   for (const key of Object.keys(row)) {
//     const normalized = normalizeHeader(key)

//     mapped[HEADER_MAP[normalized] ?? normalized] = row[key]
//   }

//   return mapped
// }


// For Data Imports - Ensuring all column names are consistent end
