export interface QuestionImportRow {
  Subject: string
  Category: string
  Year: number
  Question: string
  Passage?: string
  OptionA: string
  OptionB: string
  OptionC: string
  OptionD: string
  CorrectAnswer: 'A' | 'B' | 'C' | 'D'
  Explanation?: string
  Difficulty?: string
  Source?: string
  Tags?: string
}

export const importQuestions = async (rows: QuestionImportRow[]) => {
  return rows
}
