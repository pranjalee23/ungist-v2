'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

const FAQS = [
  { q: 'What is CSAT in UPSC?', a: 'CSAT (Civil Services Aptitude Test) is Paper-II of the UPSC Prelims exam, testing comprehension, reasoning, and basic numeracy on a qualifying basis.' },
  { q: 'Is CSAT compulsory for UPSC?', a: 'Yes, every Prelims candidate must attempt CSAT, though it is only qualifying in nature and does not count toward the merit ranking.' },
  { q: 'Does CSAT have negative marking?', a: 'Yes, each wrong answer carries a penalty of one-third of the marks allotted to that question, same as GS Paper I.' },
  { q: 'Is calculator allowed in UPSC CSAT?', a: 'No, calculators and any other electronic aids are not permitted in the CSAT exam hall.' },
  { q: 'What is the syllabus of CSAT?', a: 'CSAT covers comprehension, interpersonal and communication skills, logical reasoning, analytical ability, decision-making, general mental ability, and basic numeracy up to Class X level.' },
  { q: 'Is CSAT qualifying or counted in merit?', a: 'CSAT is purely qualifying. You need 33% marks to clear it, and the score does not affect your final Prelims merit ranking.' },
  { q: 'Can arts students clear CSAT?', a: 'Yes. With consistent practice on basic maths and reasoning fundamentals, arts background students clear CSAT comfortably every year.' },
  { q: 'How much time should be given to CSAT preparation?', a: 'Most aspirants need 2-3 months of consistent practice, dedicating a few hours weekly alongside GS preparation, ramping up closer to Prelims.' },
  { q: 'Can I prepare UPSC CSAT only through PYQs?', a: 'PYQs are essential but not sufficient alone. Pair them with concept building and timed mock tests to handle new question patterns confidently.' },
  { q: 'I am weak in Maths, how should I prepare CSAT?', a: 'Start with basic arithmetic concepts, build speed with daily practice sets, and focus on shortcuts and elimination techniques rather than lengthy calculations.' },
]

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0)
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <Section surface id="faq">
      <Container>
        <div className="reveal max-w-[680px] mb-[54px]">
          <Eyebrow>FAQs</Eyebrow>
          <Heading as="h2">Everything You Wanted to Know About CSAT</Heading>
        </div>
        <div className="max-w-[840px] mx-auto flex flex-col gap-3.5">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={`border rounded-md overflow-hidden transition-[border-color,box-shadow] duration-200 hover:shadow-sm hover:border-white ${isOpen ? 'border-violet-soft bg-white' : 'border-border bg-white'}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 bg-none border-none cursor-pointer text-left px-[22px] py-5 font-text text-[1.02rem] font-semibold text-ink"
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span
                    className={`flex-none text-[1.3rem] font-normal text-violet leading-none transition-transform duration-[250ms] [transition-timing-function:var(--ease)] ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300 [transition-timing-function:var(--ease)]"
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                >
                  <Text variant="sm" muted className="px-[22px] pb-5 text-[0.97rem] leading-[1.6]">{item.a}</Text>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default Faq
