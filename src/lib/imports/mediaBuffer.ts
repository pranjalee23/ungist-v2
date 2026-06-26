import fs from 'fs/promises'
import path from 'path'
import type { Payload } from 'payload'

/**
 * Read an uploaded Media file's bytes from local disk storage.
 *
 * This is the ONLY place that knows about storage. The import engine receives a
 * plain Buffer and stays storage-agnostic, so swapping to S3/GCS later means
 * changing only this function (or branching on the configured upload adapter).
 */
export const getMediaBuffer = async (
  payload: Payload,
  media: { filename?: string | null },
): Promise<Buffer> => {
  if (!media.filename) {
    throw new Error('Uploaded file has no filename — it may still be processing.')
  }

  const uploadConfig = payload.collections?.media?.config?.upload
  const staticDir =
    uploadConfig && typeof uploadConfig === 'object' ? uploadConfig.staticDir : undefined

  const baseDir = staticDir
    ? path.isAbsolute(staticDir)
      ? staticDir
      : path.resolve(process.cwd(), staticDir)
    : path.resolve(process.cwd(), 'media')

  return fs.readFile(path.join(baseDir, media.filename))
}
