import * as XLSX from 'xlsx'

import type { ImportRow, ParsedImportFile } from './types'

export async function parseXLSX(buffer: Buffer): Promise<ParsedImportFile> {
  const workbook = XLSX.read(buffer, {
    type: 'buffer',
  })

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  const rows = XLSX.utils.sheet_to_json<ImportRow>(sheet, {
    defval: '',
  })

  const headers = rows.length > 0 ? Object.keys(rows[0]) : []

  return {
    headers,
    rows,
  }
}
