import React from 'react'

const CARDS = [
  {
    title: 'Arts or humanities background',
    desc: 'CSAT feels intimidating without a maths background. Our logic-first approach is built specifically for you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Working professional',
    desc: 'You need flexible tests you can attempt on your own schedule — online, anytime, on any device.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Serious aspirant targeting AIR',
    desc: 'You want data — not just a score — so you can fix the right things before exam day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
]

export const ForWhom = () => (
  <section className="sec bgsf">
    <div className="w">
      <div className="sh rv">
        <span className="ey">Who Is This For</span>
        <h2>This test series is right for you if…</h2>
      </div>
      <div className="wmg rv">
        {CARDS.map((c) => (
          <div className="wmc" key={c.title}>
            <div className="wmico">{c.icon}</div>
            <div className="wmt">
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="fnote rv">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <span>
          <strong>Already enrolled in the CSAT Foundation Program?</strong> The Comprehensive Test
          Series is included in your Foundation plan. You do not need to buy it separately.{' '}
          <a href="/#counselling">Call us</a> at +91‑9643822021 to confirm.
        </span>
      </div>
    </div>
  </section>
)

export default ForWhom
