import type { Payload } from 'payload'

const subjectCache = new Map<string, string>()
const categoryCache = new Map<string, string>()

function normalize(value: string): string {
  return value.trim().toLowerCase()
}

/**
 * Resolve Subject Name → Subject ID
 */
export async function resolveSubject(payload: Payload, subjectName: string): Promise<string> {
  const key = normalize(subjectName)

  if (subjectCache.has(key)) {
    return subjectCache.get(key)!
  }

  const result = await payload.find({
    collection: 'subjects',
    where: {
      name: {
        equals: subjectName,
      },
    },
    limit: 1,
  })

  if (!result.docs.length) {
    throw new Error(`Subject "${subjectName}" not found.`)
  }

  const id = String(result.docs[0].id)

  subjectCache.set(key, id)

  return id
}

/**
 * Resolve Category Name + Subject → Category ID
 */
export async function resolveCategory(
  payload: Payload,
  subjectId: string,
  categoryName: string,
): Promise<string> {
  const key = `${subjectId}:${normalize(categoryName)}`

  if (categoryCache.has(key)) {
    return categoryCache.get(key)!
  }

  const result = await payload.find({
    collection: 'categories',
    where: {
      and: [
        {
          subject: {
            equals: subjectId,
          },
        },
        {
          name: {
            equals: categoryName,
          },
        },
      ],
    },
    limit: 1,
  })

  if (!result.docs.length) {
    throw new Error(`Category "${categoryName}" not found for the selected subject.`)
  }

  const id = String(result.docs[0].id)

  categoryCache.set(key, id)

  return id
}

/**
 * Clears caches before a new import starts.
 */
export function clearRelationshipCache() {
  subjectCache.clear()
  categoryCache.clear()
}
