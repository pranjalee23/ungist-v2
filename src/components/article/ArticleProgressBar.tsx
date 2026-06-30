'use client'

import React, { useEffect, useState } from 'react'

export function ArticleProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      setProgress(scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 65,
        left: 0,
        height: 3,
        width: `${progress}%`,
        background: 'linear-gradient(to right,var(--color-violet),#C084FC)',
        zIndex: 79,
        transition: 'width .15s linear',
        borderRadius: '0 2px 2px 0',
        pointerEvents: 'none',
      }}
    />
  )
}
