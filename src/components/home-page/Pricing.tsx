'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHead } from '@/components/ui/SectionHead'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { TextLink } from '@/components/ui/TextLink'

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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-[18px] h-[18px] flex-none text-success-fg">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const XIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-[18px] h-[18px] flex-none text-disabled">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
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
  if (variant === 'popular') return 'border-[2px] border-violet hover:shadow-md'
  if (variant === 'pro') return 'border-[1.5px] border-ink hover:shadow-md'
  return 'border-[1.5px] border-border hover:shadow-md hover:border-white'
}

const TierCard = ({ tier }: { tier: Tier }) => {
  const [mode, setMode] = useState(0)
  const isProBadge = tier.variant === 'pro'

  return (
    <article
      id={tier.id}
      className={`reveal relative bg-white rounded-xl p-8 flex flex-col overflow-hidden transition-[box-shadow,border-color] duration-300 ${tierBorderCls(tier.variant)}`}
    >
      <div className="flex items-center justify-between gap-[10px] mb-2.5">
        <div className="text-[26px] font-extrabold tracking-[-0.02em] text-ink">{tier.name}</div>
        <Badge variant={isProBadge ? 'dark' : 'brand'}>{tier.badge}</Badge>
      </div>

      <Text variant="xs" muted className="mb-5">{tier.tag}</Text>

      <ul className="grid gap-[13px] p-0 mt-[22px]">
        {FEATURES.map((label, i) => {
          const off = i >= tier.included
          return (
            <li key={label} className={`flex items-center gap-[11px] text-[14px] font-medium ${off ? 'text-subtle font-normal' : 'text-secondary'}`}>
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
            className={`border-[1.5px] rounded-card px-[14px] py-3 cursor-pointer transition-[border-color,background] duration-200 ${mode === i ? 'border-violet bg-lavender' : 'border-border bg-white hover:border-disabled hover:bg-surface'}`}
          >
            <span className={`block text-[12px] font-semibold mb-1 ${mode === i ? 'text-violet' : 'text-muted'}`}>{m.label}</span>
            <span className="block font-display font-bold text-[1.35rem] tracking-[-0.02em] text-ink">{m.price}</span>
          </div>
        ))}
      </div>

      <Button variant="primary" block as="a" href={tier.enrollHref} className="mt-4">
        Enroll Now
      </Button>

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
          <Heading as="h2">One Program, Flexible Plans</Heading>
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
        <div className="reveal flex items-center gap-[14px] flex-wrap px-5 py-4 border border-border rounded-card bg-white mb-9">
          <span className="text-[12px] font-extrabold tracking-[0.08em] text-ink whitespace-nowrap">TOPICS COVERED</span>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <span key={t} className="text-[13px] px-[13px] py-[5px] rounded-full border border-lavender-3 bg-[#F5F3FF] text-ink whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 items-start max-lg:grid-cols-1 max-md:grid-cols-1">
          {TIERS.map((tier) => <TierCard tier={tier} key={tier.name} />)}
        </div>

        <div className="reveal text-center mt-7">
          <TextLink as="button" onClick={() => setModalOpen(true)} icon={<InfoIco />}>
            Learn about Included Resources in Plus &amp; Pro Plans
          </TextLink>
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
      className={`fixed top-1/2 left-1/2 z-[201] bg-white rounded-xl p-8 w-[min(900px,92vw)] max-h-[88vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-300 [transition-timing-function:var(--ease-spring)] max-[768px]:p-[20px_18px_32px] ${open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'}`}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="font-display font-bold text-[1.1rem] text-ink">What&apos;s Included in the CSAT Foundation Program</div>
          <Text variant="xs" muted className="mt-1">These learning resources are included in the Plus and Pro plans.</Text>
        </div>
        <button type="button" aria-label="Close resources modal" onClick={onClose} className="w-8 h-8 rounded-full border-none bg-surface grid place-items-center cursor-pointer flex-none [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:text-secondary">
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
          <div key={title} className="bg-surface rounded-card p-5">
            <span className="w-10 h-10 rounded-xs bg-lavender text-violet grid place-items-center mb-3 [&_svg]:w-5 [&_svg]:h-5">
              {icon}
            </span>
            <Heading as="h4" className="mb-2">{title}</Heading>
            <Text variant="xs" muted className="leading-[1.55]">{body}</Text>
            {cta && (
              <TextLink href={cta.href} size="xs" className="mt-3.5">
                {cta.label}
              </TextLink>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[12.5px] text-muted border-t border-border pt-4 [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:flex-none [&_svg]:text-subtle">
        <InfoIco />
        Base plan includes core learning features (Live Lectures, Notes, Doubt Support, PYQ Solutions).
      </div>
    </div>
  </>
)

export default Pricing
