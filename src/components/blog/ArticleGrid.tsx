import React from 'react'
import Link from 'next/link'
import { ArticleCard } from './ArticleCard'
import type { Blog } from '@/payload-types'

interface ArticleGridProps {
  posts: Blog[]
  totalDocs: number
  totalPages: number
  currentPage: number
  category?: string
}

export function ArticleGrid({ posts, totalDocs, totalPages, currentPage, category }: ArticleGridProps) {
  const gridLabel = category && category !== 'All' ? `${category} Articles` : 'All Articles'
  const totalLabel = `${totalDocs} article${totalDocs !== 1 ? 's' : ''}`

  function pageHref(page: number) {
    const params = new URLSearchParams()
    if (category && category !== 'All') params.set('category', category)
    if (page > 1) params.set('page', String(page))
    const qs = params.toString()
    return `/blog${qs ? `?${qs}` : ''}`
  }

  return (
    <section className="blog-articles-section" style={{ padding: '44px 0 64px' }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 max-[768px]:px-4">
        {/* Section heading */}
        <div className="flex items-center justify-between gap-4 mb-7">
          <h3
            className="font-display font-bold text-ink"
            style={{ fontSize: 22, letterSpacing: '-0.015em' }}
          >
            {gridLabel}
          </h3>
          <span className="text-[14px] text-muted">{totalLabel}</span>
        </div>

        {/* Grid */}
        {posts.length > 0 ? (
          <div
            className="blog-article-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
          >
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center" style={{ padding: '80px 24px' }}>
            <div
              className="flex items-center justify-center mx-auto mb-4"
              style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--color-lavender)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-violet)" strokeWidth="2" width="24" height="24" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <p className="text-[16px] font-semibold text-ink">No articles yet in this category.</p>
            <p className="text-[14px] text-muted mt-[6px]">More content coming soon.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-[6px]" style={{ marginTop: 52 }}>
            {currentPage > 1 && (
              <Link
                href={pageHref(currentPage - 1)}
                className="grid place-items-center text-ink border border-border bg-white transition-[border-color,color] duration-200 hover:border-violet hover:text-violet"
                style={{ width: 40, height: 40, borderRadius: 10 }}
                aria-label="Previous page"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden><polyline points="15 18 9 12 15 6" /></svg>
              </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
              const active = num === currentPage
              return (
                <Link
                  key={num}
                  href={pageHref(num)}
                  className="grid place-items-center font-semibold text-[14px] transition-[background,color,border-color] duration-200"
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    border: active ? '1.5px solid var(--color-violet)' : '1px solid var(--color-border)',
                    background: active ? 'var(--color-violet)' : '#fff',
                    color: active ? '#fff' : 'var(--color-ink)',
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  {num}
                </Link>
              )
            })}

            {currentPage < totalPages && (
              <Link
                href={pageHref(currentPage + 1)}
                className="grid place-items-center text-ink border border-border bg-white transition-[border-color,color] duration-200 hover:border-violet hover:text-violet"
                style={{ width: 40, height: 40, borderRadius: 10 }}
                aria-label="Next page"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
