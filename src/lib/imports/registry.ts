import type { AnyImporter, ImportType } from './types'
import { questionsImporter } from './questions.importer'
import { subjectsImporter } from './subjects.importer'
import { categoriesImporter } from './categories.importer'
import { studentsImporter } from './students.importer'
import { leadsImporter } from './leads.importer'
import { authorsImporter } from './authors.importer'
import { blogsImporter } from './blogs.importer'

/**
 * Maps an import `type` to its importer. This is the single extension point:
 * adding a collection (or an OCR/AI source) means adding one entry here and a new
 * importer module — the engine is never touched.
 *
 * Each importer is authored with its own rich row/resolved types and adapted to
 * the erased `AnyImporter` shape here with a single structural cast.
 */
export const registry: Partial<Record<ImportType, AnyImporter>> = {
  questions: questionsImporter as unknown as AnyImporter,
  subjects: subjectsImporter as unknown as AnyImporter,
  categories: categoriesImporter as unknown as AnyImporter,
  students: studentsImporter as unknown as AnyImporter,
  leads: leadsImporter as unknown as AnyImporter,
  authors: authorsImporter as unknown as AnyImporter,
  blogs: blogsImporter as unknown as AnyImporter,
}

/**
 * Single resolution point for importers. Centralizes the "is this type supported?"
 * check so the engine and template generator don't each re-implement it — and
 * gives one place to add logging or lazy loading later.
 */
export const getImporter = (type: ImportType): AnyImporter => {
  const importer = registry[type]
  if (!importer) {
    throw new Error(`No importer registered for type "${type}".`)
  }
  return importer
}

/** Whether an import type has a registered importer. */
export const isSupportedType = (type: ImportType): boolean => registry[type] != null
