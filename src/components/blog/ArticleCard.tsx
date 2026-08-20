import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/formatDate'
import type { Blog, Author, Media } from '@/payload-types'

interface ArticleCardProps {
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

export function ArticleCard({ post }: ArticleCardProps) {
  const author = post.author as Author
  const coverImage = post.coverImage as Media | null
  const category = post.categories?.[0] ?? 'General'
  const slug = post.slug ?? ''

  return (
    <Link
      href={`/blog/${slug}`}
      className="article-card block rounded-card border border-border bg-white overflow-hidden transition-[box-shadow,border-color] duration-300 cursor-pointer"
      style={{ borderRadius: 'var(--radius-card)' }}
    >
      {/* Thumbnail */}
      <div
        className="article-thumb relative"
        style={{
          height: 180,
          background: coverImage?.url
            ? undefined
            : 'linear-gradient(135deg,#f7f0fe 0%,#ddb3fd 100%)',
          flexShrink: 0,
        }}
      >
        {coverImage?.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverImage.url}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <span
          aria-hidden
          className="font-display font-extrabold pointer-events-none select-none absolute bottom-[-4px] right-3"
          style={{
            fontSize: 52,
            letterSpacing: '-0.05em',
            opacity: 0.12,
            lineHeight: 1,
            color: 'var(--color-ink)',
          }}
        >
          {category.slice(0, 4)}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 22px' }}>
        <div className="flex items-center gap-2 mb-[14px]">
          <Badge variant="brand">{category}</Badge>
          {post.readingTime && (
            <span className="text-[12px] text-muted">{post.readingTime} min read</span>
          )}
        </div>

        <h4
          className="font-display font-bold text-ink"
          style={{
            fontSize: 16,
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </h4>

        <p
          className="text-muted"
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            marginTop: 10,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.excerpt}
        </p>

        {/* Author row */}
        <div className="flex items-center gap-[10px] border-t border-border" style={{ marginTop: 16, paddingTop: 14 }}>
          <span
            className="grid place-items-center flex-none rounded-full text-white font-display font-semibold"
            style={{ width: 28, height: 28, background: '#9a2ffb', fontSize: '0.65rem' }}
          >
            {initials(author?.name ?? 'UN')}
          </span>
          <div className="flex-1 min-w-0">
            <div
              className="text-[13px] font-semibold text-ink whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {author?.name ?? 'UNGIST'}
            </div>
            {post.publishedAt && (
              <div className="text-[12px] text-muted mt-px">{formatDate(post.publishedAt)}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
