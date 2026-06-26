import { validateEmail, validatePhone } from '@/lib/validators'
import { normalizePhone } from '@/lib/phone'

export interface ImportError {
  row: number
  field: string
  message: string
}

export function required(value: unknown, row: number, field: string, errors: ImportError[]) {
  if (value === undefined || value === null || value === '') {
    errors.push({
      row,
      field,
      message: `${field} is required`,
    })
  }
}

/** Validate an email column (skips empty — pair with `required` when mandatory). */
export const email = (value: unknown, row: number, field: string, errors: ImportError[]) => {
  if (!value) return
  const result = validateEmail(String(value))
  if (result !== true) errors.push({ row, field, message: result })
}

/** Validate a phone column after normalization (skips empty). */
export const phone = (value: unknown, row: number, field: string, errors: ImportError[]) => {
  if (!value) return
  const result = validatePhone(normalizePhone(String(value)))
  if (result !== true) errors.push({ row, field, message: result })
}

/** Ensure an optional value is one of the allowed options (skips empty). */
export const oneOf = (
  value: unknown,
  allowed: readonly string[],
  row: number,
  field: string,
  errors: ImportError[],
) => {
  if (!value) return
  if (!allowed.includes(String(value))) {
    errors.push({ row, field, message: `${field} must be one of ${allowed.join(', ')}` })
  }
}

/** Validate an optional numeric column within an inclusive range (skips empty). */
export const numberInRange = (
  value: unknown,
  row: number,
  field: string,
  errors: ImportError[],
  { min, max }: { min?: number; max?: number },
) => {
  if (value === undefined || value === null || value === '') return
  const n = Number(value)
  if (Number.isNaN(n)) {
    errors.push({ row, field, message: `${field} must be a number` })
    return
  }
  if (min != null && n < min) errors.push({ row, field, message: `${field} must be ≥ ${min}` })
  if (max != null && n > max) errors.push({ row, field, message: `${field} must be ≤ ${max}` })
}
