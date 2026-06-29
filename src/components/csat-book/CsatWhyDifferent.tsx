import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow } from '@/components/ui/Eyebrow'

const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px] text-violet">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3M6.343 6.343l-.707-.707M12 21v-1m-6.364-1.636.707.707" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      </svg>
    ),
    title: 'Formula-Free. Logic-First.',
    body: 'Every explanation is built on how you reason through a problem — not which formula to plug in. Especially useful for aspirants from Arts and Humanities backgrounds, or anyone who freezes at the sight of a maths problem.',
    isNew: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px] text-violet">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: '15 Years of PYQs, Topic by Topic',
    body: 'Rather than presenting PYQs year-wise, this book groups them by topic — so you can see exactly how UPSC frames questions on Percentages, Cubes, Syllogism, and more, and identify patterns before you sit the exam.',
    isNew: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px] text-violet">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Reading Comprehension — Now Complete',
    body: 'The 4th edition brings in full Reading Comprehension coverage, with all RC PYQs from 2016 to 2024 included. This makes it the first edition that covers the entire CSAT syllabus in one book.',
    isNew: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px] text-violet">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'CSAT 2025 Paper Included',
    body: 'The solved CSAT 2025 question paper is included in full — giving you the freshest possible benchmark for what UPSC is currently testing and how the question style has evolved.',
    isNew: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px] text-violet">
        <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
      </svg>
    ),
    title: 'Inequality Chapter — New Addition',
    body: 'Inequality in Reasoning has appeared with increasing frequency in recent UPSC papers. This dedicated chapter, new to the 4th edition, ensures you are not caught off guard.',
    isNew: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px] text-violet">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'Written by a Classroom Teacher',
    body: 'Ram Mohan Pandey has taught CSAT in classroom batches for over 15 years. The explanations in this book are the same ones that have worked for thousands of aspirants in live sessions — not written in isolation from a textbook.',
    isNew: false,
  },
]

export const CsatWhyDifferent = () => (
  <Section surface id="why">
    <Container>
      <SectionHead center>
        <div className="reveal">
          <Eyebrow>What Makes It Different</Eyebrow>
          <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Built Around How UPSC Actually Asks</h2>
          <p className="text-muted text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
            Not another formula dump. This book was written because aspirants needed a resource that builds thinking, not dependency.
          </p>
        </div>
      </SectionHead>

      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        {CARDS.map((card, i) => (
          <div key={i} className="reveal bg-white border border-border rounded-lg p-7 shadow-1">
            <div className="w-11 h-11 rounded-[12px] bg-lavender-2 grid place-items-center mb-[18px]">
              {card.icon}
            </div>
            <h3 className="text-[1rem] font-bold mb-2">{card.title}</h3>
            <p className="text-[.88rem] text-muted leading-[1.65]">{card.body}</p>
            {card.isNew && (
              <span className="inline-flex items-center gap-[5px] bg-violet/10 text-violet text-[.72rem] font-bold tracking-[.06em] px-[9px] py-[3px] rounded-full mt-2.5">
                <CheckIco />
                New in 4th Edition
              </span>
            )}
          </div>
        ))}
      </div>
    </Container>
  </Section>
)
