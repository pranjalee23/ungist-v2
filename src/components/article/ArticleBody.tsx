import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Blog } from '@/payload-types'

interface ArticleBodyProps {
  content: Blog['content']
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <article className="prose">
      <RichText data={content} />
    </article>
  )
}
