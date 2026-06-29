'use client'

import React, { useState } from 'react'

const FAQS = [
  {
    q: 'Are these tests online or offline?',
    a: 'Full-length mocks are available both online and offline. Sectional and topic tests are online only. For offline tests, visit our Old Rajender Nagar, New Delhi centre where the schedule is fixed.',
  },
  {
    q: 'Can I attempt the test at my own time?',
    a: 'Yes, online tests are time-flexible. However, flexible-timing attempts are not counted for All-India Ranking. To appear in the AIR, attempt on the scheduled date or sit for it offline at our centre.',
  },
  {
    q: 'Can I download the mock test paper?',
    a: 'Yes, you can download the full-length mock paper from the portal. If you attempt it offline by downloading, upload your responses in the OMR format on the portal to get your score and analytics.',
  },
  {
    q: 'Are video solutions available for all tests?',
    a: 'Video solutions are available for full-length mock tests only. Sectional and topic-wise tests include PDF explanations. Video solutions are primarily in English with some Hindi.',
  },
  {
    q: 'How long is the test series valid?',
    a: 'Both plans are valid until UPSC Prelims 2027. All tests, solutions, and analytics are accessible throughout that period.',
  },
  {
    q: 'I am in the Foundation Program — do I need to buy this separately?',
    a: 'No. The Comprehensive Test Series is included in the CSAT Foundation Program. You do not need to purchase it separately. Call us at +91‑9643822021 if you are unsure.',
  },
  {
    q: 'What is the medium of the test paper?',
    a: 'All test papers are in English only, consistent with the UPSC CSAT exam.',
  },
]

export const TsFaq = () => {
  const [open, setOpen] = useState<Set<number>>(new Set([0]))
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <section className="sec">
      <div className="w">
        <div className="sh rv">
          <span className="ey">FAQs</span>
          <h2>Common questions.</h2>
        </div>
        <div className="faqw rv">
          {FAQS.map((item, i) => (
            <div className={`fqi${open.has(i) ? ' op' : ''}`} key={item.q}>
              <button className="fqq" onClick={() => toggle(i)}>
                {item.q}
                <span className="fqico">+</span>
              </button>
              <div className="fqa">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TsFaq
