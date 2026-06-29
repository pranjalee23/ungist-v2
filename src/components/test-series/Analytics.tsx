import React from 'react'
import { Container } from '@/components/ui/Container'

const AlertIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-violet flex-none mt-px">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const FEATURES = [
  { title: 'Score & Percentile', desc: 'Raw score out of 200 and your percentile rank among all test-takers.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-violet"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>) },
  { title: 'All-India Rank', desc: 'Live rank among all students who attempted the same scheduled mock.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-violet"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>) },
  { title: 'Section-wise Accuracy', desc: 'Accuracy % broken down by each section so you know exactly which area to fix.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-violet"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>) },
  { title: 'Time per Question', desc: 'How long you spent on each question — exposes where you slow down under pressure.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-violet"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>) },
  { title: 'Fluke %', desc: "The percentage of your correct answers that were likely guesses. Most test series don't show this. It matters most for your real exam readiness.", icon: <AlertIco /> },
]

const STATS = [
  { val: '118', violet: false, label: 'Score / 200' },
  { val: '#284', violet: true, label: 'All-India Rank' },
  { val: '81%', violet: false, label: 'Accuracy' },
  { val: '86th', violet: false, label: 'Percentile' },
]

const BARS = [
  { subj: 'Reading Comprehension', pc: '88%', good: true },
  { subj: 'Logical Reasoning', pc: '82%', good: true },
  { subj: 'Quantitative Aptitude', pc: '63%', good: false },
  { subj: 'Data Sufficiency', pc: '57%', good: false },
]

export const Analytics = () => (
  <section className="py-[clamp(44px,6.5vw,72px)]">
    <Container>
      <div className="grid grid-cols-2 gap-[52px] items-center max-lg:grid-cols-1">
        {/* Left: copy + feature list */}
        <div className="rv">
          <div className="mb-8">
            <span className="block text-[11.5px] font-bold tracking-[0.1em] uppercase text-violet mb-2">Performance Analytics</span>
            <h2 className="text-[clamp(1.4rem,2.6vw,1.85rem)] font-bold tracking-[-0.02em]">Know exactly what to fix after every test.</h2>
            <p className="text-muted text-[0.9rem] mt-2 max-w-[500px] leading-[1.6]">Your dashboard shows where you actually stand — not just your score, but why you got it.</p>
          </div>
          <div className="flex flex-col gap-[13px] mt-[22px]">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-lavender grid place-items-center flex-none mt-px [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:text-violet">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-[0.88rem] font-bold mb-0.5">{f.title}</h4>
                  <p className="text-[0.78rem] text-muted leading-[1.5]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: mock dashboard card */}
        <div className="rv bg-white border border-border rounded-[32px] p-5 shadow-[0_0_0_1px_rgba(20,12,40,0.07),0_4px_12px_rgba(20,12,40,0.07)] max-lg:hidden">
          <div className="flex items-center justify-between mb-3.5">
            <h4 className="text-[0.88rem] font-bold">Post-test Dashboard</h4>
            <span className="text-[0.68rem] font-bold bg-lavender text-violet px-[9px] py-[3px] rounded-full">Full-Length Mock · Sample</span>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-4 gap-px bg-border rounded-[18px] overflow-hidden mb-3.5 max-[480px]:grid-cols-2">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-1.5 py-[10px] text-center">
                <div className={`font-display font-bold text-[1.05rem] ${s.violet ? 'text-violet' : 'text-ink'}`}>{s.val}</div>
                <div className="text-[0.62rem] text-muted mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Section bars */}
          <div className="flex flex-col gap-[9px] mb-3.5">
            {BARS.map((b) => (
              <div key={b.subj}>
                <div className="flex justify-between text-[0.72rem] font-medium mb-1">
                  <span className="text-ink">{b.subj}</span>
                  <span className="text-violet font-bold">{b.pc}</span>
                </div>
                <div className="h-[6px] rounded-full bg-[#EFEAF6] overflow-hidden">
                  <i className={`block h-full rounded-full ${b.good ? 'bg-[--grad]' : 'bg-[linear-gradient(90deg,#F97316,#FBBF24)]'}`} style={{ width: b.pc }} />
                </div>
              </div>
            ))}
          </div>

          {/* Fluke callout */}
          <div className="flex items-start gap-[9px] bg-lavender rounded-[12px] px-3 py-[10px]">
            <AlertIco />
            <div className="text-[0.76rem] text-violet font-semibold leading-[1.5]">
              Fluke %: 19%{' '}
              <span className="font-normal opacity-80">— 3 of your 16 correct answers were likely guesses. Revise Data Sufficiency fundamentals before the next mock.</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default Analytics
