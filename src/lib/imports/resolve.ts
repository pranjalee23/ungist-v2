import type { ImportContext } from './types'
import { normalizeName } from './normalize'

export type CollectionDoc = Record<string, unknown> & { id: number | string }

/**
 * Load all docs of a collection once per import run, memoized in ctx.cache.
 * Importers resolve relationships by matching names against these in memory,
 * so a 5,000-row file makes one query per related collection — not 5,000.
 */
export const loadCollectionDocs = async (
  ctx: ImportContext,
  collection: string,
): Promise<CollectionDoc[]> => {
  const key = `docs:${collection}`
  const cached = ctx.cache.get(key) as CollectionDoc[] | undefined
  if (cached) return cached

  const { docs } = await ctx.payload.find({
    collection: collection as never,
    limit: 10000,
    depth: 0,
  })
  const result = docs as CollectionDoc[]
  ctx.cache.set(key, result)
  return result
}

/** Find a doc whose `field` matches `name` case/whitespace-insensitively. */
export const findByName = (
  docs: CollectionDoc[],
  name: string,
  field = 'name',
): CollectionDoc | undefined => {
  const target = normalizeName(name)
  return docs.find((d) => normalizeName(d[field]) === target)
}

/** Extract a related id whether the field holds the id directly or a populated object. */
export const relationId = (value: unknown): number | string | undefined => {
  if (value == null) return undefined
  if (typeof value === 'object') return (value as { id: number | string }).id
  return value as number | string
}

/**
 * Create a single record. Collection-specific hooks (slugs, codes, normalization,
 * reading time) run inside Payload, so importers only supply resolved field data.
 * One cast lives here instead of in every importer.
 */
export const createDoc = (
  ctx: ImportContext,
  collection: string,
  data: Record<string, unknown>,
): Promise<unknown> =>
  ctx.payload.create({ collection: collection as never, data: data as never })
