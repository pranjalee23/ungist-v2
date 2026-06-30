import React from 'react'
import { Button } from '@/components/ui/Button'

export function ArticleDiagnosticCta() {
  return (
    <section className="article-diagnostic-cta" style={{ padding: '0 0 80px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 max-[768px]:px-4">
        <div
          className="flex items-center justify-between flex-wrap gap-8"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 48px',
          }}
        >
          <div className="flex items-flex-start gap-4" style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: 'var(--color-lavender)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-violet)" strokeWidth="2" width="22" height="22" aria-hidden>
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <h3
                className="font-display font-bold text-ink"
                style={{ fontSize: 20, letterSpacing: '-0.015em', marginBottom: 6 }}
              >
                Not Sure Where You Stand on CSAT?
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.55 }}>
                Take our free 20-minute diagnostic and get a personalised breakdown of your strengths and weak areas — before you spend another hour studying.
              </p>
            </div>
          </div>

          <div style={{ flexShrink: 0 }}>
            <Button variant="primary" size="lg" as="a" href="/diagnostic">
              Start Free Diagnostic
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
