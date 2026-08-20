import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow } from '@/components/ui/Eyebrow'

const AUDIENCE = [
  {
    title: 'Arts & Humanities Aspirants',
    body: 'No engineering or maths background needed. The book explains every concept from first principles — no assumed knowledge, no intimidating notation.',
  },
  {
    title: 'Aspirants Weak in Mathematics',
    body: 'If you avoid maths questions in mock tests, this is the resource that changes that. Builds confidence chapter by chapter through simple worked examples before moving to PYQs.',
  },
  {
    title: 'Self-Study Students (Pan-India)',
    body: 'No classroom access needed. The book is structured to be self-sufficient — theory, solved examples, practice sets, and answer keys in one place.',
  },
  {
    title: 'Re-Attempters Who Narrowly Missed',
    body: 'If CSAT qualifying marks slipped through, a focused revision using the PYQ sections of this book is the fastest way to close that gap before the next attempt.',
  },
]

export const CsatForWhom = () => (
  <Section id="who">
    <Container>
      <SectionHead center>
        <div className="reveal">
          <Eyebrow>Is This Book for You?</Eyebrow>
          <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Who Gets the Most from This Book</h2>
        </div>
      </SectionHead>

      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        {AUDIENCE.map((item, i) => (
          <div key={i} className="reveal flex gap-4 items-start bg-surface rounded-lg py-[22px] px-6 border border-border">
            <div
              className="w-9 h-9 rounded-[10px] grid place-items-center font-display font-bold text-white text-[.95rem] flex-none"
              style={{ background: 'var(--grad)' }}
            >
              {i + 1}
            </div>
            <div>
              <h4 className="text-[.95rem] font-bold mb-1.5">{item.title}</h4>
              <p className="text-[.85rem] text-muted leading-[1.6]">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
)
