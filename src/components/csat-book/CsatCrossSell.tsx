import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const TestSeriesIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
)

const BookIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

export const CsatCrossSell = () => (
  <Section id="crosssell">
    <Container>
      <div
        className="reveal relative rounded-xl overflow-hidden flex items-center justify-between gap-8 px-[52px] py-12 max-lg:flex-col max-lg:items-start max-lg:px-9 max-[520px]:px-6 max-[520px]:py-7"
        style={{ background: 'var(--grad)' }}
      >
        {/* Decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 w-[340px] h-[340px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,.10), rgba(255,255,255,0) 70%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[60px] -left-[60px] w-[240px] h-[240px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,.08), rgba(255,255,255,0) 70%)' }}
        />

        {/* Copy */}
        <div className="relative z-[1]">
          <span className="block text-[.72rem] font-bold tracking-[.12em] uppercase text-white/70 mb-2.5">
            Go Further with UNGIST
          </span>
          <h3 className="text-[clamp(1.3rem,3vw,1.7rem)] font-bold text-white tracking-[-0.02em] mb-2">
            The Book is Just the Start
          </h3>
          <p className="text-[.9rem] text-white/80 max-w-[380px] leading-[1.6]">
            Pair it with live classes, mock tests, and All-India rankings — everything in the Foundation Program is built around the same logic-first approach.
          </p>
        </div>

        {/* Actions */}
        <div className="relative z-[1] flex gap-3 flex-wrap">
          <a
            href="/test-series"
            className="inline-flex items-center gap-2 px-[22px] py-[14px] rounded-sm font-semibold text-[.92rem] cursor-pointer transition-all duration-300 bg-white text-violet hover:bg-lavender hover:shadow-[0_2px_12px_rgba(20,12,40,0.14)] whitespace-nowrap no-underline"
          >
            <TestSeriesIco />
            Explore Test Series
          </a>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 px-[22px] py-[14px] rounded-sm font-semibold text-[.92rem] cursor-pointer transition-all duration-300 text-white bg-white/12 border-[1.5px] border-white/35 hover:bg-white/20 whitespace-nowrap no-underline"
          >
            <BookIco />
            View Foundation Program
          </a>
        </div>
      </div>
    </Container>
  </Section>
)
