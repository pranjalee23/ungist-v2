import type { ImportError, ImportRow } from './types'
import { REQUIRED_QUESTION_COLUMNS } from './constants'

export function required(value: unknown, row: number, field: string, errors: ImportError[]) {
  if (value === undefined || value === null || value === '') {
    errors.push({
      row,
      field,
      message: `${field} is required`,
    })
  }
}

export function isNumber(value: unknown, row: number, field: string, errors: ImportError[]) {
  if (value !== '' && value !== undefined && Number.isNaN(Number(value))) {
    errors.push({
      row,
      field,
      message: `${field} must be a number`,
    })
  }
}

export function validateQuestionRow(row: ImportRow, rowNumber: number): ImportError[] {
  const errors: ImportError[] = []

  for (const field of REQUIRED_QUESTION_COLUMNS) {
    if (row[field] === undefined || row[field] === null || row[field] === '') {
      errors.push({
        row: rowNumber,
        field,
        message: `${field} is required.`,
      })
    }
  }

  if (row.correctAnswer && !['A', 'B', 'C', 'D'].includes(String(row.correctAnswer))) {
    errors.push({
      row: rowNumber,
      field: 'correctAnswer',
      message: 'Correct Answer must be A, B, C or D.',
    })
  }

  if (row.difficulty && !['easy', 'medium', 'hard'].includes(String(row.difficulty))) {
    errors.push({
      row: rowNumber,
      field: 'difficulty',
      message: 'Difficulty must be Easy, Medium or Hard.',
    })
  }

  if (row.source && !['pyq', 'mock', 'diagnostic', 'practice'].includes(String(row.source))) {
    errors.push({
      row: rowNumber,
      field: 'source',
      message: 'Invalid source.',
    })
  }

  return errors
}
