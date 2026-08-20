'use client'

import React from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const CATEGORIES = ['All', 'CSAT', 'Prelims', 'Mains', 'Current Affairs', 'Strategy', 'Essay & Ethics', 'Success Stories']

export function BlogFilterBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = searchParams.get('category') ?? 'All'

  function select(cat: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === 'All') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div
      className="blog-filter-bar"
      style={{
        position: 'sticky',
        top: 65,
        zIndex: 40,
        background: 'rgba(255,255,255,.93)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="w-full max-w-[1280px] mx-auto px-6 max-[768px]:px-4 flex items-center gap-2 overflow-x-auto"
        style={{ padding: '10px 24px', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = cat === active
          return (
            <button
              key={cat}
              onClick={() => select(cat)}
              className="blog-filter-chip flex-shrink-0 whitespace-nowrap font-text font-semibold transition-[background,color,border-color] duration-200"
              style={{
                height: 36,
                padding: '0 16px',
                borderRadius: 'var(--radius-sm)',
                border: isActive ? '1.5px solid var(--color-violet)' : '1px solid var(--color-border)',
                background: isActive ? 'var(--color-violet)' : '#fff',
                color: isActive ? '#fff' : 'var(--color-ink)',
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}
