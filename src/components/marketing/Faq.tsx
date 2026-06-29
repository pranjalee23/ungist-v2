'use client'

import React, { useState } from 'react'

const FAQS = [
  {
    q: 'What is CSAT in UPSC?',
    a: 'CSAT (Civil Services Aptitude Test) is Paper-II of the UPSC Prelims exam, testing comprehension, reasoning, and basic numeracy on a qualifying basis.',
  },
  {
    q: 'Is CSAT compulsory for UPSC?',
    a: 'Yes, every Prelims candidate must attempt CSAT, though it is only qualifying in nature and does not count toward the merit ranking.',
  },
  {
    q: 'Does CSAT have negative marking?',
    a: 'Yes, each wrong answer carries a penalty of one-third of the marks allotted to that question, same as GS Paper I.',
  },
  {
    q: 'Is calculator allowed in UPSC CSAT?',
    a: 'No, calculators and any other electronic aids are not permitted in the CSAT exam hall.',
  },
  {
    q: 'What is the syllabus of CSAT?',
    a: 'CSAT covers comprehension, interpersonal and communication skills, logical reasoning, analytical ability, decision-making, general mental ability, and basic numeracy up to Class X level.',
  },
  {
    q: 'Is CSAT qualifying or counted in merit?',
    a: 'CSAT is purely qualifying. You need 33% marks to clear it, and the score does not affect your final Prelims merit ranking.',
  },
  {
    q: 'Can arts students clear CSAT?',
    a: 'Yes. With consistent practice on basic maths and reasoning fundamentals, arts background students clear CSAT comfortably every year.',
  },
  {
    q: 'How much time should be given to CSAT preparation?',
    a: 'Most aspirants need 2-3 months of consistent practice, dedicating a few hours weekly alongside GS preparation, ramping up closer to Prelims.',
  },
  {
    q: 'Can I prepare UPSC CSAT only through PYQs?',
    a: 'PYQs are essential but not sufficient alone. Pair them with concept building and timed mock tests to handle new question patterns confidently.',
  },
  {
    q: 'I am weak in Maths, how should I prepare CSAT?',
    a: 'Start with basic arithmetic concepts, build speed with daily practice sets, and focus on shortcuts and elimination techniques rather than lengthy calculations.',
  },
]

export const Faq = () => {
  const [open, setOpen] = useState<Set<number>>(new Set([0]))

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">FAQs</span>
          <h2>Everything You Wanted to Know About CSAT</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className={`faq-item${open.has(i) ? ' open' : ''}`} key={item.q}>
              <button type="button" className="faq-q" onClick={() => toggle(i)}>
                {item.q}
                <span className="faq-ico">+</span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
