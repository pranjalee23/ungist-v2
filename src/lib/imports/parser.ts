import { csvAdapter } from './csv'
import { xlsxAdapter } from './xlsx'
import { jsonAdapter } from './json'
import { pdfAdapter } from './pdf'
import { normalizeKey } from './normalize'
import type { RawRow, SourceAdapter } from './types'

export type { RawRow }

export const getFileExtension = (filename: string): string =>
  filename.split('.').pop()?.toLowerCase() || ''

/**
 * Registered source adapters. Adding a format (or a future AI/OCR source) is one
 * entry here — the engine and importers are never touched.
 */
const ADAPTERS: SourceAdapter[] = [csvAdapter, xlsxAdapter, jsonAdapter, pdfAdapter]

const byExtension = new Map<string, SourceAdapter>()
for (const adapter of ADAPTERS) {
  for (const ext of adapter.extensions) byExtension.set(ext, adapter)
}

/** All file extensions the engine can parse (with leading dot). */
export const supportedFileExtensions = (): string[] => [...byExtension.keys()]

/**
 * Parse a file buffer into raw rows, dispatching by extension to the matching
 * source adapter.
 */
export const parseFile = async (file: Buffer, ext: string): Promise<RawRow[]> => {
  const adapter = byExtension.get(`.${ext}`)
  if (!adapter) {
    throw new Error(
      `Unsupported file type ".${ext}". Supported: ${supportedFileExtensions().join(', ')}.`,
    )
  }
  return adapter.extract(file)
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
