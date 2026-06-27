import React from 'react'

const STEPS = [
  {
    n: '1',
    title: 'Pick your test',
    desc: 'Choose a full-length mock, sectional, or topic test from your dashboard. Attempt when you are ready.',
  },
  {
    n: '2',
    title: 'Attempt it',
    desc: 'Online in a timed interface, or in person at Old Rajender Nagar. Download the paper if you prefer pen and paper.',
  },
  {
    n: '3',
    title: 'See your rank',
    desc: 'Submit your OMR responses and get your All-India Rank instantly. Scheduled attempts are eligible for live ranking.',
  },
  {
    n: '4',
    title: 'Study solutions',
    desc: 'Watch video solutions for every FLT question and review your analytics to decide what to work on next.',
  },
]

export const HowItWorks = () => (
  <section className="sec bgsf">
    <div className="w">
      <div className="sh ctr rv" style={{ maxWidth: 520, marginInline: 'auto' }}>
        <span className="ey">How It Works</span>
        <h2>From test to insight in one session.</h2>
      </div>
      <div className="hwg rv">
        <div className="hwcon" />
        {STEPS.map((s) => (
          <div className="hws" key={s.n}>
            <div className="hwn">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="hwcav rv">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>
          <strong>All-India Ranking note:</strong> Flexible-timing online attempts are not counted for
          AIR. To appear in the ranking, attempt the test on its scheduled date or sit for it at our
          offline centre where the schedule is fixed.
        </span>
      </div>
    </div>
  </section>
)

export default HowItWorks
