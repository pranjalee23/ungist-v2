import React from 'react'

interface WhyCard {
  color: string
  variant?: string
  title: string
  desc: string
  icon: React.ReactNode
}

const CARDS: WhyCard[] = [
  {
    color: 'violet',
    variant: 'tint',
    title: 'Structured Preparation',
    desc: 'A clear, stage-by-stage roadmap covering every topic in the UPSC syllabus — no gaps, no confusion.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
  },
  {
    color: 'blue',
    title: 'Online Learning',
    desc: 'Live HD classes with real-time interaction, 24/7 recorded access, and a mobile app for learning on the go.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    color: 'green',
    variant: 'lift',
    title: 'Personal Mentorship',
    desc: 'Dedicated 1-on-1 mentors who track your progress, provide feedback, and guide every step of your journey.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    color: 'orange',
    title: 'CSAT Expertise',
    desc: 'A unique CSAT methodology that has achieved a 95%+ pass rate, turning a feared paper into a scoring opportunity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    color: 'violet',
    title: 'Data-Driven Analytics',
    desc: 'Test performance analytics with All-India ranking to identify weak areas and optimise your preparation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    color: 'teal',
    title: 'UPSC Success Track Record',
    desc: '800+ selections across IAS, IPS, IFS, and allied services since inception — numbers that speak for themselves.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

export const WhyUngist = () => (
  <section className="section bg-surface" id="why">
    <div className="container">
      <div className="section-head center reveal">
        <span className="eyebrow">Why UNGIST</span>
        <h2>Built for Serious UPSC Aspirants</h2>
        <p>UNGIST combines institutional expertise with modern pedagogy to deliver a preparation experience that is comprehensive, personal, and results-oriented.</p>
      </div>
      <div className="why-grid">
        {CARDS.map((c) => (
          <article className={`why-card${c.variant ? ` ${c.variant}` : ''} reveal`} key={c.title}>
            <span className={`why-ico ${c.color}`}>{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </article>
        ))}
      </div>

      <div className="cta-banner reveal">
        <div className="cta-banner-copy">
          <h3>Ready to Join UNGIST?</h3>
          <p>Join 12,000+ aspirants who chose UNGIST. Enroll today and start your UPSC journey.</p>
        </div>
        <div className="cta-banner-actions">
          <a href="#pricing-pro" className="btn-cta-white">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default WhyUngist
