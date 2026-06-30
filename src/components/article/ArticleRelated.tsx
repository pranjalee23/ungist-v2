import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { formatDate } from '@/lib/formatDate'
import type { Blog, Author, Media } from '@/payload-types'

interface ArticleRelatedProps {
  posts: Blog[]
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

export function ArticleRelated({ posts }: ArticleRelatedProps) {
  if (!posts.length) return null

  return (
    <section className="article-related" style={{ padding: '80px 0 0' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 max-[768px]:px-4">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <Eyebrow>KEEP READING</Eyebrow>
            <h2
              className="font-display font-bold text-ink"
              style={{ fontSize: 28, letterSpacing: '-0.02em', marginTop: 12 }}
            >
              Related Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-[7px] text-[14px] font-semibold text-violet transition-[gap] duration-200 hover:gap-[10px]"
          >
            View all articles
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>

        <div
          className="art-related-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
        >
          {posts.map((post) => {
            const author = post.author as Author
            const coverImage = post.coverImage as Media | null
            const category = post.categories?.[0] ?? 'General'

            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className="rel-card block">
                <div
                  className="rel-thumb"
                  style={{
                    height: 176,
                    position: 'relative',
                    overflow: 'hidden',
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
                </div>

                <div style={{ padding: '20px 22px 24px' }}>
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
                      marginBottom: 10,
                    }}
                  >
                    {post.title}
                  </h4>

                  <p
                    className="text-muted"
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    className="flex items-center gap-[10px] border-t border-border"
                    style={{ marginTop: 16, paddingTop: 14 }}
                  >
                    <span
                      className="grid place-items-center flex-none rounded-full text-white font-display font-semibold"
                      style={{ width: 28, height: 28, background: '#9a2ffb', fontSize: '0.65rem' }}
                    >
                      {initials(author?.name ?? 'UN')}
                    </span>
                    <div>
                      <div className="text-[13px] font-semibold text-ink">{author?.name ?? 'UNGIST'}</div>
                      {post.publishedAt && (
                        <div className="text-[12px] text-muted">{formatDate(post.publishedAt)}</div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
