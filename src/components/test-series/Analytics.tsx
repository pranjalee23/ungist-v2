import React from 'react'

const AlertIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const FEATURES = [
  {
    title: 'Score & Percentile',
    desc: 'Raw score out of 200 and your percentile rank among all test-takers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'All-India Rank',
    desc: 'Live rank among all students who attempted the same scheduled mock.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Section-wise Accuracy',
    desc: 'Accuracy % broken down by each section so you know exactly which area to fix.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Time per Question',
    desc: 'How long you spent on each question — exposes where you slow down under pressure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Fluke %',
    desc: 'The percentage of your correct answers that were likely guesses. Most test series don’t show this. It matters most for your real exam readiness.',
    icon: <AlertIco />,
  },
]

const STATS = [
  { val: '118', cls: '', label: 'Score / 200' },
  { val: '#284', cls: 'vl', label: 'All-India Rank' },
  { val: '81%', cls: '', label: 'Accuracy' },
  { val: '86th', cls: '', label: 'Percentile' },
]

const BARS = [
  { subj: 'Reading Comprehension', pc: '88%', cls: 'g' },
  { subj: 'Logical Reasoning', pc: '82%', cls: 'g' },
  { subj: 'Quantitative Aptitude', pc: '63%', cls: 'm' },
  { subj: 'Data Sufficiency', pc: '57%', cls: 'm' },
]

export const Analytics = () => (
  <section className="sec">
    <div className="w">
      <div className="ang">
        <div className="rv">
          <div className="sh" style={{ marginBottom: 0 }}>
            <span className="ey">Performance Analytics</span>
            <h2>Know exactly what to fix after every test.</h2>
            <p>Your dashboard shows where you actually stand — not just your score, but why you got it.</p>
          </div>
          <div className="aml">
            {FEATURES.map((f) => (
              <div className="ami" key={f.title}>
                <div className="amd">{f.icon}</div>
                <div className="amt">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="amk rv">
          <div className="amkt">
            <h4>Post-test Dashboard</h4>
            <span className="amkb">Full-Length Mock · Sample</span>
          </div>
          <div className="amss">
            {STATS.map((s) => (
              <div className="amsc" key={s.label}>
                <div className={`av${s.cls ? ` ${s.cls}` : ''}`}>{s.val}</div>
                <div className="al">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="ambs">
            {BARS.map((b) => (
              <div key={b.subj}>
                <div className="ambm">
                  <span className="sj">{b.subj}</span>
                  <span className="pc">{b.pc}</span>
                </div>
                <div className="amtr">
                  <i className={b.cls} style={{ width: b.pc }} />
                </div>
              </div>
            ))}
          </div>
          <div className="amfl">
            <AlertIco />
            <div className="amflt">
              Fluke %: 19%{' '}
              <span>— 3 of your 16 correct answers were likely guesses. Revise Data Sufficiency fundamentals before the next mock.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Analytics
