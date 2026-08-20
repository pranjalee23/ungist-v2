'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-success flex-none">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const TRUST = [
  'Personalized UPSC preparation roadmap',
  'Course recommendation based on your profile',
  'Expert guidance on optional subject selection',
  'Doubt clearing on syllabus and strategy',
  'Scholarship eligibility check',
]

const PROGRAMS = [
  'UPSC Foundation Program',
  'CSAT Mastery Program',
  'Mains Mentorship',
  'All-India Test Series',
  'Not sure yet',
]

const inputCls = 'w-full font-sans text-[0.96rem] text-ink bg-surface border border-border rounded-xs px-[14px] py-[13px] transition-[border-color,box-shadow,background] duration-200 appearance-none outline-none focus:border-violet focus:bg-white focus:shadow-[0_0_0_4px_rgba(154,47,251,0.12)]'

export const Counselling = () => {
  const [submitted, setSubmitted] = useState(false)
  const [program, setProgram] = useState('')
  const [programOpen, setProgramOpen] = useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <Section id="counselling">
      <Container>
        <div className="grid grid-cols-2 gap-12 items-start max-lg:grid-cols-1">
          {/* Left: copy */}
          <div className="reveal">
            <Eyebrow className="mb-4">Get in touch</Eyebrow>
            <Heading as="h2" className="text-[clamp(1.9rem,3.2vw,2.6rem)]">Start Your IAS Journey Today</Heading>
            <Text variant="body" muted className="mt-4 text-[1.02rem] max-w-[480px] leading-[1.6]">
              Book a free 30-minute counselling session with our UPSC experts. Get a personalized preparation roadmap, course recommendation, and your questions answered.
            </Text>

            <ul className="grid gap-[13px] mt-[26px] p-0">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-[11px] font-medium text-[0.94rem] text-secondary">
                  <CheckIco />
                  {t}
                </li>
              ))}
            </ul>

            <div className="grid gap-3 mt-[26px]">
              <a href="tel:+919643822021" className="flex items-center gap-[14px] border border-border rounded-card px-[17px] py-[15px] transition-[border-color,box-shadow] duration-300 hover:shadow-sm hover:border-white">
                <span className="w-[42px] h-[42px] rounded-[11px] bg-lavender text-violet grid place-items-center flex-none [&_svg]:w-[19px] [&_svg]:h-[19px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <div className="text-[0.8rem] text-muted">Call us directly</div>
                  <div className="font-bold text-[0.96rem] text-ink mt-0.5">+91-9643822021</div>
                </div>
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center gap-[14px] border border-border rounded-card px-[17px] py-[15px] transition-[border-color,box-shadow] duration-300 hover:shadow-sm hover:border-white">
                <span className="w-[42px] h-[42px] rounded-[11px] bg-[rgba(34,197,94,0.12)] text-success-fg grid place-items-center flex-none [&_svg]:w-[19px] [&_svg]:h-[19px]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                  </svg>
                </span>
                <div>
                  <div className="text-[0.8rem] text-muted">WhatsApp us</div>
                  <div className="font-bold text-[0.96rem] text-ink mt-0.5">Chat with an advisor</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-[10px] mt-[22px]">
              {[
                { label: '100% Privacy Protected', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>) },
                { label: 'Expert Counselling', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" /></svg>) },
                { label: '12,000+ Students Guided', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
              ].map(({ label, icon }) => (
                <span key={label} className="inline-flex items-center gap-[7px] text-[0.8rem] font-medium text-secondary bg-surface border border-border px-[13px] py-2 rounded-full [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:text-violet [&_svg]:flex-none">
                  {icon}
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="reveal bg-white border border-border rounded-xl p-[34px] transition-[box-shadow,border-color] duration-300 hover:shadow-md hover:border-white">
            {!submitted ? (
              <form id="leadForm" onSubmit={(e) => { e.preventDefault(); if (program) setSubmitted(true) }}>
                <div className="font-display font-bold text-[1.32rem]">Book Free Counselling Session</div>
                <Text variant="xs" muted className="mt-1.5 mb-6">Fill in your details and we&apos;ll get back to you within 24 hours</Text>

                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
                  { id: 'phone', label: 'Mobile Number', type: 'tel', placeholder: '10-digit mobile number', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: false },
                ].map((f) => (
                  <div key={f.id} className="mb-4">
                    <label htmlFor={f.id} className="block text-[0.82rem] font-semibold text-secondary mb-[7px]">
                      {f.label} {f.required && <span className="text-violet">*</span>}
                    </label>
                    <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required} className={inputCls} />
                  </div>
                ))}

                <div className="mb-4" ref={dropdownRef}>
                  <label className="block text-[0.82rem] font-semibold text-secondary mb-[7px]">
                    Interested In <span className="text-violet">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setProgramOpen((p) => !p)}
                      className={`${inputCls} flex items-center justify-between text-left w-full ${programOpen ? 'border-violet bg-white shadow-[0_0_0_4px_rgba(154,47,251,0.12)]' : ''}`}
                    >
                      <span className={program ? 'text-ink' : 'text-muted'}>{program || 'Select a program'}</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 flex-none text-muted transition-transform duration-200 ${programOpen ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <input type="hidden" name="program" value={program} />

                    <div
                      className={`absolute left-0 right-0 top-full mt-1.5 bg-white border border-border rounded-xs shadow-card z-[20] overflow-hidden transition-[opacity,transform] duration-200 ${programOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
                    >
                      {PROGRAMS.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => { setProgram(p); setProgramOpen(false) }}
                          className={`w-full text-left px-[14px] py-[11px] text-[0.93rem] font-medium transition-[background,color] duration-150 hover:bg-lavender hover:text-violet border-none bg-transparent cursor-pointer ${program === p ? 'bg-lavender text-violet font-semibold' : 'text-ink'}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[0.82rem] font-semibold text-secondary mb-[7px]">Preferred Mode</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Online', 'Offline (Delhi)'].map((m) => (
                      <label key={m} className="flex items-center gap-[10px] border-[1.5px] border-border rounded-xs px-[14px] py-[13px] cursor-pointer text-[0.93rem] font-medium text-secondary bg-white transition-[border-color,background] duration-200 has-[:checked]:border-violet has-[:checked]:bg-lavender has-[:checked]:text-violet has-[:checked]:font-semibold">
                        <input type="radio" name="mode" value={m} className="w-[18px] h-[18px] m-0 flex-none accent-violet cursor-pointer" />
                        {m}
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="lg" block className="mt-2" type="submit">Submit</Button>
                <Text variant="2xs" muted className="text-center mt-3.5">By submitting, you agree to our privacy policy. No spam, ever.</Text>
              </form>
            ) : (
              <div className="text-center py-5">
                <div className="w-[62px] h-[62px] rounded-full bg-[rgba(34,197,94,0.12)] text-success-fg grid place-items-center mx-auto mb-5 [&_svg]:w-8 [&_svg]:h-8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <Heading as="h3" className="text-[1.32rem]">Request received</Heading>
                <Text variant="sm" muted className="mt-2 text-[0.96rem]">A UNGIST counselor will call you within 24 hours. Keep your phone handy!</Text>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Counselling
