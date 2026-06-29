'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHead } from '@/components/ui/SectionHead'
import { Button } from '@/components/ui/Button'

const FEATURES = [
  'Live Lectures',
  'Concept Quick Revision Notes',
  'Doubt Resolution',
  'PYQ Solutions',
  'Dedicated Live Question Practice Session',
  'UNGIST CSAT Book by Ram Mohan Pandey',
  'Year Long Test Series',
]

interface Tier {
  name: string
  badge: string
  tag: string
  included: number
  modes: { label: string; price: string }[]
  enrollHref: string
  variant?: 'popular' | 'pro'
  id?: string
}

const TIERS: Tier[] = [
  {
    name: 'Base',
    badge: 'Starter',
    tag: 'Core essentials to begin',
    included: 4,
    modes: [{ label: 'Online', price: '₹4,999' }, { label: 'Offline', price: '₹7,999' }],
    enrollHref: '#pricing-pro',
  },
  {
    name: 'Plus',
    badge: 'Value for Money',
    tag: 'Everything to stay on track',
    included: 6,
    modes: [{ label: 'Online', price: '₹6,999' }, { label: 'Offline', price: '₹9,999' }],
    enrollHref: '#pricing-pro',
    variant: 'popular',
  },
  {
    name: 'Pro',
    badge: 'Best Seller',
    tag: 'The complete preparation system',
    included: 7,
    modes: [{ label: 'Online', price: '₹9,999' }, { label: 'Offline', price: '₹12,999' }],
    enrollHref: '#counselling',
    variant: 'pro',
    id: 'pricing-pro',
  },
]

const BATCH = [
  'Batch-1 starting: 22nd June 2026',
  '100 Days',
  '4 Days/Week (Mon – Thu)',
  'Live Online + Offline Hybrid',
  'Recorded Backup',
]

const TOPICS = [
  'Basic Numeracy', 'Data Interpretation', 'Logical Reasoning',
  'General Mental Ability', 'Analytical Ability', 'Reading Comprehension',
]

const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-[18px] h-[18px] flex-none text-[#16A34A]">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const XIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-[18px] h-[18px] flex-none text-[#CBD2D9]">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const ArrowIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)
const ClockIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px]">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const InfoIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-none">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
)

const tierBorderCls = (variant?: string) => {
  if (variant === 'popular') return 'border-[2px] border-violet hover:shadow-[0_4px_20px_rgba(20,12,40,0.1)]'
  if (variant === 'pro') return 'border-[1.5px] border-[#1a1a1a] hover:shadow-[0_4px_20px_rgba(20,12,40,0.1)]'
  return 'border-[1.5px] border-border hover:shadow-[0_4px_20px_rgba(20,12,40,0.1)]'
}

const TierCard = ({ tier }: { tier: Tier }) => {
  const [mode, setMode] = useState(0)
  const isProBadge = tier.variant === 'pro'

  return (
    <article
      id={tier.id}
      className={`reveal relative bg-white rounded-[32px] p-8 flex flex-col overflow-hidden transition-[box-shadow,border-color] duration-300 ${tierBorderCls(tier.variant)}`}
    >
      <div className="flex items-center justify-between gap-[10px] mb-2.5">
        <div className="text-[26px] font-extrabold tracking-[-0.02em] text-ink">{tier.name}</div>
        <span className={`text-[12px] font-bold px-[13px] py-[5px] rounded-full whitespace-nowrap ${isProBadge ? 'bg-ink text-white' : 'bg-lavender text-violet'}`}>
          {tier.badge}
        </span>
      </div>

      <div className="text-[13.5px] text-muted mb-5">{tier.tag}</div>

      <ul className="grid gap-[13px] p-0 mt-[22px]">
        {FEATURES.map((label, i) => {
          const off = i >= tier.included
          return (
            <li key={label} className={`flex items-center gap-[11px] text-[14px] font-medium ${off ? 'text-muted-2 font-normal' : 'text-[#3a4047]'}`}>
              {off ? <XIco /> : <CheckIco />}
              {label}
            </li>
          )
        })}
      </ul>

      <div className="grid grid-cols-2 gap-[10px] mt-[22px] border-t border-border pt-[22px]">
        {tier.modes.map((m, i) => (
          <div
            key={m.label}
            onClick={() => setMode(i)}
            className={`border-[1.5px] rounded-[14px] px-[14px] py-3 cursor-pointer transition-[border-color,background] duration-200 ${mode === i ? 'border-violet bg-lavender' : 'border-border bg-white hover:border-[#CBD2D9] hover:bg-surface'}`}
          >
            <span className={`block text-[12px] font-semibold mb-1 ${mode === i ? 'text-violet' : 'text-muted'}`}>{m.label}</span>
            <span className="block font-display font-bold text-[1.35rem] tracking-[-0.02em] text-ink">{m.price}</span>
          </div>
        ))}
      </div>

      <a href={tier.enrollHref} className="group relative mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-[13px] rounded-[12px] bg-[--grad] text-white font-bold text-[15px] overflow-hidden transition-[box-shadow] duration-[250ms] hover:shadow-[0_2px_12px_rgba(20,12,40,0.14)]">
        <span aria-hidden className="absolute inset-0 -z-[1] bg-[--grad] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />
        Enroll Now
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-none">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>

      <div className="flex items-center justify-center gap-1.5 text-[12px] text-muted mt-3.5">
        <ClockIco />
        Valid till Prelims 2027
      </div>
    </article>
  )
}

export const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Section id="pricing">
      <Container>
        <SectionHead center className="reveal">
          <Eyebrow>UPSC CSAT Foundation Program</Eyebrow>
          <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">One Program, Flexible Plans</h2>
        </SectionHead>

        {/* Batch strip */}
        <div className="reveal flex items-center justify-center flex-wrap gap-y-2 text-[14px] text-muted my-[18px] mb-7">
          {BATCH.map((b, i) => (
            <React.Fragment key={b}>
              {i > 0 && <span className="mx-[14px] text-border max-[768px]:mx-2">|</span>}
              <span>{b}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Topics row */}
        <div className="reveal flex items-center gap-[14px] flex-wrap px-5 py-4 border border-border rounded-[14px] bg-white mb-9">
          <span className="text-[12px] font-extrabold tracking-[0.08em] text-ink whitespace-nowrap">TOPICS COVERED</span>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <span key={t} className="text-[13px] px-[13px] py-[5px] rounded-full border border-[#DDD6F5] bg-[#F5F3FF] text-ink whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 items-start max-lg:grid-cols-1 max-md:grid-cols-1">
          {TIERS.map((tier) => <TierCard tier={tier} key={tier.name} />)}
        </div>

        <div className="reveal text-center mt-7">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-none border-none cursor-pointer text-violet font-semibold text-[14px] font-sans [&_svg]:w-4 [&_svg]:h-4 [&_svg]:flex-none"
          >
            <InfoIco />
            Learn about Included Resources in Plus &amp; Pro Plans
            <ArrowIco />
          </button>
        </div>
      </Container>

      <ResourcesModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Section>
  )
}

const ResourcesModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <>
    <div
      className={`fixed inset-0 bg-[rgba(20,12,40,0.45)] backdrop-blur-[4px] z-[200] transition-opacity duration-[250ms] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    />
    <div
      className={`fixed top-1/2 left-1/2 z-[201] bg-white rounded-[32px] p-8 w-[min(900px,92vw)] max-h-[88vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-300 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] max-[768px]:p-[20px_18px_32px] ${open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'}`}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="font-display font-bold text-[1.1rem] text-ink">What&apos;s Included in the CSAT Foundation Program</div>
          <div className="text-[13px] text-muted mt-1">These learning resources are included in the Plus and Pro plans.</div>
        </div>
        <button type="button" aria-label="Close resources modal" onClick={onClose} className="w-8 h-8 rounded-full border-none bg-surface grid place-items-center cursor-pointer flex-none [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:text-[#3a4047]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5 max-[768px]:grid-cols-1">
        {[
          {
            title: 'Dedicated Live Question Practice Session',
            body: 'Weekly faculty-led sessions focused on solving exam-level CSAT questions under timed conditions with doubt resolution and strategy building.',
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
            cta: null,
          },
          {
            title: 'UNGIST CSAT Book by Ram Mohan Pandey',
            body: 'Comprehensive CSAT study material covering Quantitative Aptitude, Logical Reasoning, and Reading Comprehension with solved examples and practice exercises.',
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>),
            cta: { href: '#counselling', label: 'View Book Details' },
          },
          {
            title: 'Year Long Test Series',
            body: 'Full-length mock tests, sectional tests and topic tests with detailed solutions, performance analytics and All India rank to track your progress.',
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>),
            cta: { href: '#courses', label: 'Explore Test Series' },
          },
        ].map(({ title, body, icon, cta }) => (
          <div key={title} className="bg-surface rounded-[14px] p-5">
            <span className="w-10 h-10 rounded-[10px] bg-lavender text-violet grid place-items-center mb-3 [&_svg]:w-5 [&_svg]:h-5">
              {icon}
            </span>
            <h4 className="text-[14px] font-bold text-ink mb-2">{title}</h4>
            <p className="text-[13px] text-muted leading-[1.55]">{body}</p>
            {cta && (
              <a href={cta.href} className="inline-flex items-center gap-[5px] text-[13px] font-semibold text-violet mt-3.5 [&_svg]:w-[13px] [&_svg]:h-[13px]">
                {cta.label}
                <ArrowIco />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[12.5px] text-muted border-t border-border pt-4 [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:flex-none [&_svg]:text-muted-2">
        <InfoIco />
        Base plan includes core learning features (Live Lectures, Notes, Doubt Support, PYQ Solutions).
      </div>
    </div>
  </>
)

export default Pricing
