export interface AuthorImportRow {
  Name: string
  Email: string
}

export const importAuthors = async (rows: AuthorImportRow[]) => {
  return rows
}
