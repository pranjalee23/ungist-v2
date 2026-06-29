import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow } from '@/components/ui/Eyebrow'

const CREDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px] text-violet">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: 'MSc Mathematics, IIT Roorkee',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px] text-violet">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: '15 Years Teaching CSAT',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px] text-violet">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: '12,000+ Students Guided',
  },
]

export const CsatAuthor = () => (
  <Section surface id="author">
    <Container>
      <SectionHead center>
        <div className="reveal">
          <Eyebrow>About the Author</Eyebrow>
          <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">The Mind Behind the Book</h2>
        </div>
      </SectionHead>

      <div className="reveal grid grid-cols-[auto_1fr] gap-12 items-center bg-white border-[1.5px] border-border rounded-xl p-12 shadow-2 max-lg:grid-cols-1 max-lg:gap-6 max-lg:p-8">
        {/* Avatar */}
        <div
          className="w-[120px] h-[120px] rounded-full grid place-items-center font-display text-[2rem] font-bold text-white flex-none max-lg:w-20 max-lg:h-20 max-lg:text-[1.4rem]"
          style={{ background: 'var(--grad)' }}
        >
          RP
        </div>

        {/* Copy */}
        <div>
          <div className="text-[1.4rem] font-bold tracking-[-0.02em]">Ram Mohan Pandey</div>
          <div className="text-[.92rem] text-violet font-semibold mt-1">Mathematics &amp; CSAT Faculty · Founder, UNGIST</div>
          <p className="text-[.92rem] text-muted leading-[1.7] mt-3.5 max-w-[520px]">
            The journey of the CSAT paper has changed dramatically in the last few years — what was once seen as a qualifying hurdle has become a test of clarity, patience, and true analytical ability. As a teacher, my greatest joy has been watching students discover that CSAT is not about memorising formulas; it is about understanding how we think, decide, and apply logic in everyday situations.
          </p>
          <p className="text-[.92rem] text-muted leading-[1.7] mt-2.5 max-w-[520px]">
            With every edition, I have tried to stay true to one purpose — to give students a resource that builds clarity, confidence, and genuine competence.
          </p>
          <div className="flex gap-3 flex-wrap mt-4">
            {CREDS.map((cred, i) => (
              <span key={i} className="flex items-center gap-[7px] text-[.82rem] font-medium text-secondary bg-surface border border-border px-3 py-1.5 rounded-full">
                {cred.icon}
                {cred.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
)
