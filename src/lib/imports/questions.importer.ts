import type { Importer, ResolveResult } from './types'
import type { ImportError } from './validator'
import { required } from './validator'
import { validateYear } from '@/lib/validators'
import { normalizeName } from './normalize'
import { createDoc, findByName, loadCollectionDocs, relationId } from './resolve'
import { textToLexical } from './lexical'
import { num, splitList, str } from './coerce'

const DIFFICULTIES = ['easy', 'medium', 'hard'] as const
const SOURCES = ['pyq', 'mock', 'diagnostic', 'practice'] as const
const ANSWERS = ['A', 'B', 'C', 'D'] as const

export interface QuestionImportRow {
  Subject: string
  Category: string
  Year: number
  Question: string
  Passage?: string
  OptionA: string
  OptionB: string
  OptionC: string
  OptionD: string
  CorrectAnswer: string
  Explanation?: string
  Difficulty?: string
  Source?: string
  Tags?: string
}

export interface ResolvedQuestion {
  subject: number | string
  category: number | string
  year: number
  question: string
  optionA: string
  optionB: string
  optionC: string
  optionD: string
  correctAnswer: string
  difficulty: string
  source: string
  passage?: unknown
  explanation?: unknown
  tags?: string[]
}

export const questionsImporter: Importer<QuestionImportRow, ResolvedQuestion> = {
  type: 'questions',
  label: 'Questions',
  description: 'Import UPSC questions from CSV or Excel. Subject and Category must already exist.',
  supportedExtensions: ['.csv', '.xlsx', '.json', '.pdf'],
  columns: [
    { header: 'Subject', required: true, description: 'Existing subject name', example: 'CSAT' },
    { header: 'Category', required: true, description: 'Existing category under the subject', example: 'Reading Comprehension' },
    { header: 'Year', required: true, description: 'Year between 2000 and now+5', example: '2022' },
    { header: 'Question', required: true, example: 'What is the capital of France?' },
    { header: 'Passage', required: false, description: 'Optional comprehension passage' },
    { header: 'OptionA', required: true, example: 'Paris' },
    { header: 'OptionB', required: true, example: 'London' },
    { header: 'OptionC', required: true, example: 'Berlin' },
    { header: 'OptionD', required: true, example: 'Rome' },
    { header: 'CorrectAnswer', required: true, description: 'Must be A, B, C or D', example: 'A' },
    { header: 'Explanation', required: false },
    { header: 'Difficulty', required: false, description: 'easy, medium or hard', example: 'medium' },
    { header: 'Source', required: false, description: 'pyq, mock, diagnostic or practice', example: 'pyq' },
    { header: 'Tags', required: false, description: 'Comma-separated', example: 'geography,europe' },
  ],

  transform(raw) {
    return {
      Subject: str(raw.subject),
      Category: str(raw.category),
      Year: num(raw.year),
      Question: str(raw.question),
      Passage: str(raw.passage) || undefined,
      OptionA: str(raw.optiona),
      OptionB: str(raw.optionb),
      OptionC: str(raw.optionc),
      OptionD: str(raw.optiond),
      CorrectAnswer: str(raw.correctanswer).toUpperCase(),
      Explanation: str(raw.explanation) || undefined,
      Difficulty: str(raw.difficulty).toLowerCase() || undefined,
      Source: str(raw.source).toLowerCase() || undefined,
      Tags: str(raw.tags) || undefined,
    }
  },

  validate(value, row) {
    const errors: ImportError[] = []

    required(value.Subject, row, 'Subject', errors)
    required(value.Category, row, 'Category', errors)
    required(value.Question, row, 'Question', errors)
    required(value.OptionA, row, 'OptionA', errors)
    required(value.OptionB, row, 'OptionB', errors)
    required(value.OptionC, row, 'OptionC', errors)
    required(value.OptionD, row, 'OptionD', errors)

    const yearResult = validateYear(value.Year)
    if (yearResult !== true) errors.push({ row, field: 'Year', message: yearResult })

    if (!ANSWERS.includes(value.CorrectAnswer as (typeof ANSWERS)[number])) {
      errors.push({ row, field: 'CorrectAnswer', message: 'CorrectAnswer must be one of A, B, C, D' })
    }

    if (value.Difficulty && !DIFFICULTIES.includes(value.Difficulty as (typeof DIFFICULTIES)[number])) {
      errors.push({ row, field: 'Difficulty', message: `Difficulty must be one of ${DIFFICULTIES.join(', ')}` })
    }

    if (value.Source && !SOURCES.includes(value.Source as (typeof SOURCES)[number])) {
      errors.push({ row, field: 'Source', message: `Source must be one of ${SOURCES.join(', ')}` })
    }

    return errors
  },

  async resolve(value, row, ctx) {
    const errors: ImportError[] = []

    const subjects = await loadCollectionDocs(ctx, 'subjects')
    const subject = findByName(subjects, value.Subject)
    if (!subject) {
      errors.push({ row, field: 'Subject', message: `Unknown subject "${value.Subject}"` })
    }

    const categories = await loadCollectionDocs(ctx, 'categories')
    const category = categories.find(
      (c) =>
        normalizeName(c.name) === normalizeName(value.Category) &&
        (!subject || String(relationId(c.subject)) === String(subject.id)),
    )
    if (!category) {
      errors.push({
        row,
        field: 'Category',
        message: subject
          ? `Unknown category "${value.Category}" for subject "${value.Subject}"`
          : `Unknown category "${value.Category}"`,
      })
    }

    if (errors.length > 0 || !subject || !category) {
      return { errors } as ResolveResult<ResolvedQuestion>
    }

    return {
      errors,
      data: {
        subject: subject.id as number | string,
        category: category.id as number | string,
        year: value.Year,
        question: value.Question,
        optionA: value.OptionA,
        optionB: value.OptionB,
        optionC: value.OptionC,
        optionD: value.OptionD,
        correctAnswer: value.CorrectAnswer,
        difficulty: value.Difficulty || 'medium',
        source: value.Source || 'pyq',
        passage: value.Passage ? textToLexical(value.Passage) : undefined,
        explanation: value.Explanation ? textToLexical(value.Explanation) : undefined,
        tags: value.Tags ? splitList(value.Tags) : undefined,
      },
    }
  },

  async create(resolved, ctx) {
    // questionCode and the category∈subject check are handled by Questions.beforeChange;
    // `active` defaults to true on the collection. create is a pure persist.
    await createDoc(ctx, 'questions', { ...resolved })
  },
}
