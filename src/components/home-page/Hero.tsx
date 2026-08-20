'use client'

import React, { useMemo, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Avatar } from '@/components/ui/Avatar'

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

const CircleCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[21px] h-[21px] text-success flex-none">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const subjectChipCls =
  'text-[0.82rem] font-semibold px-4 py-[9px] rounded-full border border-border bg-white text-secondary whitespace-nowrap cursor-pointer transition-[border-color,color,background] duration-200 hover:border-[#D8C4F4] hover:text-violet'

const subjectChipActiveCls =
  'text-[0.82rem] font-semibold px-4 py-[9px] rounded-full border border-violet [background:var(--grad)] text-white whitespace-nowrap cursor-pointer transition-[border-color,color,background] duration-200'

export const Hero = () => {
  const [sheetOpen, setSheetOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [activeSubject, setActiveSubject] = useState<string | null>(null)

  const toggle = (value: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(value) ? next.delete(value) : next.add(value)
      return next
    })
  }

  const allCatsSelected = CATEGORIES.every((c) => selected.has(c))
  const allYearsSelected = YEARS.every((y) => selected.has(y))

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
    <section className="relative overflow-hidden pt-12 pb-[var(--pad-section)]">
      {/* Decorative radial blobs */}
      <span aria-hidden className="absolute top-[-220px] right-[-160px] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(154,47,251,0.16),rgba(154,47,251,0)_62%)] z-0 pointer-events-none" />
      <span aria-hidden className="absolute bottom-[-180px] left-[-180px] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(180,92,255,0.10),rgba(180,92,255,0)_60%)] z-0 pointer-events-none" />

      <Container>
        <div className="relative z-[1] grid grid-cols-[1.08fr_1fr] gap-14 items-center max-lg:grid-cols-1">

          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-[9px] bg-white border border-border px-[18px] pr-[18px] pl-[14px] py-[9px] rounded-full text-[0.86rem] font-medium text-secondary mb-[26px]">
              <span className="w-[9px] h-[9px] rounded-full bg-success flex-none animate-dot-pulse" />
              India&apos;s Top UPSC CSAT Coaching Institute
            </span>

            <Heading as="h1" size="display">
              <span className="block whitespace-nowrap">Worried about CSAT?</span>
              <span className="block text-violet">Analyse yourself first</span>
            </Heading>

            <Text variant="lead" muted className="mt-[22px] max-w-[480px]">
              Start with a free CSAT diagnostic test to identify your specific weak areas — before
              spending thousands on random courses.
            </Text>

            <div className="grid grid-cols-2 gap-x-7 gap-y-[15px] mt-[34px] max-w-[560px]">
              {HERO_CHECKS.map((label) => (
                <div key={label} className="flex items-center gap-[11px] text-[14px] font-medium text-secondary">
                  <CircleCheckIcon />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex gap-3.5 mt-[34px] flex-wrap">
              <Button variant="primary" size="lg" as="a" href="#counselling">
                Start Your CSAT Diagnosis
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-[26px] gap-y-[10px] mt-10">
              {[
                { label: '12,000+ Students', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
                { label: '800+ Selections', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z" /></svg>) },
                { label: '4.9/5 Rating', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>) },
              ].map(({ label, icon }) => (
                <span key={label} className="inline-flex items-center gap-2 text-[14px] text-muted [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:text-violet [&_svg]:flex-none">
                  {icon}
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: student dashboard mockup */}
          <div className="relative">
            <div
              className="reveal relative z-[2] bg-white border border-border rounded-xl p-6 overflow-hidden transition-[box-shadow,border-color] duration-300 hover:shadow-md hover:border-white"
              role="img"
              aria-label="Student dashboard with CSAT practice engine preview and performance stats"
            >
              {/* App header */}
              <div className="flex items-center justify-between gap-3 mb-2">
                <div>
                  <div className="text-[0.8rem] text-muted">Welcome back,</div>
                  <div className="font-display font-semibold text-[1.6rem] mt-px">Jane Doe</div>
                </div>
                <Avatar initials="JD" gradient className="transition-transform duration-300 hover:scale-[1.07]" />
              </div>

              {/* Progress bar */}
              <div className="mb-[22px]">
                <div className="flex justify-end text-[0.78rem] text-muted font-medium mb-2">
                  <span><b className="text-violet font-semibold">75%</b>&nbsp;Complete</span>
                </div>
                <div className="h-[9px] rounded-full bg-[#EFEAF6] overflow-hidden">
                  <i className="block h-full w-[75%] rounded-full [background:var(--grad)] transition-[width_1.3s_var(--ease)]" />
                </div>
              </div>

              {/* Practice engine */}
              <div className="border-t border-border pt-[22px]">
                <div className="flex justify-between items-start gap-3.5 mb-[22px]">
                  <div>
                    <Heading as="h3">Practice PYQ&apos;s</Heading>
                    <Text variant="xs" muted className="mt-[5px] tracking-[0.01em]">Pick a subject, category, or year to begin</Text>
                  </div>
                  <span className="text-[0.66rem] font-bold tracking-[0.1em] text-violet bg-lavender border border-lavender-2 px-3 py-1.5 rounded-full flex-none">FREE</span>
                </div>

                {/* Subject chips */}
                <div className="flex flex-wrap gap-[9px] mb-[11px]">
                  {SUBJECTS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setActiveSubject((p) => (p === s ? null : s))}
                      className={activeSubject === s ? subjectChipActiveCls : subjectChipCls}
                    >{s}</button>
                  ))}
                </div>

                {/* Category selector */}
                <button
                  type="button"
                  className="flex items-center justify-between gap-[10px] w-full bg-lavender border-[1.5px] border-lavender-2 rounded-xs px-[14px] py-[13px] cursor-pointer font-sans text-left transition-[border-color] duration-200 hover:border-violet"
                  onClick={() => setSheetOpen(true)}
                >
                  <span className="text-[14px] font-semibold text-violet overflow-hidden text-ellipsis whitespace-nowrap">{selectorText}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-violet flex-none">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                <Button variant="primary" block as="a" href="#counselling" className="mt-[18px]">
                  Generate PYQ Test
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 mt-[18px] border-t border-border pt-[18px]">
                {[{ val: '48', lbl: 'Tests taken' }, { val: '#12', lbl: 'Rank' }, { val: '82%', lbl: 'Score' }].map((s, i) => (
                  <div key={s.lbl} className={`text-center relative px-1 py-0.5 ${i > 0 ? "before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-border" : ''}`}>
                    <b className="font-display font-semibold text-[1.4rem] tracking-[-0.02em]">{s.val}</b>
                    <span className="block text-[0.76rem] text-muted mt-[3px]">{s.lbl}</span>
                  </div>
                ))}
              </div>

              {/* Category bottom sheet overlay */}
              <div
                className={`absolute inset-0 bg-[rgba(20,12,40,0.32)] rounded-xl z-[4] transition-opacity duration-300 ${sheetOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSheetOpen(false)}
              />

              {/* Category bottom sheet */}
              <div
                className={`absolute left-0 right-0 bottom-0 top-[5%] bg-white rounded-[20px_20px_0_0] z-[5] px-[22px] pb-[22px] pt-[10px] flex flex-col transition-transform duration-[350ms] [transition-timing-function:var(--ease-spring)] ${sheetOpen ? 'translate-y-0 shadow-overlay' : 'translate-y-full'}`}
              >
                {/* Handle */}
                <div className="w-[38px] h-1 rounded-full bg-border mx-auto mb-3.5" />

                {/* Sheet head */}
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-[1.05rem] font-bold">Select Categories &amp; Years</h4>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setSheetOpen(false)}
                    className="w-[30px] h-[30px] rounded-full border-none bg-surface text-secondary grid place-items-center cursor-pointer flex-none [&_svg]:w-[15px] [&_svg]:h-[15px]"
                  >
                    <CloseIcon />
                  </button>
                </div>

                {/* Search */}
                <Input
                  icon={<SearchIcon />}
                  type="text"
                  placeholder="Search categories"
                  autoComplete="off"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="mb-4 flex-none"
                />

                {/* Selected count & clear */}
                <div className="flex items-center justify-between text-[13px] font-bold text-ink mb-[10px] flex-none">
                  <span>Selected ({selected.size})</span>
                  <button type="button" onClick={() => setSelected(new Set())} className="bg-none border-none text-violet font-semibold text-[12.5px] cursor-pointer p-0">
                    Clear all
                  </button>
                </div>

                {/* Selected pills */}
                {pills.length > 0 && (
                  <div className="flex flex-nowrap gap-2 mb-3.5 flex-none overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {pills.map((value) => (
                      <span key={value} className="inline-flex items-center gap-1.5 bg-lavender border border-lavender-2 text-violet text-[12.5px] font-semibold pl-3 pr-2 py-1.5 rounded-full whitespace-nowrap flex-none">
                        {value}
                        <button type="button" aria-label={`Remove ${value}`} onClick={() => toggle(value)} className="grid place-items-center w-4 h-4 rounded-full border-none bg-[rgba(154,47,251,0.15)] text-violet cursor-pointer p-0 flex-none [&_svg]:w-[10px] [&_svg]:h-[10px]">
                          <CloseIcon />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Scrollable category + year grid */}
                <div className="overflow-y-auto flex-1 mb-4 pr-0.5">
                  <div className="text-[13px] font-bold text-ink mt-0.5 mb-[10px]">Categories</div>
                  <div className="grid grid-cols-2 gap-[10px]">
                    <CatItem label="All" checked={allCatsSelected} hidden={!catMatches('All')} onToggle={() => toggleAll(CATEGORIES)} />
                    {CATEGORIES.map((label) => (
                      <CatItem key={label} label={label} checked={selected.has(label)} hidden={!catMatches(label)} onToggle={() => toggle(label)} />
                    ))}
                  </div>

                  <div className="text-[13px] font-bold text-ink mt-[18px] mb-[10px]">Year</div>
                  <div className="grid grid-cols-2 gap-[10px]">
                    <CatItem label="All" checked={allYearsSelected} hidden={false} onToggle={() => toggleAll(YEARS)} />
                    {YEARS.map((label) => (
                      <CatItem key={label} label={label} checked={selected.has(label)} hidden={false} onToggle={() => toggle(label)} />
                    ))}
                  </div>
                </div>

                <Button variant="primary" block onClick={() => setSheetOpen(false)} className="flex-none">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const CatItem = ({ label, checked, hidden, onToggle }: { label: string; checked: boolean; hidden: boolean; onToggle: () => void }) => (
  <label
    className={`flex items-center gap-[9px] border rounded-xs px-3 py-[11px] text-[13px] font-medium text-secondary cursor-pointer transition-[border-color,background,color] duration-200 ${checked ? 'border-violet bg-lavender text-violet font-semibold' : 'border-border'} ${hidden ? 'hidden' : ''}`}
    onClick={(e) => { e.preventDefault(); onToggle() }}
  >
    <input type="checkbox" checked={checked} readOnly tabIndex={-1} className="absolute opacity-0 w-0 h-0" />
    <span className={`w-[18px] h-[18px] rounded-[5px] border-[1.6px] grid place-items-center flex-none text-white transition-[background,border-color] duration-200 ${checked ? 'bg-violet border-violet' : 'border-border'}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`w-[11px] h-[11px] transition-opacity duration-[150ms] ${checked ? 'opacity-100' : 'opacity-0'}`}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
    {label}
  </label>
)

export default Hero
