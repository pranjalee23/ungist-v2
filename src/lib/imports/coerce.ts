/** Shared cell-value coercion helpers used by every importer's `transform`. */

export const str = (value: unknown): string => String(value ?? '').trim()

export const optStr = (value: unknown): string | undefined => str(value) || undefined

export const num = (value: unknown): number => Number(str(value))

export const optNum = (value: unknown): number | undefined => {
  const s = str(value)
  return s === '' ? undefined : Number(s)
}

/** Split a comma-separated cell into a trimmed, non-empty string array. */
export const splitList = (value: unknown): string[] =>
  str(value)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
