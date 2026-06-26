import type { RawRow, SourceAdapter } from './types'

/**
 * Parse a JSON buffer into rows. Accepts a top-level array of objects, or an
 * object with a `rows` array. Each element must be a plain object (one row).
 */
export const parseJSON = async (file: Buffer): Promise<RawRow[]> => {
  let data: unknown
  try {
    data = JSON.parse(file.toString('utf8'))
  } catch {
    throw new Error('Invalid JSON file.')
  }

  const list = Array.isArray(data)
    ? data
    : Array.isArray((data as { rows?: unknown })?.rows)
      ? (data as { rows: unknown[] }).rows
      : null

  if (!list) {
    throw new Error('JSON must be an array of objects, or an object with a "rows" array.')
  }

  return list.map((item, i) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      throw new Error(`JSON row ${i + 1} must be an object.`)
    }
    return item as RawRow
  })
}

export const jsonAdapter: SourceAdapter = {
  extensions: ['.json'],
  extract: parseJSON,
}
