export interface LeadImportRow {
  Name: string
  Email?: string
  Phone?: string
}

export const importLeads = async (rows: LeadImportRow[]) => {
  return rows
}
