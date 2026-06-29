import React from 'react'
import { Container } from '@/components/ui/Container'

const icoColors: Record<string, { bg: string; text: string }> = {
  vl: { bg: '#F7F0FE', text: '#9A2FFB' },
  or: { bg: '#FFF4E5', text: '#F97316' },
  tl: { bg: '#F0FAFA', text: '#0D9488' },
}

const CARDS = [
  {
    color: 'vl',
    count: '10',
    title: 'Full-Length Mock Tests',
    desc: 'Timed, full-paper mocks patterned exactly after UPSC CSAT — same format, balanced weightage across Quant, Reasoning, Comprehension, and Data Sufficiency.',
    badge: { type: 'vid', text: 'Video solutions — 95% English', play: true },
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
  },
  {
    color: 'or',
    count: '6',
    title: 'Sectional Tests',
    desc: 'Targeted tests on Quantitative Aptitude, Logical Reasoning, and Reading Comprehension. Build section-level mastery before facing a full paper.',
    badge: { type: 'pdf', text: 'PDF solutions · Comprehensive only' },
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>),
  },
  {
    color: 'tl',
    count: '10',
    title: 'Topic-wise Tests',
    desc: "Drill on Number System, Percentage, Time & Work, General Mental Ability, and more. Fix exactly what is weak without touching what isn't.",
    badge: { type: 'pdf', text: 'PDF solutions · Comprehensive only' },
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>),
  },
]

export const Included = () => (
  <section className="py-[clamp(44px,6.5vw,72px)]">
    <Container>
      <div className="rv mb-8">
        <span className="block text-[11.5px] font-bold tracking-[0.1em] uppercase text-violet mb-2">What&apos;s Included</span>
        <h2 className="text-[clamp(1.4rem,2.6vw,1.85rem)] font-bold tracking-[-0.02em]">Three types of tests. One clear goal.</h2>
        <p className="text-muted text-[0.9rem] mt-2 max-w-[500px] leading-[1.6]">Comprehensive gives you all three. Mock Only gives you full-length mocks with video solutions.</p>
      </div>
      <div className="rv grid grid-cols-3 gap-px bg-border rounded-[24px] overflow-hidden max-[768px]:grid-cols-1">
        {CARDS.map((c) => {
          const col = icoColors[c.color]
          return (
            <div key={c.title} className="bg-white p-6 px-5">
              <span className="w-10 h-10 rounded-[11px] grid place-items-center mb-[13px] [&_svg]:w-[18px] [&_svg]:h-[18px]" style={{ background: col.bg, color: col.text }}>
                {c.icon}
              </span>
              <span className="block font-display font-bold text-[1.5rem] text-violet tracking-[-0.02em] mb-1">{c.count}</span>
              <h3 className="text-[0.93rem] font-bold mb-[5px]">{c.title}</h3>
              <p className="text-[0.8rem] text-muted leading-[1.6]">{c.desc}</p>
              <span className={`inline-flex items-center gap-[5px] mt-[10px] text-[0.7rem] font-semibold px-[9px] py-[3px] rounded-full ${c.badge.type === 'vid' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'bg-surface text-muted'}`}>
                {c.badge.play && (
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[11px] h-[11px]">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
                {c.badge.text}
              </span>
            </div>
          )
        })}
      </div>
    </Container>
  </section>
)

export default Included
