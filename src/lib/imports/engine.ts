import type { Payload } from 'payload'
import type { ImportError } from './validator'
import type { AnyImporter, ImportContext, ImportMode, ImportType } from './types'
import { getImporter } from './registry'
import { getFileExtension, normalizeHeaders, parseFile } from './parser'

/** Caps how many per-row errors we persist, to keep the doc write bounded. */
const MAX_STORED_ERRORS = 200

interface RunPipelineArgs {
  importId: number | string
  payload: Payload
  /** false = validate/preview only (no writes); true = perform the import. */
  commit: boolean
  /** Raw file bytes, injected by the caller. The engine never touches storage. */
  buffer: Buffer
  /** Original filename — used only to pick the parser by extension. */
  filename: string
}

interface PreviewCounts {
  validRows: number
  errorRows: number
  duplicateRows: number
  unknownSubjects: number
  unknownCategories: number
}

/**
 * The generic import pipeline: parse → normalize headers → transform → validate →
 * resolve → analyze, then (when committing) create + report. Knows nothing about
 * any specific entity — it delegates to the importer resolved from the registry.
 */
const runPipeline = async ({ importId, payload, commit, buffer, filename }: RunPipelineArgs) => {
  const startedAt = new Date().toISOString()

  const doc = await payload.findByID({ collection: 'imports', id: importId, depth: 0 })

  let importer: AnyImporter
  try {
    importer = getImporter(doc.type as ImportType)
  } catch (err) {
    return fail(payload, importId, startedAt, err instanceof Error ? err.message : String(err))
  }

  await payload.update({
    collection: 'imports',
    id: importId,
    data: { status: 'validating', startedAt },
  })

  const mode: ImportMode = doc.mode === 'best_effort' ? 'best_effort' : 'strict'
  const ctx: ImportContext = { payload, mode, cache: new Map() }

  const ext = getFileExtension(filename)
  if (!importer.supportedExtensions.includes(`.${ext}`)) {
    return fail(
      payload,
      importId,
      startedAt,
      `Unsupported file type ".${ext}" for ${importer.label}. Accepted: ${importer.supportedExtensions.join(', ')}.`,
    )
  }

  let rows: Record<string, unknown>[]
  try {
    rows = await parseFile(buffer, ext)
  } catch (err) {
    return fail(payload, importId, startedAt, err instanceof Error ? err.message : String(err))
  }

  const counts: PreviewCounts = {
    validRows: 0,
    errorRows: 0,
    duplicateRows: 0,
    unknownSubjects: 0,
    unknownCategories: 0,
  }
  const errors: ImportError[] = []
  const resolved: unknown[] = []

  for (let i = 0; i < rows.length; i++) {
    const rowNumber = i + 2 // +1 for header row, +1 for 1-based
    const raw = normalizeHeaders(rows[i])

    let rowErrors: ImportError[] = []
    let resolvedData: unknown

    try {
      const row = importer.transform(raw)
      rowErrors = importer.validate(row, rowNumber)

      if (rowErrors.length === 0) {
        const result = await importer.resolve(row, rowNumber, ctx)
        rowErrors = result.errors
        resolvedData = result.data
      }
    } catch (err) {
      rowErrors = [{ row: rowNumber, field: '', message: err instanceof Error ? err.message : String(err) }]
    }

    if (rowErrors.length > 0) {
      counts.errorRows++
      if (rowErrors.some((e) => e.field === 'Subject')) counts.unknownSubjects++
      if (rowErrors.some((e) => e.field === 'Category')) counts.unknownCategories++
      for (const e of rowErrors) {
        if (errors.length < MAX_STORED_ERRORS) errors.push(e)
      }
    } else {
      counts.validRows++
      resolved.push(resolvedData)
    }
  }

  // ---- Preview only ------------------------------------------------------
  if (!commit) {
    await payload.update({
      collection: 'imports',
      id: importId,
      data: {
        status: counts.errorRows > 0 ? 'needs_review' : 'preview_ready',
        totalRows: rows.length,
        successfulRows: 0,
        failedRows: counts.errorRows,
        preview: counts,
        errors,
        completedAt: new Date().toISOString(),
      },
    })
    return
  }

  // ---- Strict gate -------------------------------------------------------
  if (mode === 'strict' && counts.errorRows > 0) {
    await payload.update({
      collection: 'imports',
      id: importId,
      data: {
        status: 'failed',
        totalRows: rows.length,
        successfulRows: 0,
        failedRows: counts.errorRows,
        preview: counts,
        errors,
        completedAt: new Date().toISOString(),
      },
    })
    return
  }

  // ---- Commit valid rows -------------------------------------------------
  let successfulRows = 0
  for (let i = 0; i < resolved.length; i++) {
    try {
      await importer.create(resolved[i] as Record<string, unknown>, ctx)
      successfulRows++
    } catch (err) {
      counts.errorRows++
      if (errors.length < MAX_STORED_ERRORS) {
        errors.push({ row: 0, field: '', message: err instanceof Error ? err.message : String(err) })
      }
    }
  }

  await payload.update({
    collection: 'imports',
    id: importId,
    data: {
      status: counts.errorRows > 0 && successfulRows === 0 ? 'failed' : 'completed',
      totalRows: rows.length,
      successfulRows,
      failedRows: rows.length - successfulRows,
      preview: counts,
      errors,
      completedAt: new Date().toISOString(),
    },
  })
}

const fail = async (
  payload: Payload,
  importId: number | string,
  startedAt: string,
  message: string,
) => {
  await payload.update({
    collection: 'imports',
    id: importId,
    data: {
      status: 'failed',
      startedAt,
      errors: [{ row: 0, field: '', message }],
      completedAt: new Date().toISOString(),
    },
  })
}

/** Validate + preview an import without writing any records. */
export const validateImport = (
  importId: number | string,
  payload: Payload,
  buffer: Buffer,
  filename: string,
) => runPipeline({ importId, payload, commit: false, buffer, filename })

/** Execute an import, creating records (subject to the strict-mode gate). */
export const runImport = (
  importId: number | string,
  payload: Payload,
  buffer: Buffer,
  filename: string,
) => runPipeline({ importId, payload, commit: true, buffer, filename })
