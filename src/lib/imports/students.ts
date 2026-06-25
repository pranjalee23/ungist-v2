export interface StudentImportRow {
  Name: string
  Email: string
  Phone?: string
}

export const importStudents = async (rows: StudentImportRow[]) => {
  return rows
}
