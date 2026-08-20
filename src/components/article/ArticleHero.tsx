import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import type { Blog, Author } from '@/payload-types'

interface ArticleHeroProps {
  post: Blog
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

export function ArticleHero({ post }: ArticleHeroProps) {
  const author = post.author as Author
  const category = post.categories?.[0] ?? 'Article'

  return (
    <header
      className="art-hero"
      style={{ background: '#faf7ff', borderBottom: '1px solid var(--color-border)' }}
    >
      <div
        className="art-hero-inner w-full mx-auto text-center"
        style={{ maxWidth: 760, padding: '96px 24px 80px' }}
      >
        {/* Breadcrumb */}
        <nav
          className="flex items-center justify-center gap-2 text-[13px] flex-wrap"
          style={{ color: 'var(--color-muted)', marginBottom: 18 }}
        >
          <Link href="/" className="transition-opacity hover:opacity-70" style={{ color: 'var(--color-muted)' }}>
            Home
          </Link>
          <span style={{ color: 'var(--color-border)', fontSize: 11 }}>·</span>
          <Link href="/blog" className="transition-opacity hover:opacity-70" style={{ color: 'var(--color-muted)' }}>
            Blog
          </Link>
          <span style={{ color: 'var(--color-border)', fontSize: 11 }}>·</span>
          <span style={{ color: 'var(--color-ink)', fontWeight: 500 }}>{category}</span>
        </nav>

        {/* Category label */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'var(--color-violet)',
            marginBottom: 18,
          }}
        >
          {category}
        </div>

        {/* Title */}
        <h1
          className="font-display text-ink"
          style={{
            fontSize: 'clamp(2rem,3.8vw,48px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          {post.title}
        </h1>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'var(--color-border)',
            margin: '28px auto',
            maxWidth: 80,
          }}
        />

        {/* Meta row */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {/* Avatar */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#C084FC,#9A2FFB)',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#fff',
                fontFamily: 'var(--font-display)',
              }}
            >
              {initials(author?.name ?? 'UN')}
            </span>
          </div>

          <span className="text-[14px] font-semibold text-ink">{author?.name ?? 'UNGIST'}</span>

          <span className="text-[13px] text-muted">·</span>

          {post.publishedAt && (
            <span className="text-[14px] text-muted">{formatDate(post.publishedAt)}</span>
          )}

          {post.readingTime && (
            <>
              <span className="text-[13px] text-muted">·</span>
              <div className="flex items-center gap-[6px] text-[14px] text-muted">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {post.readingTime} min read
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
