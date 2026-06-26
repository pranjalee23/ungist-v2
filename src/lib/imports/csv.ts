import Papa from 'papaparse'

/**
 * Parse a CSV buffer into an array of row objects keyed by header.
 * Empty rows are skipped; all values come back as strings.
 */
export const parseCSV = async (file: Buffer): Promise<Record<string, string>[]> => {
  const { data, errors } = Papa.parse<Record<string, string>>(file.toString('utf8'), {
    header: true,
    skipEmptyLines: 'greedy',
    transformHeader: (h) => h.trim(),
  })

  if (errors.length) {
    throw new Error(`CSV parse error (row ${errors[0].row}): ${errors[0].message}`)
  }

  return data
}
