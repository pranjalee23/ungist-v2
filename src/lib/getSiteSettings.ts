import { getPayload } from 'payload'
import config from '@/payload.config'
import type { SiteSetting } from '@/payload-types'

/** Fetch the site-wide settings global via the Local API (cached per request). */
export const getSiteSettings = async (): Promise<SiteSetting> => {
  const payload = await getPayload({ config: await config })
  return payload.findGlobal({ slug: 'site-settings' })
}
