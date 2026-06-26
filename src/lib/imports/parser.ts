import { parseCSV } from './csv'
import { parseXLSX } from './xlsx'
import { normalizeKey } from './normalize'

export const getFileExtension = (filename: string): string =>
  filename.split('.').pop()?.toLowerCase() || ''

/** A parsed file is a list of rows keyed by their original column headers. */
export type RawRow = Record<string, unknown>

/**
 * Parse a file buffer into raw rows, dispatching by extension to the
 * format-specific parser. CSV and XLSX each own their quirks.
 */
export const parseFile = async (file: Buffer, ext: string): Promise<RawRow[]> => {
  switch (ext) {
    case 'csv':
      return parseCSV(file)
    case 'xlsx':
    case 'xls':
      return parseXLSX(file)
    default:
      throw new Error(`Unsupported file type ".${ext}". Upload a .csv or .xlsx file.`)
  }
}

/**
 * Rewrite a row's keys to canonical lookup keys so importers can read columns
 * regardless of header casing/spacing ("Correct Answer" → "correctanswer").
 */
export const normalizeHeaders = (row: RawRow): RawRow => {
  const out: RawRow = {}
  for (const [key, value] of Object.entries(row)) {
    out[normalizeKey(key)] = value
  }
  return out
}
