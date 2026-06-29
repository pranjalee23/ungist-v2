'use client'

import React, { useMemo, useState } from 'react'

const HERO_CHECKS = [
  'Online & Offline Programs',
  'Expert Faculty from IIT',
  'Personalized Mentorship',
  'CSAT Expertise',
]

const SUBJECTS = ['Quant', 'Reasoning', 'RC', 'Data Suff.']

const CATEGORIES = [
  'Number System', 'Percentage', 'Ratio', 'Time & Work', 'Profit & Loss', 'Average',
  'Mixture & Alligation', 'Simple Interest', 'Compound Interest', 'Algebra', 'Geometry',
  'Mensuration', 'Permutation & Combination', 'Probability', 'Data Interpretation', 'Trigonometry',
]

const YEARS = ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011']

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const CircleCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

export const Hero = () => {
  const [sheetOpen, setSheetOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (value: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(value) ? next.delete(value) : next.add(value)
      return next
    })
  }

  const allCatsSelected = CATEGORIES.every((c) => selected.has(c))
  const allYearsSelected = YEARS.every((y) => selected.has(y))

  /** Select or clear every value in a group (the "All" checkbox). */
  const toggleAll = (group: string[]) => {
    setSelected((prev) => {
      const next = new Set(prev)
      const allOn = group.every((v) => next.has(v))
      group.forEach((v) => (allOn ? next.delete(v) : next.add(v)))
      return next
    })
  }

  const selectorText = useMemo(() => {
    const cats = CATEGORIES.filter((c) => selected.has(c)).length
    const yrs = YEARS.filter((y) => selected.has(y)).length
    if (!cats && !yrs) return 'Select categories & years'
    const parts: string[] = []
    if (cats) parts.push(`${cats} categor${cats > 1 ? 'ies' : 'y'}`)
    if (yrs) parts.push(`${yrs} year${yrs > 1 ? 's' : ''}`)
    return parts.join(', ')
  }, [selected])

  const pills = useMemo(() => [...CATEGORIES, ...YEARS].filter((v) => selected.has(v)), [selected])
  const q = search.trim().toLowerCase()
  const catMatches = (label: string) => !q || label.toLowerCase().includes(q)

  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* ---------- Copy ---------- */}
        <div className="hero-copy">
          <span className="eyebrow-badge">
            <span className="dot" />
            India&apos;s Top UPSC CSAT Coaching Institute
          </span>
          <h1>
            <span className="ln">Worried about CSAT?</span>
            <span className="ln hl">Analyse yourself first</span>
          </h1>
          <p className="lead">
            Start with a free CSAT diagnostic test to identify your specific weak areas — before
            spending thousands on random courses.
          </p>
          <div className="hero-checks">
            {HERO_CHECKS.map((label) => (
              <div className="hero-check" key={label}>
                <CircleCheck />
                {label}
              </div>
            ))}
          </div>
          <div className="hero-cta">
            <a href="#counselling" className="btn btn-primary btn-lg">
              Start Your CSAT Diagnosis
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="hero-trust">
            <span className="ht">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              12,000+ Students
            </span>
            <span className="ht">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z" />
              </svg>
              800+ Selections
            </span>
            <span className="ht">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              4.9/5 Rating
            </span>
          </div>
        </div>

        {/* ---------- Practice engine preview ---------- */}
        <div className="hero-visual">
          <div className="app reveal" role="img" aria-label="Student dashboard with CSAT practice engine preview and performance stats">
            <div className="app-head">
              <div className="greet">
                <div className="g1">Welcome back,</div>
                <div className="g2">Jane Doe</div>
              </div>
              <span className="app-ava">JD</span>
            </div>

            <div className="app-prog">
              <div className="pt">
                <span>
                  <b>75%</b>&nbsp;Complete
                </span>
              </div>
              <div className="track">
                <i style={{ width: '75%' }} />
              </div>
            </div>

            <div className="app-engine">
              <div className="engine-head">
                <div>
                  <h3>Practice PYQ&apos;s</h3>
                  <div className="sub">Pick a subject, category, or year to begin</div>
                </div>
                <span className="free">FREE</span>
              </div>

              <div className="chip-row">
                {SUBJECTS.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              <button type="button" className="cat-selector" onClick={() => setSheetOpen(true)}>
                <span id="catSelectorText">{selectorText}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <a href="#counselling" className="btn btn-primary btn-block engine-cta">
                Generate PYQ Test
              </a>
            </div>

            {/* Categories bottom sheet */}
            <div className={`cat-overlay${sheetOpen ? ' open' : ''}`} onClick={() => setSheetOpen(false)} />
            <div className={`cat-sheet${sheetOpen ? ' open' : ''}`}>
              <div className="cat-sheet-handle" />
              <div className="cat-sheet-head">
                <h4>Select Categories &amp; Years</h4>
                <button type="button" className="cat-close" aria-label="Close" onClick={() => setSheetOpen(false)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="cat-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search categories"
                  autoComplete="off"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="cat-selected-head">
                <span>Selected ({selected.size})</span>
                <button type="button" id="catClearAll" onClick={() => setSelected(new Set())}>
                  Clear all
                </button>
              </div>
              {pills.length > 0 && (
                <div className="cat-selected-pills">
                  {pills.map((value) => (
                    <span className="cat-pill" key={value}>
                      {value}
                      <button type="button" aria-label={`Remove ${value}`} onClick={() => toggle(value)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <div className="cat-scroll">
                <div className="cat-all-head">Categories</div>
                <div className="cat-grid">
                  <label
                    className={`cat-item${catMatches('All') ? '' : ' cat-hide'}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleAll(CATEGORIES)
                    }}
                  >
                    <input type="checkbox" checked={allCatsSelected} readOnly tabIndex={-1} />
                    <span className="cat-box">
                      <Check />
                    </span>
                    All
                  </label>
                  {CATEGORIES.map((label) => (
                    <label
                      className={`cat-item${catMatches(label) ? '' : ' cat-hide'}`}
                      key={label}
                      onClick={(e) => {
                        e.preventDefault()
                        toggle(label)
                      }}
                    >
                      <input type="checkbox" value={label} checked={selected.has(label)} readOnly tabIndex={-1} />
                      <span className="cat-box">
                        <Check />
                      </span>
                      {label}
                    </label>
                  ))}
                </div>

                <div className="cat-all-head">Year</div>
                <div className="cat-grid">
                  <label
                    className="cat-item"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleAll(YEARS)
                    }}
                  >
                    <input type="checkbox" checked={allYearsSelected} readOnly tabIndex={-1} />
                    <span className="cat-box">
                      <Check />
                    </span>
                    All
                  </label>
                  {YEARS.map((label) => (
                    <label
                      className="cat-item"
                      key={label}
                      onClick={(e) => {
                        e.preventDefault()
                        toggle(label)
                      }}
                    >
                      <input type="checkbox" value={label} checked={selected.has(label)} readOnly tabIndex={-1} />
                      <span className="cat-box">
                        <Check />
                      </span>
                      {label}
                    </label>
                  ))}
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-block cat-apply" onClick={() => setSheetOpen(false)}>
                Apply
              </button>
            </div>

            <div className="app-stats">
              <div className="as">
                <b>48</b>
                <span>Tests taken</span>
              </div>
              <div className="as">
                <b>#12</b>
                <span>Rank</span>
              </div>
              <div className="as">
                <b>82%</b>
                <span>Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
