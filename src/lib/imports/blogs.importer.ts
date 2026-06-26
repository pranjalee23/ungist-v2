import type { Importer, ResolveResult } from './types'
import type { ImportError } from './validator'
import { oneOf, required } from './validator'
import { createDoc, findByName, loadCollectionDocs } from './resolve'
import { textToLexical } from './lexical'
import { optStr, splitList, str } from './coerce'

const STATUSES = ['draft', 'published', 'unpublished'] as const

interface BlogRow {
  Title: string
  Excerpt: string
  Author: string
  Categories: string
  Content: string
  Tags?: string
  Status?: string
}

interface ResolvedBlog {
  title: string
  excerpt: string
  author: number | string
  categories: string[]
  content: unknown
  tags?: string[]
  status: string
}

export const blogsImporter: Importer<BlogRow, ResolvedBlog> = {
  type: 'blogs',
  label: 'Blogs',
  description: 'Import blog posts. Author must already exist; content becomes rich text.',
  supportedExtensions: ['.csv', '.xlsx', '.json'],
  columns: [
    { header: 'Title', required: true, example: 'How to crack CSAT' },
    { header: 'Excerpt', required: true, example: 'A short summary of the article.' },
    { header: 'Author', required: true, description: 'Existing author name', example: 'Jane Doe' },
    { header: 'Categories', required: true, description: 'Comma-separated', example: 'CSAT,Strategy' },
    { header: 'Content', required: true, description: 'Plain text; stored as rich text' },
    { header: 'Tags', required: false, description: 'Comma-separated', example: 'prelims,tips' },
    { header: 'Status', required: false, description: STATUSES.join(', '), example: 'draft' },
  ],

  transform(raw) {
    return {
      Title: str(raw.title),
      Excerpt: str(raw.excerpt),
      Author: str(raw.author),
      Categories: str(raw.categories),
      Content: str(raw.content),
      Tags: optStr(raw.tags),
      Status: optStr(raw.status),
    }
  },

  validate(value, row) {
    const errors: ImportError[] = []
    required(value.Title, row, 'Title', errors)
    required(value.Excerpt, row, 'Excerpt', errors)
    required(value.Author, row, 'Author', errors)
    required(value.Categories, row, 'Categories', errors)
    required(value.Content, row, 'Content', errors)
    oneOf(value.Status, STATUSES, row, 'Status', errors)
    return errors
  },

  async resolve(value, row, ctx): Promise<ResolveResult<ResolvedBlog>> {
    const errors: ImportError[] = []
    const authors = await loadCollectionDocs(ctx, 'authors')
    const author = findByName(authors, value.Author)
    if (!author) {
      errors.push({ row, field: 'Author', message: `Unknown author "${value.Author}"` })
      return { errors }
    }
    return {
      errors,
      data: {
        title: value.Title,
        excerpt: value.Excerpt,
        author: author.id,
        categories: splitList(value.Categories),
        content: textToLexical(value.Content),
        tags: value.Tags ? splitList(value.Tags) : undefined,
        status: value.Status || 'draft',
      },
    }
  },

  async create(resolved, ctx) {
    await createDoc(ctx, 'blogs', { ...resolved })
  },
}
