'use client'

import React, { useEffect, useRef, useState } from 'react'

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
        // easeOutCubic
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
    <section className="section bg-surface" style={{ paddingBlock: 'clamp(56px, 7vw, 84px)' }}>
      <div className="container">
        <div className="metrics reveal" ref={ref}>
          {METRICS.map((m) => (
            <div className="metric" key={m.lbl}>
              <div className="num">
                {m.display ?? `${Math.round((m.count ?? 0) * progress).toLocaleString('en-US')}${m.suffix ?? ''}`}
              </div>
              <div className="lbl">{m.lbl}</div>
              <div className="sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics
