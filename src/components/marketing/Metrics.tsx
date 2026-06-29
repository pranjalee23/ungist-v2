'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'

interface Metric {
  count?: number
  suffix?: string
  display?: string
  lbl: string
  sub: string
}

const METRICS: Metric[] = [
  { count: 8, suffix: '+', lbl: 'Years of Excellence', sub: 'Established in 2016' },
  { count: 12000, suffix: '+', lbl: 'Students Mentored', sub: 'Across India' },
  { count: 800, suffix: '+', lbl: 'IAS/IPS Selections', sub: 'In last 5 years' },
  { count: 95, suffix: '%', lbl: 'CSAT Pass Rate', sub: 'Batch average' },
  { display: '4.9/5', lbl: 'Student Rating', sub: 'Verified reviews' },
]

const DURATION = 1300

export const Metrics = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const animate = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION)
        setProgress(1 - Math.pow(1 - t, 3))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      setProgress(1)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative py-[clamp(56px,7vw,84px)] bg-surface">
      <Container>
        <div
          className="reveal grid grid-cols-5 gap-6 text-center max-lg:grid-cols-3 max-[480px]:grid-cols-2"
          ref={ref}
        >
          {METRICS.map((m, idx) => (
            <div
              key={m.lbl}
              className={`px-[18px] py-1.5 border-l-2 border-border ${idx === 0 ? 'border-l-0' : ''}`}
            >
              <div className="font-display font-bold text-[clamp(2rem,3.4vw,2.7rem)] tracking-[-0.03em] text-violet [font-variant-numeric:tabular-nums]">
                {m.display ?? `${Math.round((m.count ?? 0) * progress).toLocaleString('en-US')}${m.suffix ?? ''}`}
              </div>
              <div className="text-ink text-base mt-2.5 font-semibold">{m.lbl}</div>
              <div className="text-muted text-[0.85rem] mt-1">{m.sub}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Metrics
