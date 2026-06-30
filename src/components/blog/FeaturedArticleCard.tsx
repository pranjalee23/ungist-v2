import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/formatDate'
import type { Blog, Author, Media } from '@/payload-types'

interface FeaturedArticleCardProps {
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

export function FeaturedArticleCard({ post }: FeaturedArticleCardProps) {
  const author = post.author as Author
  const coverImage = post.coverImage as Media | null
  const category = post.categories?.[0] ?? 'Featured'
  const slug = post.slug ?? ''

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 max-[768px]:px-4" style={{ marginTop: 48 }}>
      <div
        className="featured-card rounded-xl border border-border bg-white overflow-hidden transition-[box-shadow,border-color] duration-300"
        style={{ borderRadius: 'var(--radius-xl)' }}
      >
        <div
          className="blog-featured-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', minHeight: 360 }}
        >
          {/* Thumbnail */}
          <div
            className="article-thumb blog-featured-thumb relative overflow-hidden"
            style={{
              background: coverImage?.url
                ? undefined
                : 'linear-gradient(135deg,#9A2FFB 0%,#7C22D6 55%,#5C18A8 100%)',
              minHeight: 360,
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

            {/* Decorative circles */}
            <div aria-hidden className="absolute" style={{ top: -60, right: -60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,.07)', pointerEvents: 'none' }} />
            <div aria-hidden className="absolute" style={{ bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,.05)', pointerEvents: 'none' }} />

            {/* Featured pill */}
            <div className="absolute top-5 left-5 flex items-center gap-2" style={{ background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.28)', borderRadius: 999, padding: '7px 14px' }}>
              <span className="text-[11px] font-bold text-white tracking-[.08em] uppercase">Featured</span>
            </div>

            {/* Read time */}
            {post.readingTime && (
              <div className="absolute bottom-5 right-5 flex items-center gap-[6px]" style={{ background: 'rgba(0,0,0,.22)', borderRadius: 999, padding: '6px 12px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2" width="12" height="12" aria-hidden><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,.85)' }}>{post.readingTime} min read</span>
              </div>
            )}

            {/* Watermark */}
            <span
              aria-hidden
              className="font-display font-extrabold pointer-events-none select-none absolute bottom-3 left-[18px]"
              style={{ fontSize: 84, letterSpacing: '-0.05em', color: 'rgba(255,255,255,.09)', lineHeight: 1 }}
            >
              {category.slice(0, 4).toUpperCase()}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center" style={{ padding: '36px 40px' }}>
            <div className="flex items-center gap-3 mb-[18px]">
              <Badge variant="brand">{category}</Badge>
            </div>

            <h2
              className="font-display font-bold text-ink"
              style={{
                fontSize: 'clamp(1.2rem,1.9vw,26px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {post.title}
            </h2>

            <p
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                marginTop: 14,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center gap-3 border-t border-border" style={{ marginTop: 24, paddingTop: 20 }}>
              <span
                className="grid place-items-center flex-none rounded-full text-white font-display font-semibold"
                style={{ width: 36, height: 36, background: '#9a2ffb', fontSize: '0.75rem' }}
              >
                {initials(author?.name ?? 'UN')}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-semibold text-ink">{author?.name ?? 'UNGIST'}</div>
                {post.publishedAt && (
                  <div className="text-[13px] text-muted mt-px">{formatDate(post.publishedAt)}</div>
                )}
              </div>
              <Link
                href={`/blog/${slug}`}
                className="inline-flex items-center gap-[6px] text-violet font-semibold text-[14px] whitespace-nowrap transition-[gap] duration-200 hover:gap-[10px]"
              >
                Read Article
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
