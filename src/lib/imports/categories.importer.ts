import type { Importer, ResolveResult } from './types'
import type { ImportError } from './validator'
import { required } from './validator'
import { createDoc, findByName, loadCollectionDocs } from './resolve'
import { optStr, str } from './coerce'

interface CategoryRow {
  Name: string
  Subject: string
  Description?: string
}

interface ResolvedCategory {
  name: string
  subject: number | string
  description?: string
}

export const categoriesImporter: Importer<CategoryRow, ResolvedCategory> = {
  type: 'categories',
  label: 'Categories',
  description: 'Import categories. Each row must reference an existing subject by name.',
  supportedExtensions: ['.csv', '.xlsx'],
  columns: [
    { header: 'Name', required: true, example: 'Reading Comprehension' },
    { header: 'Subject', required: true, description: 'Existing subject name', example: 'CSAT' },
    { header: 'Description', required: false },
  ],

  transform(raw) {
    return {
      Name: str(raw.name),
      Subject: str(raw.subject),
      Description: optStr(raw.description),
    }
  },

  validate(value, row) {
    const errors: ImportError[] = []
    required(value.Name, row, 'Name', errors)
    required(value.Subject, row, 'Subject', errors)
    return errors
  },

  async resolve(value, row, ctx): Promise<ResolveResult<ResolvedCategory>> {
    const errors: ImportError[] = []
    const subjects = await loadCollectionDocs(ctx, 'subjects')
    const subject = findByName(subjects, value.Subject)
    if (!subject) {
      errors.push({ row, field: 'Subject', message: `Unknown subject "${value.Subject}"` })
      return { errors }
    }
    return {
      errors,
      data: { name: value.Name, subject: subject.id, description: value.Description },
    }
  },

  async create(resolved, ctx) {
    await createDoc(ctx, 'categories', { ...resolved })
  },
}
