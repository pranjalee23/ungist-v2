import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { TextLink } from '@/components/ui/TextLink'

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
  <Section surface id="for-whom">
    <Container>
      <div className="reveal mb-8">
        <Eyebrow>Who Is This For</Eyebrow>
        <Heading as="h2" className="mt-2">This test series is right for you if…</Heading>
      </div>

      <div className="reveal grid grid-cols-3 gap-3 max-[768px]:grid-cols-1">
        {CARDS.map((c) => (
          <div key={c.title} className="flex gap-3 items-start bg-white border border-border rounded-md p-[15px]">
            <div className="w-8 h-8 rounded-[8px] bg-lavender-2 grid place-items-center flex-none">
              {c.icon}
            </div>
            <div>
              <Heading as="h4" className="text-[0.84rem] mb-[3px]">{c.title}</Heading>
              <Text variant="xs" muted>{c.desc}</Text>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-4 flex items-start gap-[9px] bg-[#F0FDF4] rounded-sm px-[15px] py-3 border-l-[3px] border-success [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:text-success [&_svg]:flex-none [&_svg]:mt-0.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <Text variant="xs" className="text-[#166534]">
          <strong>Already enrolled in the CSAT Foundation Program?</strong> The Comprehensive Test
          Series is included in your Foundation plan. You do not need to buy it separately.{' '}
          <TextLink href="/#counselling" size="xs" arrow={false}>Call us</TextLink> at +91‑9643822021 to confirm.
        </Text>
      </div>
    </Container>
  </Section>
)

export default ForWhom
