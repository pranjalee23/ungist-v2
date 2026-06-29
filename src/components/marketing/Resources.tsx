import React from 'react'

const ArrowIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

interface Resource {
  color: string
  stat: string
  title: string
  desc: string
  icon: React.ReactNode
}

const RESOURCES: Resource[] = [
  {
    color: 'violet',
    title: 'Current Affairs',
    stat: '365+ Days',
    desc: 'Daily curated UPSC-relevant news with analysis and probable questions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
      </svg>
    ),
  },
  {
    color: 'blue',
    title: 'Previous Year Papers',
    stat: '40+ Years',
    desc: 'Solved PYQs from 1979 to 2024 with detailed explanations and trends.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    color: 'green',
    title: 'Study Materials',
    stat: '1200+ Notes',
    desc: 'Comprehensive notes for all GS papers, Ethics, Essay, and optionals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    color: 'orange',
    title: 'Strategy Guides',
    stat: '50+ Guides',
    desc: 'Topper-verified preparation strategies for Prelims, Mains, and Interview.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    color: 'pink',
    title: 'Answer Writing',
    stat: '500+ Answers',
    desc: 'Model answers, templates, and structured frameworks for GS Mains.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
  {
    color: 'blue',
    title: 'Blog & Analysis',
    stat: '200+ Articles',
    desc: 'Deep-dive articles on policy, economy, environment, and governance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

const POSTS = [
  { tag: 'Strategy', read: '8 min read', title: 'How to Approach the UPSC Prelims 2025 — A Complete Strategy', date: 'June 10, 2026' },
  { tag: 'Current Affairs', read: '6 min read', title: "India's New Education Policy: UPSC Perspective & Analysis", date: 'June 8, 2026' },
  { tag: 'Ethics', read: '10 min read', title: 'Ethics Paper 4 — How to Score 140+ with Structured Answers', date: 'June 5, 2026' },
]

export const Resources = () => (
  <section className="section bg-surface" id="resources">
    <div className="container">
      <div className="section-head center reveal">
        <span className="eyebrow">Free Resources</span>
        <h2>Everything You Need to Prepare</h2>
        <p>Access a rich library of free UPSC resources — curated, updated, and organised for serious aspirants.</p>
      </div>
      <div className="res-grid">
        {RESOURCES.map((r) => (
          <article className="res reveal" key={r.title}>
            <span className={`ri ${r.color}`}>{r.icon}</span>
            <div className="res-body">
              <div className="res-top">
                <h3>{r.title}</h3>
                <span className={`res-stat ${r.color}`}>{r.stat}</span>
              </div>
              <p>{r.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-head reveal">
        <h3>Latest from UNGIST Blog</h3>
        <a href="/blog" className="blog-viewall-top">
          View all posts
          <ArrowIco />
        </a>
      </div>
      <div className="blog-grid">
        {POSTS.map((p) => (
          <article className="blog-card reveal" key={p.title}>
            <div className="blog-meta">
              <span className="blog-tag">{p.tag}</span>
              <span className="blog-read">{p.read}</span>
            </div>
            <h4>{p.title}</h4>
            <div className="blog-date">{p.date}</div>
          </article>
        ))}
      </div>
      <a href="/blog" className="blog-viewall-bottom">
        View all posts
        <ArrowIco />
      </a>
    </div>
  </section>
)

export default Resources
