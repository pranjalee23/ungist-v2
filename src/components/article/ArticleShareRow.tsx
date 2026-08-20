'use client'

import React, { useState, useCallback } from 'react'

export function ArticleShareRow() {
  const [copied, setCopied] = useState(false)

  const copyLink = useCallback(() => {
    try { navigator.clipboard.writeText(window.location.href) } catch (_) {}
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <div className="article-share-row flex items-center gap-[10px] flex-wrap" style={{ marginTop: 28 }}>
      <span className="text-[14px] font-semibold text-ink">Share this article</span>

      <button
        className="share-btn"
        onClick={() => window.open(`https://x.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
        Share on X
      </button>

      <button
        className="share-btn"
        onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        WhatsApp
      </button>

      <button className="share-btn" onClick={copyLink}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  )
}
