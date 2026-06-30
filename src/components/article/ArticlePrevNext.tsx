import React from 'react'
import Link from 'next/link'
import type { Blog } from '@/payload-types'

interface ArticlePrevNextProps {
  prev: Blog | null
  next: Blog | null
}

export function ArticlePrevNext({ prev, next }: ArticlePrevNextProps) {
  if (!prev && !next) return null

  return (
    <div
      className="art-prev-next"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="border border-border rounded-[16px] flex items-flex-start gap-3 transition-[border-color,box-shadow] duration-200 hover:border-white hover:shadow-[0_2px_12px_rgba(20,12,40,.06)]"
          style={{ padding: 20, display: 'flex', alignItems: 'flex-start', gap: 12 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="2" width="20" height="20" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <div>
            <div className="text-[12px] text-muted mb-1">Previous</div>
            <div
              className="text-[14px] font-semibold text-ink"
              style={{ lineHeight: 1.4 }}
            >
              {prev.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="border border-border rounded-[16px] flex items-flex-start gap-3 text-right justify-end transition-[border-color,box-shadow] duration-200 hover:border-white hover:shadow-[0_2px_12px_rgba(20,12,40,.06)]"
          style={{ padding: 20, display: 'flex', alignItems: 'flex-start', gap: 12 }}
        >
          <div>
            <div className="text-[12px] text-muted mb-1">Next</div>
            <div
              className="text-[14px] font-semibold text-ink"
              style={{ lineHeight: 1.4 }}
            >
              {next.title}
            </div>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="2" width="20" height="20" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
