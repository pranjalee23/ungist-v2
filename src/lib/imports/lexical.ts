/**
 * Wrap plain text into a minimal Lexical editor state, suitable for any Payload
 * `richText` field (questions explanation/passage, blog content, etc.).
 * Shared so importers don't each re-derive the Lexical node shape.
 */
export const textToLexical = (text: string) => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr',
    children: [
      {
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        textFormat: 0,
        children: [
          { type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text, version: 1 },
        ],
      },
    ],
  },
})
