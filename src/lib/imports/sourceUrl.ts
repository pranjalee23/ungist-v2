/**
 * Acquire import bytes from a URL instead of an uploaded file. Used for Google
 * Sheets and any publicly reachable CSV. Private sheets (OAuth) are out of
 * scope — the sheet must be link-shared / published.
 */

/** Build the CSV-export URL for a Google Sheets link, or return the URL unchanged. */
export const toGoogleSheetCsvUrl = (url: string): string => {
  const match = url.match(/docs\.google\.com\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
  if (!match) return url

  const id = match[1]
  const gid = url.match(/[?#&]gid=([0-9]+)/)?.[1]
  const base = `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`
  return gid ? `${base}&gid=${gid}` : base
}

/** Fetch a source URL into a Buffer plus a synthetic filename (always CSV). */
export const fetchSourceBuffer = async (
  url: string,
): Promise<{ buffer: Buffer; filename: string }> => {
  const target = toGoogleSheetCsvUrl(url)

  let res: Response
  try {
    res = await fetch(target, { redirect: 'follow' })
  } catch {
    throw new Error('Could not reach the source URL.')
  }

  if (!res.ok) {
    throw new Error(
      `Source URL returned ${res.status}. For Google Sheets, make sure the sheet is shared as "Anyone with the link".`,
    )
  }

  const buffer = Buffer.from(await res.arrayBuffer())
  return { buffer, filename: 'sheet.csv' }
}
