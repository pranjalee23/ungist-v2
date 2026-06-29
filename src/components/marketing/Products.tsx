import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHead } from '@/components/ui/SectionHead'

const StarIco = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#F5A623]">
    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z" />
  </svg>
)
const ClockIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-muted-2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const UsersIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-muted-2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const ArrowIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-none transition-transform duration-300 group-hover:translate-x-[3px]">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const badgeColors: Record<string, string> = {
  blue: 'bg-[#E0F2FE] text-[#0369A1]',
  green: 'bg-[rgba(34,197,94,0.12)] text-[#15803D]',
}

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
  <Section surface id="products">
    <Container>
      <SectionHead center className="reveal">
        <Eyebrow>Products</Eyebrow>
        <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Built to Help You Practice Smarter</h2>
        <p className="text-muted text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
          Everything you need to practice and revise, built by UPSC toppers and experienced educators.
        </p>
      </SectionHead>

      <div className="grid grid-cols-2 gap-6 max-w-[780px] mx-auto max-sm:grid-cols-1">
        {COURSES.map((c) => (
          <article
            key={c.title}
            className="reveal group relative bg-white border border-[#EFF1F4] rounded-[24px] p-6 flex flex-col transition-[box-shadow,border-color] duration-300 hover:shadow-[0_4px_20px_rgba(20,12,40,0.1)] hover:border-[#E2D3F6]"
          >
            <a href={c.href} className="absolute inset-0 z-[1] rounded-[inherit]" aria-label={c.coverLabel} />

            <div className="flex items-center justify-between gap-2.5 mb-5">
              <span
                className={`text-[12px] font-semibold px-2 py-1 rounded-full ${c.badgeClass ? badgeColors[c.badgeClass] : 'bg-lavender text-violet'}`}
              >
                {c.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-muted">
                <StarIco />
                {c.rating}
              </span>
            </div>

            <h3 className="text-[18px] font-semibold tracking-[-0.01em]">{c.title}</h3>
            <div className="text-violet font-semibold text-[12px] mt-1.5">{c.subtitle}</div>
            <p className="text-muted text-[14px] mt-4 leading-[1.6]">{c.desc}</p>

            <div className="flex flex-wrap gap-1.5 mt-5 mb-4">
              {c.tags.map((t) => (
                <span key={t} className="text-[12px] font-medium text-muted bg-surface border border-border px-2 py-1 rounded-full whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2.5 border-t border-[#EFF1F4] mt-auto pt-6 mb-[18px]">
              <div className="flex items-center gap-4 text-[14px] text-muted font-medium">
                <span className="inline-flex items-center gap-1.5"><ClockIco />{c.duration}</span>
                <span className="inline-flex items-center gap-1.5"><UsersIco />{c.enrolled}</span>
              </div>
              <div className="font-display font-bold text-[19px] text-ink tracking-[-0.02em]">{c.price}</div>
            </div>

            <span className="group relative z-[2] inline-flex items-center justify-center gap-2 mt-auto px-[18px] py-3 rounded-[12px] bg-lavender text-violet font-bold text-[14px] w-full transition-[background,color] duration-300 group-hover:bg-violet group-hover:text-white">
              {c.cta}
              <ArrowIco />
            </span>
          </article>
        ))}
      </div>
    </Container>
  </Section>
)

export default Products
