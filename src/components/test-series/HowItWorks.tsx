import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

const STEPS = [
  { n: '1', title: 'Pick your test', desc: 'Choose a full-length mock, sectional, or topic test from your dashboard. Attempt when you are ready.' },
  { n: '2', title: 'Attempt it', desc: 'Online in a timed interface, or in person at Old Rajender Nagar. Download the paper if you prefer pen and paper.' },
  { n: '3', title: 'See your rank', desc: 'Submit your OMR responses and get your All-India Rank instantly. Scheduled attempts are eligible for live ranking.' },
  { n: '4', title: 'Study solutions', desc: 'Watch video solutions for every FLT question and review your analytics to decide what to work on next.' },
]

export const HowItWorks = () => (
  <Section surface id="how-it-works">
    <Container>
      <div className="rv max-w-[520px] mx-auto text-center mb-8">
        <Eyebrow>How It Works</Eyebrow>
        <Heading as="h2" className="mt-2">From test to insight in one session.</Heading>
      </div>

      <div className="rv relative grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-[480px]:grid-cols-1">
        {/* Connector line */}
        <div className="absolute top-5 left-[calc(12.5%+6px)] right-[calc(12.5%+6px)] h-px bg-[linear-gradient(90deg,var(--color-lavender-2),#B45CFF,var(--color-lavender-2))] z-0 max-lg:hidden" />

        {STEPS.map((s) => (
          <div key={s.n} className="text-center relative z-[1]">
            <div className="w-10 h-10 rounded-full [background:var(--grad)] text-white grid place-items-center mx-auto mb-[13px] font-display font-bold text-[0.9rem] shadow-[0_4px_12px_rgba(154,47,251,0.25)]">
              {s.n}
            </div>
            <Heading as="h3" className="text-[0.88rem] mb-[5px]">{s.title}</Heading>
            <Text variant="xs" muted>{s.desc}</Text>
          </div>
        ))}
      </div>

      <div className="rv mt-[22px] flex items-start gap-[9px] bg-surface rounded-sm px-[15px] py-3 border-l-[3px] border-violet [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:text-violet [&_svg]:flex-none [&_svg]:mt-0.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <Text variant="xs" muted>
          <strong className="text-ink">All-India Ranking note:</strong>{' '}
          Flexible-timing online attempts are not counted for AIR. To appear in the ranking, attempt
          the test on its scheduled date or sit for it at our offline centre where the schedule is fixed.
        </Text>
      </div>
    </Container>
  </Section>
)

export default HowItWorks
