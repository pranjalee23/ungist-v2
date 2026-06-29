'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'
import type { Tab } from './ProductHeader'

const DATES = ['22 June 2026', '15 July 2026', '5 August 2026', '1 September 2026', '1 October 2026', '1 November 2026']

const ROWS = {
  comp: DATES.map((date) => ({ date, tests: '26 Tests (10 FLT + 6 Sectional + 10 Topic)', price: '₹2,999' })),
  mock: DATES.map((date, i) => ({ date, tests: i < 4 ? '10 Full-Length Mocks' : '5 Full-Length Mocks', price: '₹999' })),
} as const

const BatchTable = ({ tab }: { tab: Tab }) => (
  <div className="w-full overflow-x-auto rounded-lg border border-border">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-surface">
          {['Batch', 'Start Date', 'Tests', 'Price', 'Actions'].map((h) => (
            <th key={h} className="px-[15px] py-[11px] text-left text-[0.71rem] font-bold tracking-[0.06em] uppercase text-subtle border-b border-border">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ROWS[tab].map((r, i) => (
          <tr key={r.date} className="hover:[&>td]:bg-lavender [&>td]:transition-colors [&:last-child>td]:border-b-0">
            <td className="px-[15px] py-3 text-[0.84rem] border-b border-border align-middle">
              <div className="font-semibold text-ink">Batch {i + 1}</div>
            </td>
            <td className="px-[15px] py-3 text-[0.84rem] border-b border-border align-middle">{r.date}</td>
            <td className="px-[15px] py-3 text-[0.84rem] border-b border-border align-middle">
              <div className="text-[0.75rem] text-muted mt-0.5">{r.tests}</div>
            </td>
            <td className="px-[15px] py-3 text-[0.84rem] border-b border-border align-middle">
              <div className="font-display font-bold text-[0.97rem] text-violet">{r.price}</div>
            </td>
            <td className="px-[15px] py-3 text-[0.84rem] border-b border-border align-middle">
              <div className="flex gap-[7px] flex-wrap max-[768px]:flex-col">
                <Button as="a" href="https://course.ungist.com" variant="primary" className="!px-[14px] !py-[7px] !text-[0.8rem]">Buy Online</Button>
                <Button as="a" href="#" variant="ghost" className="!px-[14px] !py-[7px] !text-[0.8rem]">Brochure</Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export const Batches = ({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) => (
  <Section id="batches">
    <Container>
      <div className="rv mb-8">
        <Eyebrow>Batches</Eyebrow>
        <Heading as="h2" className="mt-2">Choose your batch and enrol.</Heading>
        <Text variant="sm" muted className="mt-2 max-w-[500px]">Both plans run on independent batch schedules. Later batches have fewer mocks as Prelims approaches.</Text>
      </div>

      <div className="rv flex gap-[9px] mb-[22px] flex-wrap">
        {([['comp', 'Comprehensive — ₹2,999'], ['mock', 'Mock Only — ₹999']] as const).map(([t, label]) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-4 py-[7px] rounded-full border-[1.5px] font-sans text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 ${tab === t ? 'bg-violet text-white border-violet' : 'bg-white text-muted border-border'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <BatchTable tab={tab} />
    </Container>
  </Section>
)

export default Batches
