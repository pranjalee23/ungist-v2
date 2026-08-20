import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

interface WhyCard {
  color: string
  variant?: 'tint'
  title: string
  desc: string
  icon: React.ReactNode
}

const icoColors: Record<string, { bg: string; text: string }> = {
  violet: { bg: '#F7F0FE', text: '#9a2ffb' },
  blue:   { bg: '#E0F2FE', text: '#0284C7' },
  green:  { bg: 'rgba(34,197,94,0.12)', text: '#16A34A' },
  orange: { bg: '#FFEDD5', text: '#EA580C' },
  teal:   { bg: '#D1FAE5', text: '#0D9488' },
}

const CARDS: WhyCard[] = [
  { color: 'violet', variant: 'tint', title: 'Structured Preparation', desc: 'A clear, stage-by-stage roadmap covering every topic in the UPSC syllabus — no gaps, no confusion.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /><polyline points="9 11 11 13 15 9" /></svg>) },
  { color: 'blue', title: 'Online Learning', desc: 'Live HD classes with real-time interaction, 24/7 recorded access, and a mobile app for learning on the go.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>) },
  { color: 'green', title: 'Personal Mentorship', desc: 'Dedicated 1-on-1 mentors who track your progress, provide feedback, and guide every step of your journey.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>) },
  { color: 'orange', title: 'CSAT Expertise', desc: 'A unique CSAT methodology that has achieved a 95%+ pass rate, turning a feared paper into a scoring opportunity.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>) },
  { color: 'violet', title: 'Data-Driven Analytics', desc: 'Test performance analytics with All-India ranking to identify weak areas and optimise your preparation.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>) },
  { color: 'teal', title: 'UPSC Success Track Record', desc: '800+ selections across IAS, IPS, IFS, and allied services since inception — numbers that speak for themselves.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>) },
]

export const WhyUngist = () => (
  <Section surface id="why">
    <Container>
      <div className="reveal max-w-[680px] mb-12 mx-auto text-center">
        <Eyebrow>Why UNGIST</Eyebrow>
        <Heading as="h2">Built for Serious UPSC Aspirants</Heading>
        <Text variant="body" muted className="text-[17px] mt-3.5 max-w-[620px] mx-auto">
          UNGIST combines institutional expertise with modern pedagogy to deliver a preparation experience that is comprehensive, personal, and results-oriented.
        </Text>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {CARDS.map((c) => {
          const col = icoColors[c.color] ?? icoColors.violet
          return (
            <article
              key={c.title}
              className={`reveal relative border border-border rounded-lg p-6 transition-[box-shadow,border-color] duration-300 hover:shadow-sm hover:border-white ${c.variant === 'tint' ? 'bg-[linear-gradient(135deg,#F8F4FE_0%,#fff_60%)]' : 'bg-white'}`}
            >
              <span
                className="w-14 h-14 rounded-[16px] grid place-items-center mb-[22px]"
                style={{ background: col.bg, color: col.text }}
              >
                <span className="w-6 h-6 [&_svg]:w-full [&_svg]:h-full">{c.icon}</span>
              </span>
              <Heading as="h3" className="text-[20px]">{c.title}</Heading>
              <Text variant="sm" muted className="mt-3 leading-[1.6]">{c.desc}</Text>
            </article>
          )
        })}
      </div>

      {/* CTA banner */}
      <div className="reveal mt-14 [background:var(--grad)] rounded-xl p-12 flex items-center justify-between gap-8 flex-wrap max-md:p-8">
        <div>
          <Heading as="h3" className="text-white text-[36px]">Ready to Join UNGIST?</Heading>
          <Text variant="body" className="text-white/85 mt-2.5">Join 12,000+ aspirants who chose UNGIST. Enroll today and start your UPSC journey.</Text>
        </div>
        <div className="flex items-center gap-3.5 flex-wrap flex-none">
          <a
            href="#pricing-pro"
            className="inline-flex items-center justify-center font-text font-semibold text-[0.97rem] bg-white text-violet px-6 py-3.5 rounded-sm no-underline transition-[box-shadow] duration-300 hover:shadow-[0_2px_12px_rgba(20,12,40,0.14)]"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </Container>
  </Section>
)

export default WhyUngist
