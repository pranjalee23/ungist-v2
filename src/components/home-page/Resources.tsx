import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHead } from '@/components/ui/SectionHead'
import { Badge } from '@/components/ui/Badge'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { TextLink } from '@/components/ui/TextLink'

const riColors: Record<string, { bg: string; text: string }> = {
  violet: { bg: '#F7F0FE', text: '#9a2ffb' },
  blue:   { bg: '#E0F2FE', text: '#0284C7' },
  green:  { bg: 'rgba(34,197,94,0.12)', text: '#16A34A' },
  orange: { bg: '#FFEDD5', text: '#EA580C' },
  pink:   { bg: '#FCE7F3', text: '#DB2777' },
}

interface Resource {
  color: string
  stat: string
  title: string
  desc: string
  icon: React.ReactNode
}

const RESOURCES: Resource[] = [
  { color: 'violet', title: 'Current Affairs', stat: '365+ Days', desc: 'Daily curated UPSC-relevant news with analysis and probable questions.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" /></svg>) },
  { color: 'blue', title: 'Previous Year Papers', stat: '40+ Years', desc: 'Solved PYQs from 1979 to 2024 with detailed explanations and trends.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>) },
  { color: 'green', title: 'Study Materials', stat: '1200+ Notes', desc: 'Comprehensive notes for all GS papers, Ethics, Essay, and optionals.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>) },
  { color: 'orange', title: 'Strategy Guides', stat: '50+ Guides', desc: 'Topper-verified preparation strategies for Prelims, Mains, and Interview.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>) },
  { color: 'pink', title: 'Answer Writing', stat: '500+ Answers', desc: 'Model answers, templates, and structured frameworks for GS Mains.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>) },
  { color: 'blue', title: 'Blog & Analysis', stat: '200+ Articles', desc: 'Deep-dive articles on policy, economy, environment, and governance.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>) },
]

const POSTS = [
  { tag: 'Strategy', read: '8 min read', title: 'How to Approach the UPSC Prelims 2025 — A Complete Strategy', date: 'June 10, 2026' },
  { tag: 'Current Affairs', read: '6 min read', title: "India's New Education Policy: UPSC Perspective & Analysis", date: 'June 8, 2026' },
  { tag: 'Ethics', read: '10 min read', title: 'Ethics Paper 4 — How to Score 140+ with Structured Answers', date: 'June 5, 2026' },
]

export const Resources = () => (
  <Section id="resources">
    <Container>
      <SectionHead center className="reveal">
        <Eyebrow>Free Resources</Eyebrow>
        <Heading as="h2" className="mt-[18px]">Everything You Need to Prepare</Heading>
        <Text variant="body" muted className="text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
          Access a rich library of free UPSC resources — curated, updated, and organised for serious aspirants.
        </Text>
      </SectionHead>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {RESOURCES.map((r) => {
          const col = riColors[r.color] ?? riColors.violet
          return (
            <article
              key={r.title}
              className="reveal bg-white border border-border rounded-lg p-6 flex gap-4 transition-[box-shadow,border-color] duration-300 hover:shadow-sm hover:border-white"
            >
              <span
                className="w-[46px] h-[46px] rounded-[13px] grid place-items-center flex-none [&_svg]:w-[21px] [&_svg]:h-[21px]"
                style={{ background: col.bg, color: col.text }}
              >
                {r.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <Heading as="h3" className="text-[15px]">{r.title}</Heading>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-none"
                    style={{ background: col.bg, color: col.text }}
                  >
                    {r.stat}
                  </span>
                </div>
                <Text variant="xs" muted className="mt-2 leading-[1.5]">{r.desc}</Text>
              </div>
            </article>
          )
        })}
      </div>

      {/* Blog preview */}
      <div className="reveal flex items-center justify-between gap-4 mt-14 mb-6">
        <Heading as="h3" className="text-[20px]">Latest from UNGIST Blog</Heading>
        <TextLink href="/blog" className="whitespace-nowrap">View all posts</TextLink>
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="reveal bg-white border border-border rounded-lg p-6 transition-[box-shadow,border-color] duration-300 hover:shadow-sm hover:border-white"
          >
            <div className="flex items-center gap-2.5">
              <Badge>{p.tag}</Badge>
              <Text variant="xs" muted>{p.read}</Text>
            </div>
            <Heading as="h4" className="text-[16px] mt-3.5 leading-[1.4]">{p.title}</Heading>
            <Text variant="xs" muted className="mt-3">{p.date}</Text>
          </article>
        ))}
      </div>
      <div className="hidden max-sm:flex justify-center mt-6">
        <TextLink href="/blog">View all posts</TextLink>
      </div>
    </Container>
  </Section>
)

export default Resources
