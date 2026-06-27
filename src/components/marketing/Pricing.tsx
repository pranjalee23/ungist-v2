'use client'

import React, { useState } from 'react'

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
  /** number of leading features that are included; the rest render as "off" */
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
    modes: [
      { label: 'Online', price: '₹4,999' },
      { label: 'Offline', price: '₹7,999' },
    ],
    enrollHref: '#pricing-pro',
  },
  {
    name: 'Plus',
    badge: 'Value for Money',
    tag: 'Everything to stay on track',
    included: 6,
    modes: [
      { label: 'Online', price: '₹6,999' },
      { label: 'Offline', price: '₹9,999' },
    ],
    enrollHref: '#pricing-pro',
    variant: 'popular',
  },
  {
    name: 'Pro',
    badge: 'Best Seller',
    tag: 'The complete preparation system',
    included: 7,
    modes: [
      { label: 'Online', price: '₹9,999' },
      { label: 'Offline', price: '₹12,999' },
    ],
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
  'Basic Numeracy',
  'Data Interpretation',
  'Logical Reasoning',
  'General Mental Ability',
  'Analytical Ability',
  'Reading Comprehension',
]

const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const XIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const ArrowIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)
const ClockIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const TierCard = ({ tier }: { tier: Tier }) => {
  const [mode, setMode] = useState(0)
  return (
    <article className={`tier reveal${tier.variant ? ` ${tier.variant}` : ''}`} id={tier.id}>
      <div className="tier-top">
        <div className="tier-name">{tier.name}</div>
        <span className="tier-badge">{tier.badge}</span>
      </div>
      <div className="tier-tag">{tier.tag}</div>
      <ul className="tier-feats">
        {FEATURES.map((label, i) => {
          const off = i >= tier.included
          return (
            <li className={off ? 'off' : undefined} key={label}>
              {off ? <XIco /> : <CheckIco />}
              {label}
            </li>
          )
        })}
      </ul>
      <div className="tier-mode-grid">
        {tier.modes.map((m, i) => (
          <div
            className={`tier-mode-opt${mode === i ? ' active' : ''}`}
            key={m.label}
            onClick={() => setMode(i)}
          >
            <span className="tier-mode-label">{m.label}</span>
            <span className="tier-mode-price">{m.price}</span>
          </div>
        ))}
      </div>
      <a href={tier.enrollHref} className="btn btn-primary btn-block tier-enroll">
        Enroll Now
        <ArrowIco />
      </a>
      <div className="tier-validity">
        <ClockIco />
        Valid till Prelims 2027
      </div>
    </article>
  )
}

export const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">UPSC CSAT Foundation Program</span>
          <h2>One Program, Flexible Plans</h2>
        </div>

        <div className="batch-strip reveal">
          {BATCH.map((b, i) => (
            <React.Fragment key={b}>
              {i > 0 && <span className="bs-div">|</span>}
              <span>{b}</span>
            </React.Fragment>
          ))}
        </div>

        <div className="topics-row reveal">
          <span className="topics-label">TOPICS COVERED</span>
          <div className="topics-chips">
            {TOPICS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="tiers">
          {TIERS.map((tier) => (
            <TierCard tier={tier} key={tier.name} />
          ))}
        </div>

        <div className="pricing-learn reveal">
          <button type="button" onClick={() => setModalOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Learn about Included Resources in Plus &amp; Pro Plans
            <ArrowIco />
          </button>
        </div>
      </div>

      <ResourcesModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

const ResourcesModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <>
    <div className={`res-modal-overlay${open ? ' open' : ''}`} onClick={onClose} />
    <div className={`res-modal${open ? ' open' : ''}`}>
      <div className="res-modal-head">
        <div>
          <div className="res-modal-title">What&apos;s Included in the CSAT Foundation Program</div>
          <div className="res-modal-sub">These learning resources are included in the Plus and Pro plans.</div>
        </div>
        <button type="button" className="res-modal-close" aria-label="Close resources modal" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="res-modal-grid">
        <div className="res-modal-card">
          <span className="res-modal-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <h4>Dedicated Live Question Practice Session</h4>
          <p>Weekly faculty-led sessions focused on solving exam-level CSAT questions under timed conditions with doubt resolution and strategy building.</p>
        </div>
        <div className="res-modal-card">
          <span className="res-modal-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          <h4>UNGIST CSAT Book by Ram Mohan Pandey</h4>
          <p>Comprehensive CSAT study material covering Quantitative Aptitude, Logical Reasoning, and Reading Comprehension with solved examples and practice exercises.</p>
          <a href="#counselling" className="res-modal-cta">
            View Book Details
            <ArrowIco />
          </a>
        </div>
        <div className="res-modal-card">
          <span className="res-modal-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </span>
          <h4>Year Long Test Series</h4>
          <p>Full-length mock tests, sectional tests and topic tests with detailed solutions, performance analytics and All India rank to track your progress.</p>
          <a href="#courses" className="res-modal-cta">
            Explore Test Series
            <ArrowIco />
          </a>
        </div>
      </div>
      <div className="res-modal-foot">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        Base plan includes core learning features (Live Lectures, Notes, Doubt Support, PYQ Solutions).
      </div>
    </div>
  </>
)

export default Pricing
