import React from 'react'

const StarIco = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z" />
  </svg>
)
const ClockIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const UsersIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const ArrowIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

interface Course {
  href: string
  coverLabel: string
  badge: string
  badgeClass?: string
  rating: string
  title: string
  subtitle: string
  desc: string
  tags: string[]
  duration: string
  enrolled: string
  price: string
  cta: string
}

const COURSES: Course[] = [
  {
    href: '/test-series',
    coverLabel: 'Enroll in Test Series',
    badge: 'Most Enrolled',
    badgeClass: 'blue',
    rating: '4.8',
    title: 'Test Series',
    subtitle: 'Prelims + Mains',
    desc: 'Rigorous test series with All-India ranking, detailed solutions, and performance analytics.',
    tags: ['200+ Prelims Tests', '60 Mains Tests', 'All-India Ranking', 'Analytics Dashboard'],
    duration: 'Ongoing',
    enrolled: '5,600+',
    price: '₹8,000',
    cta: 'Enroll Now',
  },
  {
    href: '/book',
    coverLabel: 'Buy CSAT Book',
    badge: 'Expert Led',
    rating: '4.9',
    title: 'CSAT Book',
    subtitle: 'Printed Reference',
    desc: 'Concept-first CSAT book with theory, shortcuts, and PYQ-based practice sets, designed for quick revision.',
    tags: ['Concept Notes', 'Shortcuts & Tricks', 'PYQ Practice Sets', 'Printed Edition'],
    duration: 'Self-paced',
    enrolled: '950+',
    price: '₹699',
    cta: 'Buy Now',
  },
]

export const Products = () => (
  <section className="section bg-surface" id="products">
    <div className="container">
      <div className="section-head center reveal">
        <span className="eyebrow">Products</span>
        <h2>Built to Help You Practice Smarter</h2>
        <p>Everything you need to practice and revise, built by UPSC toppers and experienced educators.</p>
      </div>
      <div className="courses-grid">
        {COURSES.map((c) => (
          <article className="course reveal" style={{ position: 'relative' }} key={c.title}>
            <a href={c.href} className="course-cover-link" aria-label={c.coverLabel} />
            <div className="course-top">
              <span className={`course-badge${c.badgeClass ? ` ${c.badgeClass}` : ''}`}>{c.badge}</span>
              <span className="course-rating">
                <StarIco />
                {c.rating}
              </span>
            </div>
            <h3>{c.title}</h3>
            <div className="subtitle">{c.subtitle}</div>
            <p>{c.desc}</p>
            <div className="course-tags">
              {c.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="course-meta">
              <div className="stats">
                <span>
                  <ClockIco />
                  {c.duration}
                </span>
                <span>
                  <UsersIco />
                  {c.enrolled}
                </span>
              </div>
              <div className="price">{c.price}</div>
            </div>
            <span className="course-enroll" aria-hidden="true">
              {c.cta}
              <ArrowIco />
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Products
