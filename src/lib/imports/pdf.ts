import { extractText as unpdfExtractText, getDocumentProxy } from 'unpdf'
import { normalizeKey } from './normalize'
import type { RawRow, SourceAdapter } from './types'

/**
 * Deterministic PDF support — for DIGITAL PDFs that follow the labeled-block
 * layout below. Scanned or free-form papers yield no usable rows here; that is
 * the job of the future AI/OCR adapter. The Validate→Preview gate surfaces any
 * block that doesn't parse into a complete question before anything is written.
 *
 * Expected layout (one question per blank-line-separated block):
 *
 *   Subject: CSAT
 *   Category: Reading Comprehension
 *   Year: 2022
 *   Q: What is the capital of France?
 *   A) Paris
 *   B) London
 *   C) Berlin
 *   D) Rome
 *   Answer: A
 */

const FIELD_ALIASES: Record<string, string> = {
  subject: 'Subject',
  category: 'Category',
  year: 'Year',
  q: 'Question',
  question: 'Question',
  passage: 'Passage',
  answer: 'CorrectAnswer',
  correct: 'CorrectAnswer',
  correctanswer: 'CorrectAnswer',
  explanation: 'Explanation',
  difficulty: 'Difficulty',
  source: 'Source',
  tags: 'Tags',
}

/** Parse extracted PDF text into question rows. Pure — unit-testable without a real PDF. */
export const parseQuestionBlocks = (text: string): RawRow[] => {
  const blocks = text
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)

  const rows: RawRow[] = []

  for (const block of blocks) {
    const row: RawRow = {}
    let matched = false

    for (const rawLine of block.split('\n')) {
      const line = rawLine.trim()
      if (!line) continue

      // Option line: "A) ...", "B. ...", "C: ..."
      const option = line.match(/^([A-D])[).:]\s*(.+)$/)
      if (option) {
        row[`Option${option[1]}`] = option[2].trim()
        matched = true
        continue
      }

      // Labeled field: "Subject: ...", "Answer: B"
      const kv = line.match(/^([A-Za-z ]+?)\s*:\s*(.*)$/)
      if (kv) {
        const header = FIELD_ALIASES[normalizeKey(kv[1])]
        if (header) {
          row[header] = kv[2].trim()
          matched = true
        }
      }
    }

    if (matched) rows.push(row)
  }

  return rows
}

/** Extract merged text from a PDF buffer using unpdf (serverless-friendly pdf.js). */
export const extractText = async (file: Buffer): Promise<string> => {
  const pdf = await getDocumentProxy(new Uint8Array(file))
  const { text } = await unpdfExtractText(pdf, { mergePages: true })
  return Array.isArray(text) ? text.join('\n') : text
}

export const parsePDF = async (file: Buffer): Promise<RawRow[]> =>
  parseQuestionBlocks(await extractText(file))

export const pdfAdapter: SourceAdapter = {
  extensions: ['.pdf'],
  extract: parsePDF,
}
