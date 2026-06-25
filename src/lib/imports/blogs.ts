export interface BlogImportRow {
  Title: string
  Author: string
  Category: string
  Content: string
}

export const importBlogs = async (rows: BlogImportRow[]) => {
  return rows
}
