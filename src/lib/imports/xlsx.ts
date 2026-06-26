import ExcelJS from 'exceljs'
import type { SourceAdapter } from './types'

/**
 * Parse the first worksheet of an XLSX buffer into row objects.
 * The first row is treated as the header. Values are coerced to primitives;
 * rich cell objects (formulas, hyperlinks) fall back to their displayed text.
 */
export const parseXLSX = async (file: Buffer): Promise<Record<string, unknown>[]> => {
  const workbook = new ExcelJS.Workbook()
  // exceljs accepts a Node Buffer here despite the ArrayBuffer-typed signature.
  await workbook.xlsx.load(file as unknown as ArrayBuffer)

  const sheet = workbook.worksheets[0]
  if (!sheet) return []

  const headerRow = sheet.getRow(1)
  const headers: string[] = []
  headerRow.eachCell({ includeEmpty: false }, (cell, col) => {
    headers[col] = String(cell.value ?? '').trim()
  })

  const rows: Record<string, unknown>[] = []
  for (let r = 2; r <= sheet.rowCount; r++) {
    const row = sheet.getRow(r)
    const record: Record<string, unknown> = {}
    let hasValue = false

    headers.forEach((header, col) => {
      if (!header) return
      const cell = row.getCell(col)
      const value = normalizeCellValue(cell.value)
      record[header] = value
      if (value !== '' && value != null) hasValue = true
    })

    if (hasValue) rows.push(record)
  }

  return rows
}

export const xlsxAdapter: SourceAdapter = {
  extensions: ['.xlsx', '.xls'],
  extract: parseXLSX,
}

/** Reduce an exceljs cell value to a primitive string/number. */
const normalizeCellValue = (value: ExcelJS.CellValue): unknown => {
  if (value == null) return ''
  if (value instanceof Date) return value
  if (typeof value === 'object') {
    // Hyperlink / rich text / formula cells expose a `text` or `result`.
    const obj = value as unknown as Record<string, unknown>
    if ('text' in obj) return obj.text
    if ('result' in obj) return obj.result
    if ('richText' in obj && Array.isArray(obj.richText)) {
      return (obj.richText as { text: string }[]).map((t) => t.text).join('')
    }
    return String(value)
  }
  return value
}
