'use client'

import React, { useState } from 'react'

export function NewsletterStrip() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="blog-newsletter" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 max-[768px]:px-4">
        <div
          className="blog-newsletter-inner relative overflow-hidden flex items-center justify-between flex-wrap"
          style={{
            background: 'var(--grad)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 64px',
            gap: 56,
          }}
        >
          {/* Decorative circles */}
          <div aria-hidden className="absolute pointer-events-none" style={{ top: -100, right: 280, width: 340, height: 340, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
          <div aria-hidden className="absolute pointer-events-none" style={{ bottom: -80, right: 80, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,.05)' }} />

          {/* Text */}
          <div className="relative flex-1 min-w-[260px]">
            <div
              className="inline-flex items-center gap-[6px] mb-5"
              style={{ background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 999, padding: '6px 16px' }}
            >
              <span className="text-[11px] font-bold text-white tracking-[.1em] uppercase">STAY UPDATED</span>
            </div>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.7rem,2.6vw,36px)', letterSpacing: '-0.025em', margin: 0 }}
            >
              Get Weekly UPSC Insights
            </h2>
            <p style={{ color: 'rgba(255,255,255,.78)', fontSize: 16, lineHeight: 1.65, marginTop: 14, maxWidth: 400 }}>
              Strategy guides, current affairs digests, and expert tips — delivered to your inbox every Sunday.
            </p>
          </div>

          {/* Form */}
          <div className="relative flex-none min-w-[300px] max-w-[420px] w-full">
            <form onSubmit={handleSubmit} className="flex items-stretch gap-[10px]" style={{ height: 52 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input flex-1 text-white"
                style={{
                  height: 52,
                  padding: '0 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid rgba(255,255,255,.28)',
                  background: 'rgba(255,255,255,.13)',
                  fontSize: 15,
                  fontFamily: 'inherit',
                  minWidth: 0,
                  transition: 'border-color .2s,background .2s',
                }}
              />
              <button
                type="submit"
                className="flex-shrink-0 font-text font-bold transition-[box-shadow] duration-200 hover:shadow-[0_4px_18px_rgba(0,0,0,.18)]"
                style={{
                  height: 52,
                  padding: '0 26px',
                  background: '#fff',
                  color: 'var(--color-violet)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontSize: 15,
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe Free
              </button>
            </form>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.48)', marginTop: 14 }}>
              No spam &nbsp;·&nbsp; 12,000+ subscribers &nbsp;·&nbsp; Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
