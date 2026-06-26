import { getImporter } from './registry'
import type { ImportType } from './types'

const csvCell = (value: string): string =>
  /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value

/**
 * Build a CSV template for an import type straight from its importer's `columns`
 * — header row plus one example row. Because both the template and the importer's
 * header expectations come from the same `columns`, they can never drift apart.
 */
export const buildTemplateCsv = (type: ImportType): string => {
  const importer = getImporter(type)
  const headerRow = importer.columns.map((c) => csvCell(c.header)).join(',')
  const exampleRow = importer.columns.map((c) => csvCell(c.example ?? '')).join(',')
  return `${headerRow}\n${exampleRow}\n`
}
