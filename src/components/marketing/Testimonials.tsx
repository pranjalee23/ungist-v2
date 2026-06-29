'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

interface Story {
  air: string
  quote: string
  initials: string
  name: string
  role: string
  batch: string
}

const STORIES: Story[] = [
  {
    air: 'AIR 12',
    quote: '"UNGIST\'s structured approach to answer writing transformed my preparation. The faculty\'s personalized feedback was…"',
    initials: 'KN',
    name: 'Kavya Nair',
    role: 'IAS • UPSC CSE 2024',
    batch: 'Online Batch 2022',
  },
  {
    air: 'AIR 34',
    quote: '"The offline campus experience at Old Rajender Nagar gave me the discipline I needed. Study halls open 24/7 made the difference."',
    initials: 'AM',
    name: 'Arjun Mehta',
    role: 'IPS • UPSC CSE 2024',
    batch: 'Old Rajender Nagar Campus 2022',
  },
  {
    air: 'AIR 67',
    quote: '"The test series and detailed analytics helped me identify my weak areas early. UNGIST\'s support system is truly exceptional."',
    initials: 'SP',
    name: 'Sneha Patel',
    role: 'IFS • UPSC CSE 2023',
    batch: 'Online Batch 2021',
  },
  {
    air: 'AIR 89',
    quote: '"Dr. Anand\'s mentorship was a game changer. The mock interviews especially prepared me for the actual personality test."',
    initials: 'RS',
    name: 'Rahul Singh',
    role: 'IAS • UPSC CSE 2023',
    batch: 'Old Rajender Nagar Campus 2021',
  },
  {
    air: 'AIR 112',
    quote: '"Ram Mohan Sir\'s approach to Maths made CSAT feel effortless. I went from dreading the paper to scoring above 80%."',
    initials: 'PT',
    name: 'Priya Tiwari',
    role: 'IRS • UPSC CSE 2024',
    batch: 'Online Batch 2022',
  },
  {
    air: 'AIR 156',
    quote: '"The CSAT batch at Old Rajender Nagar was exactly what I needed. Structured, focused and the best teachers I\'ve encountered."',
    initials: 'VK',
    name: 'Vikram Kulkarni',
    role: 'IPS • UPSC CSE 2023',
    batch: 'Old Rajender Nagar Campus 2021',
  },
]

const TrophyIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
)
const StarIco = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z" />
  </svg>
)

export const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(1)

  const maxIndex = Math.max(0, STORIES.length - perView)

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth > 768 ? 4 : 1)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [index, maxIndex])

  // Position the track so card `index` sits at the left edge.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement | undefined
    const offset = card ? card.offsetLeft - track.offsetLeft : 0
    track.style.transform = `translateX(${-offset}px)`
  }, [index, perView])

  const go = useCallback((i: number) => setIndex(Math.max(0, Math.min(i, maxIndex))), [maxIndex])

  // Auto-advance (mobile single-card view benefits most).
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 5000)
    return () => clearInterval(id)
  }, [maxIndex])

  return (
    <section className="section bg-lav" id="results">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Success Stories</span>
          <h2>Our students are nation builders</h2>
          <p>Real success stories from aspirants who trusted UNGIST with their UPSC journey.</p>
        </div>
        <div className="hof-carousel">
          <div className="hof-track-wrap">
            <div className="hof-track" ref={trackRef}>
              {STORIES.map((s) => (
                <article className="hof-card reveal" key={s.name}>
                  <span className="hof-badge">
                    <TrophyIco />
                    {s.air}
                  </span>
                  <svg className="hof-quote-mark" viewBox="0 0 32 24" fill="currentColor">
                    <path d="M9.6 0C4.3 2.4 0 7.8 0 14.1 0 19.6 3.6 24 9 24c4.2 0 7.2-3.2 7.2-7.1 0-3.6-2.5-6.2-5.8-6.2-.6 0-1.1.1-1.5.2C9.4 6.8 11.9 3.2 16 1.1L9.6 0zm17 0C21.3 2.4 17 7.8 17 14.1c0 5.5 3.6 9.9 9 9.9 4.2 0 7.2-3.2 7.2-7.1 0-3.6-2.5-6.2-5.8-6.2-.6 0-1.1.1-1.5.2C26.4 6.8 28.9 3.2 33 1.1L26.6 0z" />
                  </svg>
                  <p className="hof-quote-text">{s.quote}</p>
                  <div className="hof-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIco key={i} />
                    ))}
                  </div>
                  <div className="hof-divider">
                    <span className="hof-avatar" style={{ background: 'var(--violet)' }}>
                      {s.initials}
                    </span>
                    <div>
                      <div className="hof-name">{s.name}</div>
                      <div className="hof-role">{s.role}</div>
                      <div className="hof-batch">{s.batch}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="hof-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`hof-dot${i === index ? ' active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>

          <div className="hof-foot reveal">
            <p>
              Join our growing list of <b>800+ civil servants</b> who cleared UPSC with UNGIST
            </p>
            <a href="#results">
              View complete results list
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
