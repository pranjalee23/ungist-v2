'use client'

import React, { useEffect, useState } from 'react'
import type { SiteSetting } from '@/payload-types'

const Caret = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

type NavItem = NonNullable<SiteSetting['primaryNav']>[number]
type Cta = SiteSetting['ctaPrimary']

export const Header: React.FC<{ settings: SiteSetting }> = ({ settings }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="UNGIST home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ungist-logo.png" alt="UNGIST" />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item, i) => (
            <a key={i} href={item.href} className={item.hasCaret ? 'has-caret' : undefined}>
              {item.label}
              {item.hasCaret && <Caret />}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          {ghost?.href && (
            <a href={ghost.href} className="btn btn-ghost">
              {ghost.label}
            </a>
          )}
          {primary?.href && (
            <a href={primary.href} className="btn btn-primary">
              {primary.label}
            </a>
          )}
          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <div className="mobile-menu-head">
          <a href="/" className="brand" aria-label="UNGIST home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ungist-logo.png" alt="UNGIST" />
          </a>
          <button className="mobile-menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="mobile-menu-links">
          {nav.map((item, i) => (
            <a key={i} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          {ghost?.href && (
            <a href={ghost.href} className="btn btn-ghost" onClick={() => setOpen(false)}>
              {ghost.label}
            </a>
          )}
          {primary?.href && (
            <a href={primary.href} className="btn btn-primary" onClick={() => setOpen(false)}>
              {primary.label}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
