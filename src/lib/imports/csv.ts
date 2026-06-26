import { parse } from 'csv-parse/sync'

import type { ImportRow, ParsedImportFile } from './types'

export async function parseCSV(buffer: Buffer): Promise<ParsedImportFile> {
  const rows = parse(buffer, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  }) as ImportRow[]

  const headers = rows.length > 0 ? Object.keys(rows[0]) : []

  return {
    headers,
    rows,
  }
}
