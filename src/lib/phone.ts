export const normalizePhone = (phone: string): string => {
  if (!phone) return ''

  let normalized = phone.trim()

  // Remove spaces, dashes, brackets
  normalized = normalized.replace(/[^\d+]/g, '')

  // Already international
  if (normalized.startsWith('+')) {
    return normalized
  }

  // Remove leading 0
  if (normalized.startsWith('0') && normalized.length === 11) {
    normalized = normalized.slice(1)
  }

  // Indian mobile
  if (/^[6-9]\d{9}$/.test(normalized)) {
    return `+91${normalized}`
  }

  return normalized
}
