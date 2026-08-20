import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

const icoColors: Record<string, { bg: string; text: string }> = {
  vl: { bg: '#F7F0FE', text: '#9A2FFB' },
  or: { bg: '#FFF4E5', text: '#F97316' },
  tl: { bg: '#F0FAFA', text: '#0D9488' },
  bl: { bg: '#EFF6FF', text: '#2563EB' },
}

const CARDS = [
  {
    color: 'vl',
    title: 'Formula-free, logic-first',
    desc: 'Solutions are built around how UPSC wants you to think — elimination, estimation, and reasoning — not memorised shortcuts that break under pressure.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>),
  },
  {
    color: 'or',
    title: 'Built for arts and non-maths students',
    desc: 'Every explanation starts from zero. Students from humanities or commerce streams can follow the solutions without a maths background.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
  },
  {
    color: 'tl',
    title: 'Real UPSC difficulty and trends',
    desc: 'Questions designed by Ram Mohan Pandey based on UPSC patterns from 2011–2025, including Data Sufficiency which most test series ignore.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>),
  },
  {
    color: 'bl',
    title: 'Online and offline',
    desc: 'Attempt tests online at your own time or sit for them at our Old Rajender Nagar centre in a proper exam setting. Both modes available for full-length mocks.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
  },
]

export const WhyDifferent = () => (
  <Section surface id="why-different">
    <Container>
      <div className="reveal mb-8">
        <Eyebrow>Why UNGIST</Eyebrow>
        <Heading as="h2" className="mt-2">Built differently from every other CSAT series.</Heading>
      </div>
      <div className="grid grid-cols-2 gap-3.5 max-[768px]:grid-cols-1">
        {CARDS.map((c) => {
          const col = icoColors[c.color]
          return (
            <div key={c.title} className="reveal flex gap-[15px] items-start bg-white border border-border rounded-lg p-5 shadow-sm transition-[box-shadow,border-color] duration-300 hover:shadow-md hover:border-white">
              <span className="w-[38px] h-[38px] rounded-[10px] grid place-items-center flex-none [&_svg]:w-[17px] [&_svg]:h-[17px]" style={{ background: col.bg, color: col.text }}>
                {c.icon}
              </span>
              <div>
                <Heading as="h3" className="text-[0.9rem] mb-1">{c.title}</Heading>
                <Text variant="xs" muted>{c.desc}</Text>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  </Section>
)

export default WhyDifferent
