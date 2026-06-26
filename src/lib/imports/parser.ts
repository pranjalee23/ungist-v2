import { parseCSV } from './csv'
import { parseXLSX } from './xlsx'

import type { ParsedImportFile } from './types'

export function getExtension(filename: string) {
  return filename.split('.').pop()?.toLowerCase()
}

export function isCSV(filename: string) {
  return getExtension(filename) === 'csv'
}

export function isExcel(filename: string) {
  return ['xlsx', 'xls'].includes(getExtension(filename) || '')
}

export async function parseImportFile(filename: string, buffer: Buffer): Promise<ParsedImportFile> {
  const extension = getExtension(filename)

  switch (extension) {
    case 'csv':
      return parseCSV(buffer)

    case 'xlsx':
    case 'xls':
      return parseXLSX(buffer)

    default:
      throw new Error(`Unsupported import file type: ${extension}`)
  }
}