import type { Importer, ResolveResult } from './types'
import type { ImportError } from './validator'
import { email, required } from './validator'
import { createDoc } from './resolve'
import { optStr, str } from './coerce'

interface AuthorRow {
  Name: string
  Email: string
  Designation?: string
  Bio?: string
  Website?: string
  LinkedIn?: string
  Twitter?: string
  Instagram?: string
  Facebook?: string
  YouTube?: string
  Telegram?: string
  WhatsApp?: string
}

type ResolvedAuthor = {
  name: string
  email: string
} & Record<string, string | undefined>

export const authorsImporter: Importer<AuthorRow, ResolvedAuthor> = {
  type: 'authors',
  label: 'Authors',
  description: 'Import blog authors. Slug is generated automatically from the name.',
  supportedExtensions: ['.csv', '.xlsx', '.json'],
  columns: [
    { header: 'Name', required: true, example: 'Jane Doe' },
    { header: 'Email', required: true, example: 'jane@example.com' },
    { header: 'Designation', required: false, example: 'Senior Faculty' },
    { header: 'Bio', required: false },
    { header: 'Website', required: false },
    { header: 'LinkedIn', required: false },
    { header: 'Twitter', required: false },
    { header: 'Instagram', required: false },
    { header: 'Facebook', required: false },
    { header: 'YouTube', required: false },
    { header: 'Telegram', required: false },
    { header: 'WhatsApp', required: false },
  ],

  transform(raw) {
    return {
      Name: str(raw.name),
      Email: str(raw.email),
      Designation: optStr(raw.designation),
      Bio: optStr(raw.bio),
      Website: optStr(raw.website),
      LinkedIn: optStr(raw.linkedin),
      Twitter: optStr(raw.twitter),
      Instagram: optStr(raw.instagram),
      Facebook: optStr(raw.facebook),
      YouTube: optStr(raw.youtube),
      Telegram: optStr(raw.telegram),
      WhatsApp: optStr(raw.whatsapp),
    }
  },

  validate(value, row) {
    const errors: ImportError[] = []
    required(value.Name, row, 'Name', errors)
    required(value.Email, row, 'Email', errors)
    email(value.Email, row, 'Email', errors)
    return errors
  },

  async resolve(value): Promise<ResolveResult<ResolvedAuthor>> {
    return {
      errors: [],
      data: {
        name: value.Name,
        email: value.Email,
        designation: value.Designation,
        bio: value.Bio,
        website: value.Website,
        linkedin: value.LinkedIn,
        twitter: value.Twitter,
        instagram: value.Instagram,
        facebook: value.Facebook,
        youtube: value.YouTube,
        telegram: value.Telegram,
        whatsapp: value.WhatsApp,
      },
    }
  },

  async create(resolved, ctx) {
    await createDoc(ctx, 'authors', { ...resolved })
  },
}
