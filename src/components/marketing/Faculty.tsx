import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHead } from '@/components/ui/SectionHead'

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
        <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Learn From the Best</h2>
        <p className="text-muted text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
          UNGIST faculty comprises former IAS officers, subject matter experts, and educators with decades of UPSC mentorship experience.
        </p>
      </SectionHead>

      <div className="grid grid-cols-2 gap-6 max-w-[980px] mx-auto max-md:grid-cols-1">
        {MENTORS.map((m) => (
          <article
            key={m.name}
            className="reveal bg-white border border-border rounded-[24px] overflow-hidden transition-[box-shadow,border-color] duration-300 hover:shadow-[0_4px_20px_rgba(20,12,40,0.1)] hover:border-[#E2D3F6]"
          >
            <div className="bg-surface px-6 py-6 flex items-start justify-between gap-2.5">
              <span
                className="w-[84px] h-[84px] rounded-[20px] grid place-items-center font-display font-bold text-[1.6rem] text-white flex-none"
                style={{ background: m.avatarBg }}
              >
                {m.initials}
              </span>
              <span className="text-[13px] font-semibold text-muted bg-white border border-border px-[13px] py-1.5 rounded-full whitespace-nowrap">
                {m.years}
              </span>
            </div>

            <div className="px-6 py-6">
              <div className="text-[20px] font-bold tracking-[-0.01em]">{m.name}</div>
              <div className="font-semibold text-[14px] mt-[5px]" style={{ color: m.roleColor }}>{m.role}</div>
              <p className="text-muted text-[14px] mt-[14px] leading-[1.6]">{m.desc}</p>

              <div className="flex flex-wrap gap-2 mt-[18px]">
                {m.tags.map((t) => (
                  <span key={t} className="text-[13px] font-medium text-[#4a5057] bg-surface px-[13px] py-1.5 rounded-full whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="list-none p-0 mt-[18px] border-t border-border pt-4 grid gap-[9px]">
                {m.list.map((l) => (
                  <li key={l} className="flex items-center gap-2.5 text-[14px] text-[#4a5057] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-violet before:flex-none">
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
