'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { SiteSetting } from '@/payload-types'
import { Button } from '@/components/ui/Button'

const Caret = ({ open }: { open?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-[15px] h-[15px] text-subtle transition-transform duration-200 ${open ? 'rotate-180 text-violet' : 'group-hover:translate-y-px'}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

type NavItem = NonNullable<SiteSetting['primaryNav']>[number]
type Cta = SiteSetting['ctaPrimary']

interface DropdownItem {
  label: string
  href: string
  desc: string
}

const NAV_DROPDOWNS: Record<string, DropdownItem[]> = {
  Products: [
    { label: 'Test Series', href: '/test-series', desc: 'Full-length mocks with analytics' },
    { label: 'CSAT Book', href: '/book', desc: 'Concept-first printed guide' },
  ],
  Resources: [
    { label: 'PYQ', href: '/resources/pyq', desc: '40+ years of UPSC papers' },
    { label: 'Videos', href: '/resources/videos', desc: 'Expert video lectures' },
    { label: 'Strategy', href: '/resources/strategy', desc: 'Topper-verified guides' },
  ],
}

export const Header: React.FC<{ settings: SiteSetting }> = ({ settings }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  const nav: NavItem[] = settings.primaryNav ?? []
  const ghost: Cta = settings.ctaGhost
  const primary: Cta = settings.ctaPrimary

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[80] bg-white/85 backdrop-saturate-[180%] backdrop-blur-[14px] transition-shadow duration-[250ms] [transition-timing-function:var(--ease)] ${
        scrolled ? 'shadow-[0_10px_30px_-16px_rgba(20,12,40,0.18)]' : ''
      }`}
    >
      {/* Desktop nav */}
      <div className="flex items-center justify-between gap-6 max-w-[1280px] mx-auto w-full px-6 py-4">
        <a href="/" className="flex items-center" aria-label="UNGIST home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ungist-logo.png" alt="UNGIST" className="h-[30px] w-auto block" />
        </a>

        <nav ref={navRef} className="flex items-center gap-[30px] max-lg:hidden" aria-label="Primary">
          {nav.map((item, i) => {
            const dropdown = item.hasCaret ? NAV_DROPDOWNS[item.label] : undefined
            const isOpen = activeDropdown === item.label

            if (dropdown) {
              return (
                <div key={i} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    className={`text-[1rem] font-normal inline-flex items-center gap-[5px] transition-colors duration-200 hover:text-violet group bg-transparent border-none cursor-pointer font-text p-0 ${isOpen ? 'text-violet' : 'text-ink'}`}
                  >
                    {item.label}
                    <Caret open={isOpen} />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-border rounded-xl shadow-card overflow-hidden z-[90] min-w-[200px] transition-[opacity,transform] duration-200 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
                  >
                    {dropdown.map((d) => (
                      <a
                        key={d.label}
                        href={d.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-3 text-secondary hover:bg-lavender hover:text-violet transition-[background,color] duration-150 no-underline"
                      >
                        <span className="block text-[0.9rem] font-semibold">{d.label}</span>
                        <span className="block text-[0.78rem] text-muted mt-0.5 font-normal">{d.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <a
                key={i}
                href={item.href}
                className="text-[1rem] font-medium text-secondary relative inline-flex items-center gap-[5px] transition-colors duration-200 hover:text-violet"
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-[22px]">
          {ghost?.href && (
            <Button variant="ghost" href={ghost.href} className="!py-[10px] !px-5 max-lg:hidden">
              {ghost.label}
            </Button>
          )}
          {primary?.href && (
            <Button variant="primary" href={primary.href} className="!py-[10px] !px-5 max-lg:hidden">
              {primary.label}
            </Button>
          )}
          <button
            className="hidden max-lg:grid w-[42px] h-[42px] rounded-sm border border-border bg-white place-items-center cursor-pointer"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex fixed inset-0 z-[95] bg-white flex-col transition-[transform,opacity] duration-300 [transition-timing-function:var(--ease-spring)] ${
          open
            ? 'translate-y-0 scale-100 opacity-100 pointer-events-auto'
            : '-translate-y-3 scale-[0.98] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-none flex items-center justify-between px-5 py-[14px] border-b border-border">
          <a href="/" className="flex items-center" aria-label="UNGIST home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ungist-logo.png" alt="UNGIST" className="h-[26px] w-auto block" />
          </a>
          <button
            className="w-9 h-9 rounded-full border-none bg-surface text-secondary grid place-items-center cursor-pointer flex-none transition-[background,color] duration-200 hover:bg-lavender hover:text-violet"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[18px] h-[18px]">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-3 py-2 flex flex-col gap-0.5 overflow-y-auto">
          {nav.map((item, i) => {
            const dropdown = item.hasCaret ? NAV_DROPDOWNS[item.label] : undefined
            return (
              <React.Fragment key={i}>
                <a
                  href={item.href}
                  className="block px-3.5 py-[11px] rounded-xs font-medium text-[0.97rem] text-secondary transition-[background,color] duration-150 hover:bg-lavender hover:text-violet"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
                {dropdown && (
                  <div className="ml-4 mb-1">
                    {dropdown.map((d) => (
                      <a
                        key={d.label}
                        href={d.href}
                        onClick={() => setOpen(false)}
                        className="block px-3.5 py-[9px] rounded-xs text-[0.9rem] text-muted hover:bg-lavender hover:text-violet transition-[background,color] duration-150 no-underline"
                      >
                        {d.label}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </nav>

        <div className="flex-none px-5 pb-5 pt-3 border-t border-border flex flex-col gap-2.5">
          {ghost?.href && (
            <Button variant="ghost" href={ghost.href} block onClick={() => setOpen(false)}>
              {ghost.label}
            </Button>
          )}
          {primary?.href && (
            <Button variant="primary" href={primary.href} block onClick={() => setOpen(false)}>
              {primary.label}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
