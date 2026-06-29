import React from 'react'
import { Container } from '@/components/ui/Container'

const CARDS = [
  {
    title: 'Arts or humanities background',
    desc: 'CSAT feels intimidating without a maths background. Our logic-first approach is built specifically for you.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-violet"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>),
  },
  {
    title: 'Working professional',
    desc: 'You need flexible tests you can attempt on your own schedule — online, anytime, on any device.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-violet"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
  },
  {
    title: 'Serious aspirant targeting AIR',
    desc: 'You want data — not just a score — so you can fix the right things before exam day.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-violet"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>),
  },
]

export const ForWhom = () => (
  <section className="py-[clamp(44px,6.5vw,72px)] bg-surface">
    <Container>
      <div className="rv mb-8">
        <span className="block text-[11.5px] font-bold tracking-[0.1em] uppercase text-violet mb-2">Who Is This For</span>
        <h2 className="text-[clamp(1.4rem,2.6vw,1.85rem)] font-bold tracking-[-0.02em]">This test series is right for you if…</h2>
      </div>

      <div className="rv grid grid-cols-3 gap-3 max-[768px]:grid-cols-1">
        {CARDS.map((c) => (
          <div key={c.title} className="flex gap-3 items-start bg-surface rounded-[18px] p-[15px]">
            <div className="w-8 h-8 rounded-[8px] bg-lavender-2 grid place-items-center flex-none">
              {c.icon}
            </div>
            <div>
              <h4 className="text-[0.84rem] font-bold mb-[3px]">{c.title}</h4>
              <p className="text-[0.76rem] text-muted leading-[1.5]">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rv mt-4 flex items-start gap-[9px] bg-[#F0FDF4] rounded-[12px] px-[15px] py-3 border-l-[3px] border-[#22C55E] text-[0.8rem] text-[#166534] leading-[1.6] [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:text-[#22C55E] [&_svg]:flex-none [&_svg]:mt-0.5 [&_a]:text-violet [&_a]:font-semibold">
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
    </Container>
  </section>
)

export default ForWhom
