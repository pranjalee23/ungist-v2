'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHead } from '@/components/ui/SectionHead'

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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
)
const StarIco = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z" />
  </svg>
)
const ArrowIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-[250ms] group-hover:translate-x-[3px]">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
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

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement | undefined
    const offset = card ? card.offsetLeft - track.offsetLeft : 0
    track.style.transform = `translateX(${-offset}px)`
  }, [index, perView])

  const go = useCallback((i: number) => setIndex(Math.max(0, Math.min(i, maxIndex))), [maxIndex])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 5000)
    return () => clearInterval(id)
  }, [maxIndex])

  return (
    <section className="relative py-[clamp(76px,10vw,140px)] bg-lavender" id="results">
      <Container>
        <SectionHead center className="reveal">
          <Eyebrow>Success Stories</Eyebrow>
          <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Our students are nation builders</h2>
          <p className="text-muted text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
            Real success stories from aspirants who trusted UNGIST with their UPSC journey.
          </p>
        </SectionHead>

        <div className="relative">
          {/* Track wrapper — clips overflow */}
          <div className="overflow-hidden pt-5 -mt-5">
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-[550ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
            >
              {STORIES.map((s) => (
                <article
                  key={s.name}
                  className="reveal relative bg-white border border-border rounded-[24px] p-6 flex flex-col flex-[0_0_calc(25%-15px)] min-w-0 max-[768px]:flex-[0_0_100%] transition-[box-shadow,border-color] duration-300 hover:shadow-[0_4px_20px_rgba(20,12,40,0.1)] hover:border-[#E2D3F6]"
                >
                  {/* AIR badge */}
                  <span className="absolute top-[-16px] right-[18px] inline-flex items-center gap-1.5 bg-violet text-white text-[13px] font-bold px-[14px] py-2 rounded-full whitespace-nowrap">
                    <TrophyIco />
                    {s.air}
                  </span>

                  <svg viewBox="0 0 32 24" fill="currentColor" className="w-9 h-7 text-[#E2D3F6] mb-3 flex-none overflow-visible">
                    <path d="M9.6 0C4.3 2.4 0 7.8 0 14.1 0 19.6 3.6 24 9 24c4.2 0 7.2-3.2 7.2-7.1 0-3.6-2.5-6.2-5.8-6.2-.6 0-1.1.1-1.5.2C9.4 6.8 11.9 3.2 16 1.1L9.6 0zm17 0C21.3 2.4 17 7.8 17 14.1c0 5.5 3.6 9.9 9 9.9 4.2 0 7.2-3.2 7.2-7.1 0-3.6-2.5-6.2-5.8-6.2-.6 0-1.1.1-1.5.2C26.4 6.8 28.9 3.2 33 1.1L26.6 0z" />
                  </svg>

                  <p className="text-[15px] text-[#2c3138] leading-[1.6] flex-1">{s.quote}</p>

                  <div className="flex gap-[3px] text-[#F5A623] mt-[18px]">
                    {Array.from({ length: 5 }).map((_, i) => <StarIco key={i} />)}
                  </div>

                  <div className="border-t border-border mt-[18px] pt-[18px] flex items-center gap-[11px]">
                    <span className="w-11 h-11 rounded-full bg-violet text-white grid place-items-center font-display font-semibold text-[0.85rem] flex-none">
                      {s.initials}
                    </span>
                    <div>
                      <div className="font-bold text-[0.95rem] text-ink">{s.name}</div>
                      <div className="text-[0.82rem] font-semibold text-violet mt-px">{s.role}</div>
                      <div className="text-[0.78rem] text-muted mt-px">{s.batch}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots — mobile only */}
          <div className="hidden max-[768px]:flex justify-center gap-2 mt-5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[7px] rounded-full border-none p-0 cursor-pointer transition-[background,width] duration-200 ${i === index ? 'bg-violet w-5 rounded-[4px]' : 'bg-[rgba(154,47,251,0.25)] w-[7px]'}`}
              />
            ))}
          </div>

          <div className="reveal text-center mt-12">
            <p className="text-[1.05rem] text-[#2c3138]">
              Join our growing list of <b className="font-bold">800+ civil servants</b> who cleared UPSC with UNGIST
            </p>
            <a href="#results" className="group inline-flex items-center gap-1.5 mt-3.5 font-semibold text-violet text-[14px]">
              View complete results list
              <ArrowIco />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
