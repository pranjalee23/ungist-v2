import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow } from '@/components/ui/Eyebrow'

const QaIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-violet">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const LrIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-violet">
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
    <rect x="3" y="3" width="18" height="18" rx="3" />
  </svg>
)

const RcIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-violet">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const InfoIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] flex-none mt-[1px]">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const QA_CHAPTERS = [
  { name: 'Number System', pg: '1' },
  { name: 'Ratio and Proportion', pg: '113' },
  { name: 'Partnership', pg: '129' },
  { name: 'Mixture and Alligation', pg: '137' },
  { name: 'Problems Based on Ages', pg: '149' },
  { name: 'Average', pg: '159' },
  { name: 'Percentage', pg: '175' },
  { name: 'Profit and Loss', pg: '221' },
  { name: 'Time, Speed and Distance', pg: '235' },
  { name: 'Trains · Boats & Streams', pg: '249' },
  { name: 'Time and Work', pg: '263' },
  { name: 'Pipes and Cisterns', pg: '287' },
  { name: 'Permutation & Combination', pg: '297' },
  { name: 'Probability', pg: '345' },
  { name: 'Data Interpretation', pg: '361' },
]

const LR_CHAPTERS = [
  { name: 'Number Series', pg: '377' },
  { name: 'Missing Terms', pg: '389' },
  { name: 'Clocks', pg: '397' },
  { name: 'Calendar', pg: '407' },
  { name: 'Cubes and Dice', pg: '415' },
  { name: 'Blood Relation', pg: '429' },
  { name: 'Direction Sense', pg: '437' },
  { name: 'Coding Decoding', pg: '448' },
  { name: 'Number Ranking', pg: '454' },
  { name: 'Mathematical Operation', pg: '461' },
  { name: 'Venn Diagrams', pg: '464' },
  { name: 'Data Sufficiency', pg: '475' },
  { name: 'Syllogism', pg: '480' },
  { name: 'Puzzles', pg: '494' },
  { name: 'Inequality', pg: '510', isNew: true },
]

const RC_CHAPTERS = [
  { name: 'RC Solved PYQs 2016', pg: '519' },
  { name: 'RC Solved PYQs 2017', pg: '535' },
  { name: 'RC Solved PYQs 2018', pg: '551' },
  { name: 'RC Solved PYQs 2019', pg: '565' },
  { name: 'RC Solved PYQs 2020', pg: '582' },
  { name: 'RC Solved PYQs 2021', pg: '598' },
  { name: 'RC Solved PYQs 2022', pg: '616' },
  { name: 'RC Solved PYQs 2023', pg: '631' },
  { name: 'RC Solved PYQs 2024', pg: '649' },
]

interface TocSectionProps {
  icon: React.ReactNode
  title: string
  count: string
  chapters: { name: string; pg: string; isNew?: boolean }[]
  note?: string
}

const TocSection = ({ icon, title, count, chapters, note }: TocSectionProps) => (
  <div className="reveal bg-surface rounded-lg border border-border p-7">
    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
      <span className="w-10 h-10 rounded-[10px] bg-lavender-2 grid place-items-center flex-none">
        {icon}
      </span>
      <div>
        <div className="text-[1rem] font-bold text-ink">{title}</div>
        <div className="text-[.78rem] text-muted mt-[2px] font-medium">{count}</div>
      </div>
    </div>
    <ul className="list-none p-0 m-0 flex flex-col gap-[7px]">
      {chapters.map((ch, i) => (
        <li key={i} className="flex justify-between items-center text-[.83rem] text-secondary py-[5px] border-b border-black/5 last:border-b-0">
          <span className="flex-1 pr-2 flex items-center gap-1.5">
            {ch.name}
            {ch.isNew && (
              <span className="text-[.7rem] bg-violet/12 text-violet px-1.5 py-[1px] rounded font-semibold">New</span>
            )}
          </span>
          <span className="text-subtle text-[.77rem] font-medium flex-none">p. {ch.pg}</span>
        </li>
      ))}
    </ul>
    {note && (
      <div className="mt-4 p-3 bg-lavender rounded-[10px] text-[.8rem] text-violet font-semibold flex gap-2 items-start">
        <InfoIco />
        {note}
      </div>
    )}
  </div>
)

export const CsatBookContents = () => (
  <Section surface id="contents">
    <Container>
      <SectionHead center>
        <div className="reveal">
          <Eyebrow>Table of Contents</Eyebrow>
          <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">What&apos;s Inside the Book</h2>
          <p className="text-muted text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
            40 chapters across three sections — every topic the UPSC CSAT syllabus demands, organised for clarity and revision.
          </p>
        </div>
      </SectionHead>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        <TocSection
          icon={<QaIco />}
          title="Quantitative Aptitude"
          count="16 Chapters · Pages 1–375"
          chapters={QA_CHAPTERS}
        />
        <TocSection
          icon={<LrIco />}
          title="Logical Reasoning"
          count="15 Chapters · Pages 377–517"
          chapters={LR_CHAPTERS}
        />
        <TocSection
          icon={<RcIco />}
          title="Reading Comprehension"
          count="9 Year-wise PYQ Sets · Pages 519–668"
          chapters={RC_CHAPTERS}
          note="RC section added in full in this 4th edition — complete 9-year PYQ coverage."
        />
      </div>
    </Container>
  </Section>
)
