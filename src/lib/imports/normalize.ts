/**
 * Normalization helpers for import lookups.
 *
 * These are intentionally NOT `slugify()` — slugs strip punctuation and symbols
 * that can be meaningful in human-entered names. For matching a spreadsheet value
 * against an existing record we only want to forgive casing and whitespace noise.
 */

/**
 * Normalize a human-entered name for case/whitespace-insensitive comparison.
 * "  Reading   Comprehension " and "reading comprehension" both → "reading comprehension".
 */
export const normalizeName = (value: unknown): string =>
  String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()

/**
 * Normalize a column header to a canonical lookup key.
 * "Correct Answer", "correct_answer" and "CorrectAnswer" all → "correctanswer".
 */
export const normalizeKey = (value: unknown): string =>
  String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
