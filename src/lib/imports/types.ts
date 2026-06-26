export interface ImportError {
  row: number
  field: string
  message: string
}

export interface ImportResult<T = unknown> {
  rows: T[]
  errors: ImportError[]
}

export interface ValidationResult {
  valid: boolean
  errors: ImportError[]
}

export type ImportRow = Record<string, unknown>

export interface ParsedImportFile {
  filename?: string
  extension?: string
  headers: string[]
  rows: ImportRow[]
}
