import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHead } from '@/components/ui/SectionHead'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Avatar } from '@/components/ui/Avatar'

interface Mentor {
  initials: string
  avatarBg: string
  years: string
  name: string
  role: string
  roleColor: string
  desc: string
  tags: string[]
  list: string[]
}

const MENTORS: Mentor[] = [
  {
    initials: 'RP',
    avatarBg: '#9a2ffb',
    years: '15 years',
    name: 'Ram Mohan Pandey',
    role: 'Mathematics & CSAT Faculty',
    roleColor: '#9a2ffb',
    desc: 'MSc Mathematics from IIT Roorkee, with 15 years of teaching experience helping aspirants master quantitative aptitude and CSAT.',
    tags: ['Mathematics', 'CSAT', 'Quantitative Aptitude'],
    list: ['MSc Mathematics, IIT Roorkee', '15 Years Teaching Experience'],
  },
  {
    initials: 'PB',
    avatarBg: '#f97316',
    years: '12 years',
    name: 'Prosenjit Basak',
    role: 'Faculty',
    roleColor: '#ea580c',
    desc: '12 years of teaching experience guiding UPSC aspirants through structured, exam-focused preparation.',
    tags: ['UPSC Mentorship'],
    list: ['12 Years Teaching Experience'],
  },
]

export const Faculty = () => (
  <Section id="faculty">
    <Container>
      <SectionHead center className="reveal">
        <Eyebrow>Our Mentors</Eyebrow>
        <Heading as="h2" className="mt-[18px]">Learn From the Best</Heading>
        <Text variant="body" muted className="text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
          UNGIST faculty comprises former IAS officers, subject matter experts, and educators with decades of UPSC mentorship experience.
        </Text>
      </SectionHead>

      <div className="grid grid-cols-2 gap-6 max-w-[980px] mx-auto max-md:grid-cols-1">
        {MENTORS.map((m) => (
          <article
            key={m.name}
            className="reveal bg-white border border-border rounded-lg overflow-hidden transition-[box-shadow,border-color] duration-300 hover:shadow-sm hover:border-white"
          >
            <div className="bg-surface px-6 py-6 flex items-start justify-between gap-2.5">
              <Avatar initials={m.initials} size="lg" shape="rounded" bg={m.avatarBg} />
              <span className="text-[13px] font-semibold text-muted bg-white border border-border px-[13px] py-1.5 rounded-full whitespace-nowrap">
                {m.years}
              </span>
            </div>

            <div className="px-6 py-6">
              <Heading as="h3" className="text-[20px]">{m.name}</Heading>
              <div className="font-semibold text-[14px] mt-[5px]" style={{ color: m.roleColor }}>{m.role}</div>
              <Text variant="sm" muted className="mt-[14px] leading-[1.6]">{m.desc}</Text>

              <div className="flex flex-wrap gap-2 mt-[18px]">
                {m.tags.map((t) => (
                  <span key={t} className="text-[13px] font-medium text-secondary bg-surface px-[13px] py-1.5 rounded-full whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="list-none p-0 mt-[18px] border-t border-border pt-4 grid gap-[9px]">
                {m.list.map((l) => (
                  <li key={l} className="flex items-center gap-2.5 text-[14px] text-secondary before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-violet before:flex-none">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </Section>
)

export default Faculty
