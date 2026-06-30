'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'

type PostType = 'video' | 'photo' | 'text' | 'carousel'

interface InstaPost {
  id: number
  type: PostType
  date: string
  bg: string | null
  images?: string[]
  captionShort: string
  captionFull: string
}

const POSTS: InstaPost[] = [
  { id: 1, type: 'video', date: 'June 20, 2026', bg: 'linear-gradient(160deg,#9A2FFB,#5C18A8)', captionShort: 'Why 70% of aspirants fail CSAT — and exactly how to not be one of them', captionFull: 'Why 70% of aspirants fail CSAT — and exactly how to not be one of them.\n\nIn 10 years of teaching CSAT, our faculty has spotted one recurring pattern: most students know the concepts but cannot apply them under time pressure.\n\nHere is the method that fixes it — starting from your next practice session.' },
  { id: 2, type: 'photo', date: 'June 18, 2026', bg: 'linear-gradient(135deg,#EDE9FE,#C4B5FD)', captionShort: 'AIR 47, first attempt. Kavya walked into UNGIST with a dream — she walked out with an IAS rank.', captionFull: 'AIR 47, first attempt.\n\nKavya walked into UNGIST with a dream. Two years of structured mentorship, targeted CSAT prep, and rigorous answer writing later — she walked out with an All India Rank.' },
  { id: 3, type: 'text', date: 'June 16, 2026', bg: null, captionShort: 'CSAT is qualifying, not negligible. The cutoff is 33% — about 55 marks. Yet thousands fail every year.', captionFull: 'CSAT is qualifying, not negligible.\n\nThe cutoff is 33% — about 55 marks out of 200. Yet thousands of Prelims aspirants fail to clear it every single year.\n\nStart now. Be consistent. Clear CSAT first — then worry about GS.' },
  { id: 4, type: 'video', date: 'June 14, 2026', bg: 'linear-gradient(160deg,#059669,#047857)', captionShort: 'Solved this DI question in under 90 seconds — watch the full method', captionFull: 'Solved this Data Interpretation question in under 90 seconds.\n\nMost aspirants spend 4–5 minutes on DI problems that should take 90 seconds. Watch how our faculty breaks it down step by step.' },
  { id: 5, type: 'video', date: 'June 12, 2026', bg: 'linear-gradient(160deg,#D97706,#92400E)', captionShort: 'The one Polity mistake that costs aspirants 8 marks every Prelims', captionFull: 'The one Polity mistake that costs aspirants 8 marks every single Prelims.\n\nMost students memorise Laxmikanth linearly and hope for the best. The exam does not test recall — it tests application.' },
  { id: 6, type: 'carousel', date: 'June 10, 2026', bg: null, images: ['linear-gradient(135deg,#F3E8FF,#C4B5FD)', 'linear-gradient(135deg,#E0E7FF,#A5B4FC)', 'linear-gradient(135deg,#FCE7F3,#F9A8D4)'], captionShort: 'Step inside our Old Rajender Nagar campus — where 800+ civil service dreams became reality.', captionFull: 'Step inside our Old Rajender Nagar campus — where 800+ civil service dreams became reality.\n\nFrom small classrooms in the heart of Delhi to landmark All India selections.' },
  { id: 7, type: 'photo', date: 'June 8, 2026', bg: 'linear-gradient(135deg,#FEF3C7,#FDE68A)', captionShort: 'Result day with our 2025 batch. 47 selections. Every single one earned it.', captionFull: 'Result day with our 2025 batch. 47 selections. Every single one earned it.\n\nDr. Verma and the entire UNGIST faculty with the toppers who made it through. Proud does not begin to cover it.' },
  { id: 8, type: 'video', date: 'June 6, 2026', bg: 'linear-gradient(160deg,#2563EB,#1D4ED8)', captionShort: 'GS Paper 4 ethics case solved live — full examiner logic, step by step', captionFull: 'GS Paper 4 ethics case solved live — full examiner logic, explained step by step.\n\nCase study answers trip up even well-prepared aspirants. Watch how to structure a response that earns full marks.' },
  { id: 9, type: 'text', date: 'June 4, 2026', bg: null, captionShort: '3 months before Prelims and feeling lost? Stop revising everything. Start identifying your weak areas.', captionFull: '3 months before Prelims and feeling lost?\n\nStop revising everything. Start identifying your specific weak areas. Then drill those — nothing else.' },
  { id: 10, type: 'carousel', date: 'June 2, 2026', bg: null, images: ['linear-gradient(135deg,#ECFDF5,#6EE7B7)', 'linear-gradient(135deg,#EFF6FF,#93C5FD)'], captionShort: 'Answer writing workshop — 200 aspirants, one mission, and some genuinely inspiring work.', captionFull: 'Answer writing workshop — 200 aspirants, one mission, and some genuinely inspiring work.\n\nEvery session our faculty reviews live answers and gives targeted feedback.' },
  { id: 11, type: 'video', date: 'May 31, 2026', bg: 'linear-gradient(160deg,#DC2626,#991B1B)', captionShort: 'Reading comprehension in CSAT: stop reading the full passage. Here is the approach that actually works.', captionFull: 'Reading comprehension in CSAT: stop reading the full passage.\n\nThe approach that actually works: questions first, then skim for answers. Our 3-step method has helped students cut passage time by 40%.' },
  { id: 12, type: 'photo', date: 'May 28, 2026', bg: 'linear-gradient(135deg,#F0FDF4,#86EFAC)', captionShort: "From Old Rajender Nagar to Mussoorie. Kiran's journey from aspirant to IFS officer.", captionFull: "From Old Rajender Nagar to Mussoorie.\n\nKiran walked into our campus in 2022 with one year of self-study and no clear direction. Three years later, he cracked IFS." },
]

const PER_PAGE = 4

export function InstagramStrip() {
  const [page, setPage] = useState(0)
  const [openId, setOpenId] = useState<number | null>(null)
  const [carouselIdx, setCarouselIdx] = useState(0)

  const totalPages = Math.ceil(POSTS.length / PER_PAGE)
  const pagePosts = POSTS.slice(page * PER_PAGE, (page + 1) * PER_PAGE)
  const openPost = openId != null ? POSTS.find((p) => p.id === openId) ?? null : null
  const images = openPost?.type === 'carousel' ? (openPost.images ?? []) : openPost?.bg ? [openPost.bg] : []

  // Auto-advance carousel in modal
  useEffect(() => {
    if (!openPost || openPost.type !== 'carousel') return
    const t = setInterval(() => setCarouselIdx((i) => (i + 1) % images.length), 2500)
    return () => clearInterval(t)
  }, [openPost, images.length])

  const closeModal = useCallback(() => { setOpenId(null); setCarouselIdx(0) }, [])

  return (
    <section className="blog-instagram" style={{ padding: '80px 0', background: 'var(--color-surface)' }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 max-[768px]:px-4">
        {/* Header */}
        <div className="flex items-end justify-between gap-5 flex-wrap mb-8">
          <div>
            <Eyebrow>ON INSTAGRAM</Eyebrow>
            <h3 className="font-display font-bold text-ink" style={{ fontSize: 26, letterSpacing: '-0.02em', marginTop: 14 }}>
              Show your love @ungist_ias
            </h3>
            <p className="text-muted" style={{ fontSize: 15, marginTop: 8 }}>
              Daily tips, video solutions, real aspirant stories — and the pain points we actually fix
            </p>
          </div>
          <a
            href="https://instagram.com/ungist_ias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-violet text-[14px] transition-[background] duration-200 hover:bg-lavender-2"
            style={{ background: 'var(--color-lavender)', border: '1.5px solid var(--color-lavender-2)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            Open Instagram
          </a>
        </div>

        {/* Grid */}
        <div className="blog-insta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, alignItems: 'start' }}>
          {pagePosts.map((post) => {
            const isDark = post.type === 'video'
            const isCarousel = post.type === 'carousel'
            const isText = post.type === 'text'
            const thumbBg = isCarousel ? (post.images?.[0] ?? 'var(--color-lavender)') : (post.bg ?? undefined)
            const tc = isDark ? '#fff' : 'var(--color-ink)'
            const mc = isDark ? 'rgba(255,255,255,.6)' : 'var(--color-muted)'

            return (
              <div
                key={post.id}
                className="insta-card cursor-pointer"
                onClick={() => { setOpenId(post.id); setCarouselIdx(0) }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 24,
                  background: isDark ? (post.bg ?? undefined) : isText ? '#fff' : '#fff',
                  border: isDark ? 'none' : '1px solid var(--color-border)',
                  height: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: isDark ? 'flex-end' : 'flex-start',
                }}
              >
                {/* Background media layer */}
                {isDark && (
                  <>
                    <div style={{ position: 'absolute', inset: 0, background: post.bg ?? undefined, pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '68%', background: 'linear-gradient(to top,rgba(0,0,0,.88),transparent)', pointerEvents: 'none' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center" style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.22)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,.38)' }}>
                      <svg viewBox="0 0 24 24" fill="#fff" width="18" height="18" aria-hidden><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </div>
                  </>
                )}
                {!isDark && !isText && (
                  <div style={{ height: 200, background: thumbBg, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                    {isCarousel && (
                      <div style={{ position: 'absolute', top: 10, right: 10, width: 28, height: 28, borderRadius: 7, background: 'rgba(0,0,0,.42)', backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center', color: '#fff' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="13" height="13" aria-hidden><rect x="2" y="2" width="9" height="9" rx="1" /><rect x="13" y="2" width="9" height="9" rx="1" /><rect x="2" y="13" width="9" height="9" rx="1" /><rect x="13" y="13" width="9" height="9" rx="1" /></svg>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div
                  style={{
                    position: isDark ? 'relative' : 'static',
                    zIndex: 1,
                    padding: '14px 16px 18px',
                    flex: !isDark ? 1 : undefined,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--grad)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>UN</span>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: tc }}>ungist_ias</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: tc, margin: '7px 0 8px', display: '-webkit-box', WebkitLineClamp: isText ? 4 : 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', flex: isText ? 1 : 'none' }}>
                    {post.captionShort}
                  </p>
                  <div className="flex items-center gap-1 mt-auto" style={{ fontSize: 12, color: mc }}>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel nav */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-[10px] items-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                style={{
                  width: i === page ? 20 : 8,
                  height: 8,
                  borderRadius: 999,
                  border: 'none',
                  background: i === page ? 'var(--color-violet)' : 'var(--color-border)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width .3s,background .3s',
                }}
              />
            ))}
          </div>
          <div className="flex gap-[10px]">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--color-border)', background: '#fff', cursor: page === 0 ? 'default' : 'pointer', display: 'grid', placeItems: 'center', color: 'var(--color-ink)', opacity: page === 0 ? 0.3 : 1, transition: 'border-color .2s,color .2s' }}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--color-border)', background: '#fff', cursor: page >= totalPages - 1 ? 'default' : 'pointer', display: 'grid', placeItems: 'center', color: 'var(--color-ink)', opacity: page >= totalPages - 1 ? 0.3 : 1, transition: 'border-color .2s,color .2s' }}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openPost && (
        <div className="insta-modal-backdrop" onClick={closeModal} role="dialog" aria-modal>
          <div className="insta-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div className="flex items-center justify-between" style={{ padding: '20px 24px' }}>
              <button
                onClick={closeModal}
                style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--color-border)', background: 'var(--color-surface)', cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--color-ink)' }}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15" aria-hidden><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
              <a
                href="https://instagram.com/ungist_ias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[7px] text-[14px] font-semibold text-ink border border-border transition-[border-color,color] duration-200 hover:border-violet hover:text-violet"
                style={{ padding: '8px 18px', borderRadius: 999 }}
              >
                Share
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
              </a>
            </div>

            {/* Modal content */}
            {(openPost.type === 'video' || openPost.type === 'photo') && (
              <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr' }}>
                <div style={{ background: images[0] ?? 'var(--color-lavender)', position: 'relative', overflow: 'hidden', borderRadius: '0 0 0 28px', minHeight: 340 }}>
                  {openPost.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center" style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,.22)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,.4)' }}>
                      <svg viewBox="0 0 24 24" fill="white" width="22" height="22" aria-hidden><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center gap-4" style={{ padding: '32px 36px' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--grad)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>UN</span>
                    </div>
                    <span className="text-[15px] font-semibold text-ink">ungist_ias</span>
                  </div>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-ink)', whiteSpace: 'pre-line', margin: 0 }}>{openPost.captionFull}</p>
                  <p style={{ fontSize: 13, color: 'var(--color-muted)', margin: 0 }}>{openPost.date}</p>
                </div>
              </div>
            )}

            {openPost.type === 'carousel' && (
              <div style={{ padding: '0 32px 32px' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--grad)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>UN</span>
                  </div>
                  <span className="text-[15px] font-semibold text-ink">ungist_ias</span>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-ink)', whiteSpace: 'pre-line', maxWidth: 640, margin: '0 0 10px' }}>{openPost.captionFull}</p>
                <p style={{ fontSize: 13, color: 'var(--color-muted)', margin: '0 0 18px' }}>{openPost.date}</p>
                <div style={{ height: 280, marginTop: 4, borderRadius: 18, overflow: 'hidden', background: images[carouselIdx] ?? 'var(--color-lavender)' }} />
                {images.length > 1 && (
                  <div className="flex items-center gap-[10px] mt-[14px]">
                    <button onClick={() => setCarouselIdx((i) => Math.max(0, i - 1))} disabled={carouselIdx === 0} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--color-border)', background: '#fff', cursor: carouselIdx === 0 ? 'default' : 'pointer', display: 'grid', placeItems: 'center', opacity: carouselIdx === 0 ? 0.3 : 1 }} aria-label="Previous image">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <button onClick={() => setCarouselIdx((i) => Math.min(images.length - 1, i + 1))} disabled={carouselIdx >= images.length - 1} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--color-border)', background: '#fff', cursor: carouselIdx >= images.length - 1 ? 'default' : 'pointer', display: 'grid', placeItems: 'center', opacity: carouselIdx >= images.length - 1 ? 0.3 : 1 }} aria-label="Next image">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                    <span style={{ fontSize: 13, color: 'var(--color-muted)' }}>{carouselIdx + 1} of {images.length}</span>
                  </div>
                )}
              </div>
            )}

            {openPost.type === 'text' && (
              <div style={{ padding: '0 40px 44px' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--grad)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>UN</span>
                  </div>
                  <span className="text-[15px] font-semibold text-ink">ungist_ias</span>
                </div>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--color-ink)', whiteSpace: 'pre-line', maxWidth: 560, margin: '0 0 20px' }}>{openPost.captionFull}</p>
                <p style={{ fontSize: 13, color: 'var(--color-muted)', margin: 0 }}>{openPost.date}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
