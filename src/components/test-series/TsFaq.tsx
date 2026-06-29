'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

const FAQS = [
  { q: 'Are these tests online or offline?', a: 'Full-length mocks are available both online and offline. Sectional and topic tests are online only. For offline tests, visit our Old Rajender Nagar, New Delhi centre where the schedule is fixed.' },
  { q: 'Can I attempt the test at my own time?', a: 'Yes, online tests are time-flexible. However, flexible-timing attempts are not counted for All-India Ranking. To appear in the AIR, attempt on the scheduled date or sit for it offline at our centre.' },
  { q: 'Can I download the mock test paper?', a: 'Yes, you can download the full-length mock paper from the portal. If you attempt it offline by downloading, upload your responses in the OMR format on the portal to get your score and analytics.' },
  { q: 'Are video solutions available for all tests?', a: 'Video solutions are available for full-length mock tests only. Sectional and topic-wise tests include PDF explanations. Video solutions are primarily in English with some Hindi.' },
  { q: 'How long is the test series valid?', a: 'Both plans are valid until UPSC Prelims 2027. All tests, solutions, and analytics are accessible throughout that period.' },
  { q: 'I am in the Foundation Program — do I need to buy this separately?', a: 'No. The Comprehensive Test Series is included in the CSAT Foundation Program. You do not need to purchase it separately. Call us at +91‑9643822021 if you are unsure.' },
  { q: 'What is the medium of the test paper?', a: 'All test papers are in English only, consistent with the UPSC CSAT exam.' },
]

export const TsFaq = () => {
  const [open, setOpen] = useState<number | null>(0)
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <Section id="ts-faq">
      <Container>
        <div className="rv mb-8">
          <Eyebrow>FAQs</Eyebrow>
          <Heading as="h2" className="mt-2">Common questions.</Heading>
        </div>

        <div className="rv max-w-[660px]">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  className="w-full bg-transparent border-none py-[15px] text-left font-sans text-[0.9rem] font-semibold text-ink cursor-pointer flex items-center justify-between gap-[13px]"
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span className={`w-[23px] h-[23px] rounded-full grid place-items-center flex-none text-[0.95rem] transition-[background,color,transform] duration-300 ${isOpen ? 'bg-violet text-white rotate-45 border-violet' : 'bg-surface text-muted border border-border'}`}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-[400ms] [transition-timing-function:var(--ease-spring)]"
                  style={{ maxHeight: isOpen ? '200px' : '0' }}
                >
                  <Text variant="xs" muted className="pb-[15px]">{item.a}</Text>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default TsFaq
