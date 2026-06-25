export interface ImportError {
  row: number
  field: string
  message: string
}

export const required = (value: unknown, row: number, field: string, errors: ImportError[]) => {
  if (value === undefined || value === null || value === '') {
    errors.push({
      row,
      field,
      message: `${field} is required`,
    })
  }
}
