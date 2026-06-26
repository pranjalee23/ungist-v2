import type { Importer, ResolveResult } from './types'
import type { ImportError } from './validator'
import { required } from './validator'
import { createDoc } from './resolve'
import { optStr, str } from './coerce'

interface SubjectRow {
  Name: string
  Description?: string
}

interface ResolvedSubject {
  name: string
  description?: string
}

export const subjectsImporter: Importer<SubjectRow, ResolvedSubject> = {
  type: 'subjects',
  label: 'Subjects',
  description: 'Import subjects in bulk. Code and slug are generated automatically.',
  supportedExtensions: ['.csv', '.xlsx'],
  columns: [
    { header: 'Name', required: true, example: 'CSAT' },
    { header: 'Description', required: false },
  ],

  transform(raw) {
    return {
      Name: str(raw.name),
      Description: optStr(raw.description),
    }
  },

  validate(value, row) {
    const errors: ImportError[] = []
    required(value.Name, row, 'Name', errors)
    return errors
  },

  async resolve(value): Promise<ResolveResult<ResolvedSubject>> {
    return { errors: [], data: { name: value.Name, description: value.Description } }
  },

  async create(resolved, ctx) {
    await createDoc(ctx, 'subjects', { ...resolved })
  },
}
