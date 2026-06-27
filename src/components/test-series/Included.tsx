import React from 'react'

const CARDS = [
  {
    color: 'vl',
    count: '10',
    title: 'Full-Length Mock Tests',
    desc: 'Timed, full-paper mocks patterned exactly after UPSC CSAT — same format, balanced weightage across Quant, Reasoning, Comprehension, and Data Sufficiency.',
    badge: { cls: 'vid', text: 'Video solutions — 95% English', play: true },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    color: 'or',
    count: '6',
    title: 'Sectional Tests',
    desc: 'Targeted tests on Quantitative Aptitude, Logical Reasoning, and Reading Comprehension. Build section-level mastery before facing a full paper.',
    badge: { cls: 'pdf', text: 'PDF solutions · Comprehensive only' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    color: 'tl',
    count: '10',
    title: 'Topic-wise Tests',
    desc: 'Drill on Number System, Percentage, Time & Work, General Mental Ability, and more. Fix exactly what is weak without touching what isn’t.',
    badge: { cls: 'pdf', text: 'PDF solutions · Comprehensive only' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

export const Included = () => (
  <section className="sec">
    <div className="w">
      <div className="sh rv">
        <span className="ey">What’s Included</span>
        <h2>Three types of tests. One clear goal.</h2>
        <p>Comprehensive gives you all three. Mock Only gives you full-length mocks with video solutions.</p>
      </div>
      <div className="incg rv">
        {CARDS.map((c) => (
          <div className="incb" key={c.title}>
            <div className={`incico ${c.color}`}>{c.icon}</div>
            <span className="incc">{c.count}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <span className={`sb ${c.badge.cls}`}>
              {c.badge.play && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 11, height: 11 }}>
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
                </svg>
              )}
              {c.badge.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Included
