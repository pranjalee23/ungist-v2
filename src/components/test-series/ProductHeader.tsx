'use client'

import React from 'react'

const ChevronIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)
const ClockIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const FACTS = [
  {
    text: '26 tests (Comprehensive) · 10 FLTs (Mock Only)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    text: 'Online & offline — Old Rajender Nagar, New Delhi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    text: 'Valid till UPSC Prelims 2027',
    icon: <ClockIco />,
  },
  {
    text: 'All-India Ranking after every scheduled full-length mock',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
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
    note: 'Already in the Foundation Program? Test series is included — don’t buy separately.',
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
    <div className="pcp on" id={`pc-${tab}`}>
      <div className="pcpr">{p.price}</div>
      <div className="pcten">One-time · valid till Prelims 2027</div>
      <div className="pclbl">Select Batch</div>
      <select className="pcsel" defaultValue="">
        <option value="">Choose a batch…</option>
        {p.batches.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>
      <div className="pcact">
        <a href="https://course.ungist.com" className="btn bp bbl">
          Buy Online
        </a>
        <a href="#" className="btn bg bbl bsm">
          Download Brochure
        </a>
      </div>
      <div className="pcdiv" />
      <div className="pcinc">
        {p.includes.map((i) => (
          <div className="pcin" key={i}>
            <CheckIco />
            {i}
          </div>
        ))}
      </div>
      <p className="pcnote">{p.note}</p>
    </div>
  )
}

export const ProductHeader = ({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) => (
  <>
    {/* Breadcrumb */}
    <div className="bc">
      <div className="w">
        <div className="bci">
          <a href="/">Home</a>
          <ChevronIco />
          <a href="/#products">Products</a>
          <ChevronIco />
          <span className="cur">CSAT Test Series 2027</span>
        </div>
      </div>
    </div>

    {/* Product header */}
    <div className="ph">
      <div className="w">
        <div className="phg">
          <div className="phl rv">
            <div className="pey">
              <ClockIco />
              CSAT · Prelims Paper II
            </div>
            <h1>UPSC CSAT Test Series 2027</h1>
            <div className="tag">Formula-free, logic-first</div>
            <p className="pdesc">
              Designed by Ram Mohan Pandey (IIT Roorkee) and the UNGIST team around one belief — CSAT
              is not about formulas, it is about thinking. Realistic tests, video solutions in
              English, deep analytics, and doubt resolution that continues till Prelims 2027.
            </p>
            <div className="pfacts">
              {FACTS.map((f) => (
                <span className="pf" key={f.text}>
                  {f.icon}
                  {f.text}
                </span>
              ))}
            </div>
          </div>

          {/* Purchase card */}
          <div className="pc rv">
            <div className="pct">
              <div className={`pctb${tab === 'comp' ? ' on' : ''}`} onClick={() => setTab('comp')}>
                Comprehensive
              </div>
              <div className={`pctb${tab === 'mock' ? ' on' : ''}`} onClick={() => setTab('mock')}>
                Mock Only
              </div>
            </div>
            <Panel tab={tab} />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ProductHeader
export type { Tab }
