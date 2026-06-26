import type { Importer, ResolveResult } from './types'
import type { ImportError } from './validator'
import { email, numberInRange, phone, required } from './validator'
import { createDoc } from './resolve'
import { normalizePhone } from '@/lib/phone'
import { optNum, optStr, str } from './coerce'

interface StudentRow {
  Name: string
  Email: string
  Phone: string
  Score?: string
  Rank?: string
  Percentile?: string
  RecommendedProgram?: string
}

interface ResolvedStudent {
  name: string
  email: string
  phone: string
  score?: number
  rank?: number
  percentile?: number
  recommendedProgram?: string
}

export const studentsImporter: Importer<StudentRow, ResolvedStudent> = {
  type: 'students',
  label: 'Students',
  description: 'Import student records from CSV or Excel.',
  supportedExtensions: ['.csv', '.xlsx'],
  columns: [
    { header: 'Name', required: true, example: 'Aarav Sharma' },
    { header: 'Email', required: true, example: 'aarav@example.com' },
    { header: 'Phone', required: true, description: 'Indian or E.164 format', example: '9876543210' },
    { header: 'Score', required: false, description: '0 or greater', example: '120' },
    { header: 'Rank', required: false, description: '0 or greater', example: '45' },
    { header: 'Percentile', required: false, description: 'Between 0 and 100', example: '92.5' },
    { header: 'RecommendedProgram', required: false, example: 'CSAT Foundation' },
  ],

  transform(raw) {
    return {
      Name: str(raw.name),
      Email: str(raw.email),
      Phone: str(raw.phone),
      Score: optStr(raw.score),
      Rank: optStr(raw.rank),
      Percentile: optStr(raw.percentile),
      RecommendedProgram: optStr(raw.recommendedprogram),
    }
  },

  validate(value, row) {
    const errors: ImportError[] = []
    required(value.Name, row, 'Name', errors)
    required(value.Email, row, 'Email', errors)
    required(value.Phone, row, 'Phone', errors)
    email(value.Email, row, 'Email', errors)
    phone(value.Phone, row, 'Phone', errors)
    numberInRange(value.Score, row, 'Score', errors, { min: 0 })
    numberInRange(value.Rank, row, 'Rank', errors, { min: 0 })
    numberInRange(value.Percentile, row, 'Percentile', errors, { min: 0, max: 100 })
    return errors
  },

  async resolve(value): Promise<ResolveResult<ResolvedStudent>> {
    return {
      errors: [],
      data: {
        name: value.Name,
        email: value.Email,
        phone: normalizePhone(value.Phone),
        score: optNum(value.Score),
        rank: optNum(value.Rank),
        percentile: optNum(value.Percentile),
        recommendedProgram: value.RecommendedProgram,
      },
    }
  },

  async create(resolved, ctx) {
    await createDoc(ctx, 'students', { ...resolved })
  },
}
