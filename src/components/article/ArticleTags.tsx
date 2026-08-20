import React from 'react'

interface ArticleTagsProps {
  tags: string[]
}

export function ArticleTags({ tags }: ArticleTagsProps) {
  if (!tags.length) return null

  return (
    <div className="article-tags flex flex-wrap gap-2" style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--color-border)' }}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[13px] text-muted cursor-pointer transition-[border-color,color] duration-200 hover:border-violet hover:text-violet"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            padding: '6px 14px',
            borderRadius: 999,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
