import type { Payload } from 'payload'
import type { ImportError } from './validator'

export type ImportType =
  | 'questions'
  | 'blogs'
  | 'students'
  | 'authors'
  | 'leads'
  | 'subjects'
  | 'categories'

export type ImportMode = 'strict' | 'best_effort'

/**
 * Describes one expected column. The single source of truth for both the
 * Download Template generator and admin tooltips, so template headers can never
 * drift from what the importer actually reads.
 */
export interface ImportColumn {
  header: string
  required: boolean
  /** Human guidance, e.g. "Must be A, B, C or D". */
  description?: string
  /** Sample value used in generated templates, e.g. "B". */
  example?: string
}

/**
 * Shared state threaded through every stage of a single import run.
 * `cache` lets resolvers memoize relationship lookups (one query per distinct name).
 */
export interface ImportContext {
  payload: Payload
  mode: ImportMode
  cache: Map<string, unknown>
}

export interface ResolveResult<TResolved> {
  data?: TResolved
  errors: ImportError[]
}

/**
 * The contract every entity importer implements. The engine is generic over this
 * interface and knows nothing about questions/blogs/etc. The input is always a
 * plain `Record<string, unknown>` (normalized headers), so the same importer can
 * later be fed by CSV, XLSX, or OCR/AI extraction with no change.
 */
export interface Importer<TRow = Record<string, unknown>, TResolved = Record<string, unknown>> {
  type: ImportType
  /** Display name for the admin entity picker, e.g. "Questions". */
  label: string
  /** One-line description shown in the admin, e.g. "Import UPSC questions from CSV or Excel." */
  description: string
  /** Accepted file extensions (with dot), enforced by the engine before parsing. */
  supportedExtensions: string[]
  /** Column spec — drives the Download Template and documents expected headers. */
  columns: ImportColumn[]
  /** Map a normalized raw row into a typed, coerced row. */
  transform(raw: Record<string, unknown>): TRow
  /** Shape/enum/required validation. Pure — no DB access. `row` is the 1-based data row number. */
  validate(value: TRow, row: number): ImportError[]
  /** Resolve relationships (by name) into IDs. May hit the DB; uses ctx.cache. */
  resolve(value: TRow, row: number, ctx: ImportContext): Promise<ResolveResult<TResolved>>
  /** Persist a single resolved record. */
  create(resolved: TResolved, ctx: ImportContext): Promise<void>
}

/**
 * Type-erased importer for the registry/engine, which must treat all importers
 * uniformly. Entity importers are authored with their rich generics and adapted
 * to this shape via a single cast in the registry.
 */
export type AnyImporter = Importer<Record<string, unknown>, unknown>
