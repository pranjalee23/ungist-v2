import type { Endpoint, PayloadRequest } from 'payload'
import { isContentManager } from '@/lib/access/isContentManager'
import { getMediaBuffer } from './mediaBuffer'
import { fetchSourceBuffer } from './sourceUrl'
import { runImport, validateImport } from './engine'
import { buildTemplateCsv } from './templates'
import type { ImportType } from './types'

/**
 * Collection endpoints (mounted at /api/imports/:id/{validate,run}). These run
 * inside Payload — they get `req.user`/`req.payload` and Payload's auth for free,
 * so there's no separate REST layer. Storage retrieval happens here; the engine
 * only ever receives a Buffer.
 */
const makeHandler = (action: 'validate' | 'run'): Endpoint['handler'] => {
  return async (req: PayloadRequest) => {
    if (!isContentManager({ req })) {
      return Response.json({ error: 'Forbidden' }, { status: 403 })
    }

    const id = req.routeParams?.id as string
    const doc = await req.payload.findByID({ collection: 'imports', id, depth: 1 })

    const media = typeof doc.file === 'object' ? doc.file : null
    const sourceUrl = typeof doc.sourceUrl === 'string' ? doc.sourceUrl.trim() : ''
    if (!media && !sourceUrl) {
      return Response.json(
        { error: 'No import file or source URL provided.' },
        { status: 400 },
      )
    }

    try {
      // Source URL takes precedence; otherwise read the uploaded media file.
      const { buffer, filename } = sourceUrl
        ? await fetchSourceBuffer(sourceUrl)
        : { buffer: await getMediaBuffer(req.payload, media!), filename: media!.filename || '' }

      if (action === 'validate') {
        await validateImport(id, req.payload, buffer, filename)
      } else {
        await runImport(id, req.payload, buffer, filename)
      }
    } catch (err) {
      return Response.json(
        { error: err instanceof Error ? err.message : `${action} failed` },
        { status: 500 },
      )
    }

    const updated = await req.payload.findByID({ collection: 'imports', id })
    return Response.json({
      status: updated.status,
      preview: updated.preview,
      successfulRows: updated.successfulRows,
      failedRows: updated.failedRows,
    })
  }
}

/** GET /:id/template — download a CSV template for the import's selected type. */
const templateHandler: Endpoint['handler'] = async (req: PayloadRequest) => {
  if (!isContentManager({ req })) {
    return Response.json({ error: 'Forbidden' }, { status: 403 })
  }

  const id = req.routeParams?.id as string
  const doc = await req.payload.findByID({ collection: 'imports', id })

  try {
    const csv = buildTemplateCsv(doc.type as ImportType)
    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${doc.type}-template.csv"`,
      },
    })
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : 'Template unavailable' },
      { status: 400 },
    )
  }
}

export const importEndpoints: Endpoint[] = [
  { path: '/:id/validate', method: 'post', handler: makeHandler('validate') },
  { path: '/:id/run', method: 'post', handler: makeHandler('run') },
  { path: '/:id/template', method: 'get', handler: templateHandler },
]
