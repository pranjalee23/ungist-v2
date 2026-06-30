import React from 'react'
import type { Author } from '@/payload-types'

interface ArticleAuthorBioProps {
  author: Author
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export function ArticleAuthorBio({ author }: ArticleAuthorBioProps) {
  return (
    <div
      className="article-author-bio flex gap-5 items-flex-start"
      style={{
        background: 'var(--color-surface)',
        borderRadius: 20,
        padding: 28,
        marginTop: 48,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 20,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#C084FC,#9A2FFB)',
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'var(--font-display)',
          }}
        >
          {initials(author.name)}
        </span>
      </div>

      <div>
        <div className="text-[16px] font-bold text-ink" style={{ marginBottom: 4 }}>
          {author.name}
        </div>
        {author.designation && (
          <div className="text-[13px] font-semibold text-violet" style={{ marginBottom: 10 }}>
            {author.designation} · UNGIST
          </div>
        )}
        {author.bio && (
          <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.65 }}>
            {author.bio}
          </p>
        )}
      </div>
    </div>
  )
}
