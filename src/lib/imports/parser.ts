export const getFileExtension = (filename: string): string =>
  filename.split('.').pop()?.toLowerCase() || ''
