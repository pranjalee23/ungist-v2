import type { Importer, ResolveResult } from './types'
import type { ImportError } from './validator'
import { email, oneOf, phone, required } from './validator'
import { createDoc } from './resolve'
import { normalizePhone } from '@/lib/phone'
import { optStr, str } from './coerce'

const SOURCES = [
  'website',
  'blog',
  'diagnostic',
  'whatsapp',
  'instagram',
  'youtube',
  'referral',
  'walkin',
] as const
const STATUSES = ['new', 'contacted', 'interested', 'demo_class_taken', 'converted', 'lost'] as const
const PRODUCTS = ['csat-foundation', 'test-series', 'book'] as const

interface LeadRow {
  Name: string
  Email: string
  Phone: string
  Source?: string
  Status?: string
  ProductInterest?: string
  Notes?: string
}

interface ResolvedLead {
  name: string
  email: string
  phone: string
  source?: string
  status?: string
  productInterest?: string
  notes?: string
}

export const leadsImporter: Importer<LeadRow, ResolvedLead> = {
  type: 'leads',
  label: 'Leads',
  description: 'Import marketing leads from CSV or Excel.',
  supportedExtensions: ['.csv', '.xlsx', '.json'],
  columns: [
    { header: 'Name', required: true, example: 'Priya Verma' },
    { header: 'Email', required: true, example: 'priya@example.com' },
    { header: 'Phone', required: true, description: 'Indian or E.164 format', example: '9876543210' },
    { header: 'Source', required: false, description: SOURCES.join(', '), example: 'website' },
    { header: 'Status', required: false, description: STATUSES.join(', '), example: 'new' },
    { header: 'ProductInterest', required: false, description: PRODUCTS.join(', '), example: 'test-series' },
    { header: 'Notes', required: false },
  ],

  transform(raw) {
    return {
      Name: str(raw.name),
      Email: str(raw.email),
      Phone: str(raw.phone),
      Source: optStr(raw.source),
      Status: optStr(raw.status),
      ProductInterest: optStr(raw.productinterest),
      Notes: optStr(raw.notes),
    }
  },

  validate(value, row) {
    const errors: ImportError[] = []
    required(value.Name, row, 'Name', errors)
    required(value.Email, row, 'Email', errors)
    required(value.Phone, row, 'Phone', errors)
    email(value.Email, row, 'Email', errors)
    phone(value.Phone, row, 'Phone', errors)
    oneOf(value.Source, SOURCES, row, 'Source', errors)
    oneOf(value.Status, STATUSES, row, 'Status', errors)
    oneOf(value.ProductInterest, PRODUCTS, row, 'ProductInterest', errors)
    return errors
  },

  async resolve(value): Promise<ResolveResult<ResolvedLead>> {
    return {
      errors: [],
      data: {
        name: value.Name,
        email: value.Email,
        phone: normalizePhone(value.Phone),
        source: value.Source,
        status: value.Status,
        productInterest: value.ProductInterest,
        notes: value.Notes,
      },
    }
  },

  async create(resolved, ctx) {
    await createDoc(ctx, 'leads', { ...resolved })
  },
}
