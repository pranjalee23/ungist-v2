import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'

const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] text-violet flex-none">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const ChevronIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-[14px] h-[14px] text-subtle flex-none">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const ArrowIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const STATS = [
  { val: '4th', lbl: 'Edition' },
  { val: '668', lbl: 'Pages' },
  { val: '15 Yrs', lbl: 'Solved PYQs (2011–2025)' },
  { val: null, lbl: '4.5 / 5 — Amazon', stars: true },
]

const StarFull = () => (
  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] text-amber fill-amber">
    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z" />
  </svg>
)

const StarHalf = () => (
  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]">
    <defs>
      <linearGradient id="csat-half-star">
        <stop offset="50%" stopColor="#F5A623" />
        <stop offset="50%" stopColor="#E5E7EB" />
      </linearGradient>
    </defs>
    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z" fill="url(#csat-half-star)" />
  </svg>
)

export const CsatBookHeader = () => (
  <section className="relative overflow-hidden pt-[clamp(48px,7vw,80px)] pb-[clamp(48px,7vw,72px)]">
    {/* Decorative radial blob */}
    <div
      aria-hidden
      className="pointer-events-none absolute -top-[200px] -right-[120px] w-[580px] h-[580px] rounded-full"
      style={{ background: 'radial-gradient(circle at center, rgba(154,47,251,.11), rgba(154,47,251,0) 64%)' }}
    />

    <Container>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[.82rem] text-muted pt-4">
        <a href="/" className="text-muted hover:text-violet transition-colors duration-200">Home</a>
        <ChevronIco />
        <a href="/#products" className="text-muted hover:text-violet transition-colors duration-200">Products</a>
        <ChevronIco />
        <span className="text-ink font-medium">CSAT Book</span>
      </nav>

      {/* Two-col grid */}
      <div className="mt-8 grid grid-cols-[1fr_auto] gap-12 items-start relative z-[1] max-lg:grid-cols-1 max-lg:gap-9">

        {/* Left: copy */}
        <div className="reveal">
          <Eyebrow>UNGIST Publication · 4th Edition</Eyebrow>
          <h1 className="text-[clamp(2rem,5vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] mb-3">
            CSAT Theory &amp; Practice
          </h1>
          <p className="text-muted text-[1.05rem] leading-[1.6] mb-6 max-w-[560px]">
            The complete CSAT resource by Ram Mohan Pandey — formula-free, logic-first, with topic-wise segregation of the last 15 years of UPSC PYQs.
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-3">
            <span className="text-[.9rem] text-subtle line-through">MRP ₹699</span>
            <span className="text-[2rem] font-bold text-ink tracking-[-0.03em]">₹444</span>
            <span className="bg-[rgba(34,197,94,.12)] text-success-fg text-[.78rem] font-bold px-[10px] py-[4px] rounded-full tracking-[.02em]">36% off</span>
          </div>

          <div className="flex gap-3 flex-wrap mb-4">
            <Button
              variant="primary"
              size="lg"
              as="a"
              href="https://www.amazon.in/dp/9355925409"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
              <ArrowIco />
            </Button>
            <Button variant="ghost" size="lg" as="a" href="/#counselling">
              Talk to an Advisor
            </Button>
          </div>

          <p className="text-[.83rem] text-muted flex items-center gap-[6px]">
            <CheckIco />
            Included free with{' '}
            <a href="/#pricing" className="text-violet font-semibold border-b border-violet/30 pb-px hover:border-violet transition-colors duration-200">
              Plus &amp; Pro plans
            </a>{' '}
            of the Foundation Program.
          </p>
        </div>

        {/* Right: sticky purchase card */}
        <div className="reveal w-[300px] flex-none max-lg:w-full max-lg:max-w-[400px] sticky top-[84px] max-lg:static">
          <div className="bg-white border-[1.5px] border-border rounded-lg p-7 shadow-card">
            {/* Book cover mock */}
            <div
              className="w-full rounded-md mb-5 overflow-hidden relative flex items-center justify-center"
              style={{ background: 'var(--grad)', aspectRatio: '3/4' }}
            >
              <div className="text-center px-5 py-6 flex flex-col items-center justify-center h-full">
                <div className="font-display text-[2.2rem] font-[800] tracking-[-0.04em] leading-[1] text-white">CSAT</div>
                <div className="text-[.72rem] font-semibold tracking-[.12em] uppercase opacity-85 mt-1.5 text-white">Theory &amp; Practice</div>
                <div className="text-[.6rem] text-white/70 uppercase tracking-[.14em] mt-2.5 font-semibold">Topic-wise PYQs 2011–2025</div>
                <div className="bg-white/18 border border-white/30 rounded-full px-3 py-[3px] text-[.68rem] font-bold tracking-[.08em] mt-3 text-white">Fourth Edition</div>
                <div className="border-t border-white/20 mt-4 pt-3 w-4/5 text-center">
                  <div className="text-[.63rem] text-white/60 font-medium">Ram Mohan Pandey</div>
                  <div className="text-[.58rem] text-white/45 mt-[3px]">MSc Mathematics, IIT Roorkee</div>
                </div>
                <div className="font-display text-[.95rem] font-[800] tracking-[.06em] text-white/90 mt-3.5">ungist</div>
              </div>
            </div>

            {/* Price row */}
            <div className="flex items-baseline gap-2.5 mb-4">
              <span className="text-[1.7rem] font-bold tracking-[-0.03em] text-ink">₹444</span>
              <span className="text-[.85rem] text-subtle line-through">₹699</span>
              <span className="text-[.75rem] font-bold text-success-fg bg-success/10 px-[9px] py-[3px] rounded-full">Save ₹255</span>
            </div>

            <Button
              variant="primary"
              size="lg"
              block
              as="a"
              href="https://www.amazon.in/dp/9355925409"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
              <ArrowIco />
            </Button>
            <p className="text-[.75rem] text-muted text-center mt-2.5">Pan-India delivery · Paperback · 668 pages</p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="reveal mt-10 grid grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden max-sm:grid-cols-2">
        {STATS.map((s, i) => (
          <div key={i} className="bg-white py-[22px] px-5 text-center">
            {s.stars ? (
              <>
                <div className="flex items-center justify-center gap-[3px]">
                  <StarFull /><StarFull /><StarFull /><StarFull /><StarHalf />
                </div>
                <div className="text-[.75rem] text-muted mt-1 font-medium tracking-[.01em]">{s.lbl}</div>
              </>
            ) : (
              <>
                <div className="font-display text-[1.4rem] font-bold text-ink tracking-[-0.03em]">{s.val}</div>
                <div className="text-[.75rem] text-muted mt-1 font-medium tracking-[.01em]">{s.lbl}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
)
