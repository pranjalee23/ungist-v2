'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow } from '@/components/ui/Eyebrow'

const FAQS = [
  {
    q: 'Where can I buy the UNGIST CSAT Book?',
    a: 'The book is available on Amazon India — the easiest option for pan-India delivery. You can also find it at select UPSC book stores in Old Rajender Nagar, New Delhi. If you\'ve enrolled in the Foundation Program\'s Plus or Pro plan, the book is included and will be delivered to you directly.',
  },
  {
    q: 'What is the difference between the 3rd and 4th edition?',
    a: 'The 4th edition adds: full Reading Comprehension coverage (PYQs 2016–2024), a new Inequality chapter in Reasoning, a strengthened Number System section with new questions, and the complete solved CSAT 2025 question paper.',
  },
  {
    q: 'Is this book sufficient for CSAT preparation?',
    a: 'For most aspirants, especially those from non-maths backgrounds, this book combined with timed mock tests covers everything needed to clear the 33% qualifying threshold comfortably. If you want live doubt resolution and All-India benchmarking, the Foundation Program builds on top of the book.',
  },
  {
    q: 'Does the book cover Data Interpretation?',
    a: 'Yes. Data Interpretation is covered as the final chapter in the Quantitative Aptitude section, with topic-wise PYQs from 2011 to 2025 integrated throughout.',
  },
  {
    q: 'Is the book available as a PDF or digital version?',
    a: 'No. The UNGIST CSAT Book is available only as a printed paperback. UNGIST does not authorise or distribute any PDF or digital version — any such copy available online is unofficial and unauthorised.',
  },
  {
    q: 'I am from an Arts background and have always feared Maths. Will this book help?',
    a: 'Yes — that is exactly who this book was written for. The entire approach is formula-free and logic-first, meaning every concept is explained the way it would be explained in a classroom, not the way it appears in an engineering textbook. Many of UNGIST\'s students who struggled with basic arithmetic have gone on to clear CSAT using this material.',
  },
  {
    q: 'How long does delivery take on Amazon?',
    a: 'Amazon delivery timelines vary by location and Prime membership. Most metro areas see delivery within 2–4 days. Check availability at your pincode on the Amazon product page.',
  },
]

export const CsatFaq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <Section surface id="faq">
      <Container>
        <SectionHead>
          <div className="reveal">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Questions About the Book</h2>
          </div>
        </SectionHead>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div key={i} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center gap-4 w-full bg-transparent border-none cursor-pointer py-5 font-text text-[.97rem] font-semibold text-ink text-left"
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <span className={`w-7 h-7 rounded-[8px] grid place-items-center text-[1.1rem] flex-none transition-[background,color] duration-200 ${isOpen ? 'bg-lavender-2 text-violet' : 'bg-surface border border-border text-muted'}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-[18px]">
                    <p className="text-muted text-[.9rem] leading-[1.7]">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
