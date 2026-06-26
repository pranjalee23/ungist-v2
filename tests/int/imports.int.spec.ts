import { describe, it, expect } from 'vitest'
import ExcelJS from 'exceljs'

import { normalizeName, normalizeKey } from '@/lib/imports/normalize'
import { parseFile, normalizeHeaders } from '@/lib/imports/parser'
import { questionsImporter } from '@/lib/imports/questions.importer'
import { validateImport, runImport } from '@/lib/imports/engine'
import { buildTemplateCsv } from '@/lib/imports/templates'
import type { ImportContext } from '@/lib/imports/types'

// ---- Fixtures --------------------------------------------------------------

const CSV_HEADER = 'Subject,Category,Year,Question,OptionA,OptionB,OptionC,OptionD,CorrectAnswer,Difficulty,Source'
const GOOD_ROW = 'Mathematics,Arithmetic,2022,What is 2+2?,3,4,5,6,B,easy,pyq'
const UNKNOWN_CATEGORY_ROW = 'Mathematics,Nonexistent,2022,What is 3+3?,5,6,7,8,C,easy,pyq'

const SUBJECTS = [{ id: 1, name: 'Mathematics' }]
const CATEGORIES = [{ id: 10, name: 'Arithmetic', subject: 1 }]
const AUTHORS = [{ id: 20, name: 'Jane Doe' }]

const FIXTURE_DOCS: Record<string, { id: number; name: string }[]> = {
  subjects: SUBJECTS,
  categories: CATEGORIES,
  authors: AUTHORS,
}

/** Minimal Payload mock that records create/update calls. */
const makePayload = (importDoc: Record<string, unknown>) => {
  const created: { collection: string; data: Record<string, unknown> }[] = []
  const payload = {
    findByID: async ({ collection }: { collection: string }) => {
      if (collection === 'imports') return importDoc
      throw new Error(`unexpected findByID ${collection}`)
    },
    find: async ({ collection }: { collection: string }) => ({
      docs: FIXTURE_DOCS[collection] ?? [],
    }),
    create: async ({ collection, data }: { collection: string; data: Record<string, unknown> }) => {
      created.push({ collection, data })
      return { id: created.length, ...data }
    },
    update: async ({ data }: { data: Record<string, unknown> }) => {
      Object.assign(importDoc, data)
      return importDoc
    },
  }
  return { payload, created }
}

const bufferFor = (csv: string): Buffer => Buffer.from(csv, 'utf8')

const ctx = (mode: 'strict' | 'best_effort', payload: unknown): ImportContext => ({
  payload: payload as ImportContext['payload'],
  mode,
  cache: new Map(),
})

// ---- normalize -------------------------------------------------------------

describe('normalize', () => {
  it('treats casing and whitespace as equal', () => {
    expect(normalizeName('  Reading   Comprehension ')).toBe('reading comprehension')
    expect(normalizeName('reading comprehension')).toBe('reading comprehension')
  })

  it('canonicalizes header keys', () => {
    expect(normalizeKey('Correct Answer')).toBe('correctanswer')
    expect(normalizeKey('correct_answer')).toBe('correctanswer')
    expect(normalizeKey('CorrectAnswer')).toBe('correctanswer')
  })
})

// ---- parsers ---------------------------------------------------------------

describe('parseFile', () => {
  it('parses CSV into row objects', async () => {
    const rows = await parseFile(Buffer.from(`${CSV_HEADER}\n${GOOD_ROW}`), 'csv')
    expect(rows).toHaveLength(1)
    expect(normalizeHeaders(rows[0]).correctanswer).toBe('B')
  })

  it('parses XLSX into row objects', async () => {
    const wb = new ExcelJS.Workbook()
    const ws = wb.addWorksheet('Sheet1')
    ws.addRow(CSV_HEADER.split(','))
    ws.addRow(GOOD_ROW.split(','))
    const buffer = Buffer.from(await wb.xlsx.writeBuffer())

    const rows = await parseFile(buffer, 'xlsx')
    expect(rows).toHaveLength(1)
    expect(normalizeHeaders(rows[0]).question).toBe('What is 2+2?')
  })

  it('rejects unsupported extensions', async () => {
    await expect(parseFile(Buffer.from(''), 'pdf')).rejects.toThrow(/Unsupported/)
  })
})

// ---- questions importer (unit) --------------------------------------------

describe('questionsImporter', () => {
  it('flags missing required fields and bad enums', () => {
    const row = questionsImporter.transform(normalizeHeaders({ Subject: 'Math', CorrectAnswer: 'Z' }))
    const errors = questionsImporter.validate(row, 2)
    const fields = errors.map((e) => e.field)
    expect(fields).toContain('Question')
    expect(fields).toContain('CorrectAnswer')
  })

  it('resolves subject/category case-insensitively', async () => {
    const { payload } = makePayload({})
    const row = questionsImporter.transform(
      normalizeHeaders({ Subject: 'mathematics', Category: 'ARITHMETIC', Year: 2022 }),
    )
    const { data, errors } = await questionsImporter.resolve(row, 2, ctx('strict', payload))
    expect(errors).toHaveLength(0)
    expect(data?.subject).toBe(1)
    expect(data?.category).toBe(10)
  })

  it('reports an unknown category', async () => {
    const { payload } = makePayload({})
    const row = questionsImporter.transform(
      normalizeHeaders({ Subject: 'Mathematics', Category: 'Nope', Year: 2022 }),
    )
    const { data, errors } = await questionsImporter.resolve(row, 2, ctx('strict', payload))
    expect(data).toBeUndefined()
    expect(errors[0].field).toBe('Category')
  })
})

// ---- engine (preview + run + strict gate) ----------------------------------

describe('import engine', () => {
  const importDocBase = (): Record<string, unknown> => ({
    id: 1,
    type: 'questions',
    file: { id: 5, filename: 'q.csv', url: '/api/media/file/q.csv' },
    mode: 'strict',
  })

  it('validate produces a preview without creating records', async () => {
    const doc = importDocBase()
    const { payload, created } = makePayload(doc)
    await validateImport(1, payload as never, bufferFor(`${CSV_HEADER}\n${GOOD_ROW}`), 'q.csv')

    expect(created).toHaveLength(0)
    expect(doc.status).toBe('preview_ready')
    expect((doc.preview as Record<string, number>).validRows).toBe(1)
  })

  it('needs_review when a row has errors', async () => {
    const doc = importDocBase()
    const { payload } = makePayload(doc)
    await validateImport(1, payload as never, bufferFor(`${CSV_HEADER}\n${UNKNOWN_CATEGORY_ROW}`), 'q.csv')
    expect(doc.status).toBe('needs_review')
    expect((doc.preview as Record<string, number>).unknownCategories).toBe(1)
  })

  it('strict mode imports nothing when any row is invalid', async () => {
    const doc = importDocBase()
    const { payload, created } = makePayload(doc)
    await runImport(1, payload as never, bufferFor(`${CSV_HEADER}\n${GOOD_ROW}\n${UNKNOWN_CATEGORY_ROW}`), 'q.csv')

    expect(created).toHaveLength(0)
    expect(doc.status).toBe('failed')
  })

  it('best_effort imports the valid rows and skips bad ones', async () => {
    const doc: Record<string, unknown> = { ...importDocBase(), mode: 'best_effort' }
    const { payload, created } = makePayload(doc)
    await runImport(1, payload as never, bufferFor(`${CSV_HEADER}\n${GOOD_ROW}\n${UNKNOWN_CATEGORY_ROW}`), 'q.csv')

    expect(created).toHaveLength(1)
    expect(created[0].collection).toBe('questions')
    expect(created[0].data.correctAnswer).toBe('B')
    expect(doc.status).toBe('completed')
  })
})

// ---- other entity importers (via the engine, best_effort) ------------------

const runType = async (type: string, csv: string) => {
  const doc: Record<string, unknown> = {
    id: 1,
    type,
    file: { id: 9, filename: 'x.csv', url: '/api/media/file/x.csv' },
    mode: 'best_effort',
  }
  const { payload, created } = makePayload(doc)
  await runImport(1, payload as never, bufferFor(csv), 'x.csv')
  return { doc, created }
}

describe('entity importers', () => {
  it('imports subjects', async () => {
    const { doc, created } = await runType('subjects', 'Name,Description\nPolity,Indian polity')
    expect(doc.status).toBe('completed')
    expect(created).toEqual([{ collection: 'subjects', data: expect.objectContaining({ name: 'Polity' }) }])
  })

  it('imports categories, resolving subject by name', async () => {
    const { created } = await runType('categories', 'Name,Subject\nAlgebra,mathematics')
    expect(created[0].collection).toBe('categories')
    expect(created[0].data.subject).toBe(1)
  })

  it('flags an unknown subject for categories', async () => {
    const { doc, created } = await runType('categories', 'Name,Subject\nAlgebra,History')
    expect(created).toHaveLength(0)
    expect((doc.errors as { field: string }[])[0].field).toBe('Subject')
  })

  it('imports students and normalizes phone', async () => {
    const { created } = await runType(
      'students',
      'Name,Email,Phone\nAarav,aarav@example.com,9876543210',
    )
    expect(created[0].collection).toBe('students')
    expect(created[0].data.phone).toBe('+919876543210')
  })

  it('rejects a student with a bad email', async () => {
    const { doc, created } = await runType('students', 'Name,Email,Phone\nAarav,not-an-email,9876543210')
    expect(created).toHaveLength(0)
    expect((doc.errors as { field: string }[]).some((e) => e.field === 'Email')).toBe(true)
  })

  it('rejects a lead with an invalid source enum', async () => {
    const { doc } = await runType(
      'leads',
      'Name,Email,Phone,Source\nPriya,priya@example.com,9876543210,carrier-pigeon',
    )
    expect((doc.errors as { field: string }[]).some((e) => e.field === 'Source')).toBe(true)
  })

  it('imports authors', async () => {
    const { created } = await runType('authors', 'Name,Email\nRavi,ravi@example.com')
    expect(created[0].collection).toBe('authors')
    expect(created[0].data.email).toBe('ravi@example.com')
  })

  it('imports blogs, resolving author and wrapping content as rich text', async () => {
    const { created } = await runType(
      'blogs',
      'Title,Excerpt,Author,Categories,Content\nCSAT Tips,Short,Jane Doe,"CSAT,Strategy",Hello world',
    )
    expect(created[0].collection).toBe('blogs')
    expect(created[0].data.author).toBe(20)
    expect(created[0].data.categories).toEqual(['CSAT', 'Strategy'])
    expect((created[0].data.content as { root: unknown }).root).toBeDefined()
  })

  it('flags an unknown author for blogs', async () => {
    const { doc, created } = await runType(
      'blogs',
      'Title,Excerpt,Author,Categories,Content\nT,E,Nobody,CSAT,Body',
    )
    expect(created).toHaveLength(0)
    expect((doc.errors as { field: string }[])[0].field).toBe('Author')
  })
})

// ---- template generator ----------------------------------------------------

describe('buildTemplateCsv', () => {
  it('header row matches the importer columns', () => {
    const csv = buildTemplateCsv('students')
    const [header] = csv.split('\n')
    expect(header).toBe('Name,Email,Phone,Score,Rank,Percentile,RecommendedProgram')
  })

  it('throws for an unregistered type', () => {
    expect(() => buildTemplateCsv('faculty' as never)).toThrow()
  })
})
