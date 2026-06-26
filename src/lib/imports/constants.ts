export const SUPPORTED_IMPORT_TYPES = [
  'questions',
  'blogs',
  'students',
  'authors',
  'leads',
] as const

export const SUPPORTED_FILE_TYPES = ['csv', 'xlsx', 'xls']

export const REQUIRED_QUESTION_COLUMNS = [
  'subject',
  'category',
  'year',
  'question',
  'optionA',
  'optionB',
  'optionC',
  'optionD',
  'correctAnswer',
] as const
