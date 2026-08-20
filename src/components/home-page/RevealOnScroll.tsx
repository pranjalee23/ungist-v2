'use client'

import { useEffect } from 'react'

const SELECTOR = '.reveal'
const isReveal = (el: HTMLElement) => el.classList.contains('reveal')

/**
 * Ports the marketing pages' reveal-on-scroll behaviour: every reveal element
 * fades/slides in when it enters the viewport. Mounted once in the frontend
 * layout. Without this, `.reveal` ({ opacity: 0 }) would stay hidden.
 */
export const RevealOnScroll = () => {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => el.classList.add('in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    const observe = (root: ParentNode) => {
      root
        .querySelectorAll<HTMLElement>(SELECTOR)
        .forEach((el) => !el.classList.contains('in') && observer.observe(el))
    }

    observe(document)

    // Catch reveal elements added later (HMR, client-side navigation).
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (isReveal(node)) observer.observe(node)
            observe(node)
          }
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}

export default RevealOnScroll
