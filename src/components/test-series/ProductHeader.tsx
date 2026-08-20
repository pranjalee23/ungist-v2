'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const ChevronIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3 text-subtle flex-none">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)
const ClockIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[11px] h-[11px]">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px] text-success flex-none">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const FACTS = [
  {
    text: '26 tests (Comprehensive) · 10 FLTs (Mock Only)',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px] text-violet flex-none"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>),
  },
  {
    text: 'Online & offline — Old Rajender Nagar, New Delhi',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px] text-violet flex-none"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
  },
  {
    text: 'Valid till UPSC Prelims 2027',
    icon: <ClockIco />,
  },
  {
    text: 'All-India Ranking after every scheduled full-length mock',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px] text-violet flex-none"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>),
  },
]

const PANELS = {
  comp: {
    price: '₹2,999',
    batches: [
      'Batch 1 — 22 June 2026 · 26 Tests',
      'Batch 2 — 15 July 2026 · 26 Tests',
      'Batch 3 — 5 August 2026 · 26 Tests',
      'Batch 4 — 1 September 2026 · 26 Tests',
      'Batch 5 — 1 October 2026 · 26 Tests',
      'Batch 6 — 1 November 2026 · 26 Tests',
    ],
    includes: [
      '10 Full-Length Mocks — video solutions',
      '6 Sectional Tests — PDF solutions',
      '10 Topic-wise Tests — PDF solutions',
      'All-India Ranking + analytics',
      'Doubt resolution till Prelims 2027',
    ],
    note: "Already in the Foundation Program? Test series is included — don't buy separately.",
  },
  mock: {
    price: '₹999',
    batches: [
      'Batch 1 — 22 June 2026 · 10 Mocks',
      'Batch 2 — 15 July 2026 · 10 Mocks',
      'Batch 3 — 5 August 2026 · 10 Mocks',
      'Batch 4 — 1 September 2026 · 10 Mocks',
      'Batch 5 — 1 October 2026 · 5 Mocks',
      'Batch 6 — 1 November 2026 · 5 Mocks',
    ],
    includes: [
      '10 Full-Length Mocks — video solutions',
      'All-India Ranking after every scheduled mock',
      'Performance analytics dashboard',
    ],
    note: 'Want sectional and topic-wise tests too? Choose Comprehensive.',
  },
} as const

type Tab = 'comp' | 'mock'

const Panel = ({ tab }: { tab: Tab }) => {
  const p = PANELS[tab]
  return (
    <div>
      <div className="font-display font-bold text-[1.8rem] tracking-[-0.03em] mb-0.5">{p.price}</div>
      <div className="text-[0.76rem] text-muted mb-[13px]">One-time · valid till Prelims 2027</div>
      <div className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-subtle mb-1.5">Select Batch</div>
      <select
        defaultValue=""
        className="w-full font-sans text-[0.86rem] text-ink border-[1.5px] border-border rounded-sm px-[11px] py-[9px] outline-none bg-white cursor-pointer mb-[11px] transition-[border-color] duration-200 focus:border-violet"
      >
        <option value="">Choose a batch…</option>
        {p.batches.map((b) => <option key={b}>{b}</option>)}
      </select>
      <div className="flex flex-col gap-[7px] mb-[13px]">
        <Button variant="primary" block as="a" href="https://course.ungist.com" size="lg">Buy Online</Button>
        <Button variant="ghost" block as="a" href="#">Download Brochure</Button>
      </div>
      <div className="border-t border-border my-[13px]" />
      <div className="flex flex-col gap-1.5">
        {p.includes.map((item) => (
          <div key={item} className="flex items-center gap-[7px] text-[0.78rem] text-secondary">
            <CheckIco />
            {item}
          </div>
        ))}
      </div>
      <p className="text-[0.71rem] text-subtle text-center mt-[9px] leading-[1.5]">{p.note}</p>
    </div>
  )
}

export const ProductHeader = ({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) => (
  <>
    {/* Breadcrumb */}
    <div className="border-b border-border">
      <Container>
        <div className="flex items-center gap-1.5 py-[11px] text-[12.5px] text-muted [&_a]:text-muted [&_a:hover]:text-violet [&_a]:transition-colors [&_a]:duration-200">
          <a href="/">Home</a>
          <ChevronIco />
          <a href="/#products">Products</a>
          <ChevronIco />
          <span className="text-ink font-medium">CSAT Test Series 2027</span>
        </div>
      </Container>
    </div>

    {/* Product header */}
    <div className="py-[38px_0_44px] border-b border-border">
      <Container>
        <div className="grid grid-cols-[1fr_336px] gap-12 items-start max-lg:grid-cols-1">
          {/* Left */}
          <div className="reveal">
            <div className="inline-flex items-center gap-1.5 text-[11.5px] font-bold tracking-[0.1em] uppercase text-violet mb-[10px] [&_svg]:w-[11px] [&_svg]:h-[11px]">
              <ClockIco />
              CSAT · Prelims Paper II
            </div>
            <h1 className="text-[clamp(1.5rem,3vw,2.05rem)] font-bold tracking-[-0.02em] mb-[10px]">UPSC CSAT Test Series 2027</h1>
            <div className="inline-flex bg-lavender border border-lavender-2 px-[13px] py-1 rounded-full text-[12px] font-bold text-violet tracking-[0.03em] mb-[13px]">
              Formula-free, logic-first
            </div>
            <p className="text-muted text-[0.93rem] leading-[1.65] max-w-[540px] mb-[18px]">
              Designed by Ram Mohan Pandey (IIT Roorkee) and the UNGIST team around one belief — CSAT
              is not about formulas, it is about thinking. Realistic tests, video solutions in
              English, deep analytics, and doubt resolution that continues till Prelims 2027.
            </p>
            <div className="flex flex-col gap-[7px]">
              {FACTS.map((f) => (
                <span key={f.text} className="flex items-center gap-2 text-[12.5px] font-medium text-secondary">
                  {f.icon}
                  {f.text}
                </span>
              ))}
            </div>
          </div>

          {/* Purchase card */}
          <div className="reveal bg-white border-[1.5px] border-border rounded-xl p-5 shadow-2 sticky top-20">
            {/* Tab switcher */}
            <div className="flex bg-surface rounded-sm p-[3px] mb-4">
              {(['comp', 'mock'] as const).map((t) => (
                <div
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 text-center py-[7px] px-1 rounded-[9px] text-[0.8rem] font-semibold cursor-pointer transition-[background,color,box-shadow] duration-200 ${tab === t ? 'bg-white text-ink shadow-1' : 'text-muted'}`}
                >
                  {t === 'comp' ? 'Comprehensive' : 'Mock Only'}
                </div>
              ))}
            </div>
            <Panel tab={tab} />
          </div>
        </div>
      </Container>
    </div>
  </>
)

export default ProductHeader
export type { Tab }
