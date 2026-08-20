import React from 'react'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface BlogHeroProps {
  articleCount: number
}

export function BlogHero({ articleCount }: BlogHeroProps) {
  return (
    <section className="blog-hero relative overflow-hidden" style={{ padding: '52px 0 44px' }}>
      {/* Decorative radials */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: -160, right: -120,
          width: 620, height: 620,
          borderRadius: '50%',
          background: 'radial-gradient(circle at center,rgba(154,47,251,.10),transparent 62%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          bottom: -80, left: -80,
          width: 380, height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle at center,rgba(180,92,255,.07),transparent 60%)',
        }}
      />

      <div className="relative w-full max-w-[1280px] mx-auto px-6 max-[768px]:px-4">
        {/* Breadcrumb */}
        <nav className="blog-breadcrumb flex items-center gap-2 text-[13px] text-muted mb-7">
          <Link href="/" className="text-muted transition-colors hover:text-violet">Home</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12" aria-hidden><polyline points="9 18 15 12 9 6" /></svg>
          <span className="text-ink font-medium">Blog</span>
        </nav>

        <Eyebrow>FREE RESOURCES</Eyebrow>

        <h1
          className="font-display font-bold text-ink"
          style={{ fontSize: 'clamp(2rem,4vw,44px)', letterSpacing: '-0.03em', marginTop: 18, maxWidth: 600 }}
        >
          UPSC Insights &amp; Strategy
        </h1>

        <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.6, marginTop: 14, maxWidth: 520 }}>
          Expert guidance on CSAT, Prelims, Mains, and beyond — free for every aspirant.
        </p>

        {/* Stats row */}
        <div className="blog-hero-stats flex items-center gap-5 flex-wrap" style={{ marginTop: 28 }}>
          <div className="flex items-center gap-[7px] text-[14px] text-muted">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-violet)" strokeWidth="2" width="15" height="15" aria-hidden>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span><strong className="text-ink font-semibold">{articleCount} Articles</strong></span>
          </div>

          <span className="text-border">·</span>

          <div className="flex items-center gap-[7px] text-[14px] text-muted">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-violet)" strokeWidth="2" width="15" height="15" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Updated Weekly
          </div>

          <span className="text-border">·</span>

          <div className="flex items-center gap-[7px] text-[14px]">
            <span
              className="inline-block flex-shrink-0"
              style={{
                width: 8, height: 8,
                borderRadius: '50%',
                background: 'var(--color-success)',
                animation: 'var(--animate-dot-pulse)',
              }}
            />
            <span className="font-semibold" style={{ color: 'var(--color-success)' }}>Free to Read</span>
          </div>
        </div>
      </div>
    </section>
  )
}
