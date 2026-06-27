'use client'

import React, { useState } from 'react'

const CheckIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export const Counselling = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="section bg-surface" id="counselling">
      <div className="container lead-grid">
        <div className="lead-copy reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Start Your IAS Journey Today</h2>
          <p>Book a free 30-minute counselling session with our UPSC experts. Get a personalized preparation roadmap, course recommendation, and your questions answered.</p>
          <ul className="lead-trust">
            {TRUST.map((t) => (
              <li key={t}>
                <CheckIco />
                {t}
              </li>
            ))}
          </ul>

          <div className="counsel-contact">
            <a href="tel:+919643822021" className="counsel-contact-card">
              <span className="cico violet">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <div className="clbl">Call us directly</div>
                <div className="cval">+91-9643822021</div>
              </div>
            </a>
            <a href="https://wa.me/919876543210" className="counsel-contact-card">
              <span className="cico green">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                </svg>
              </span>
              <div>
                <div className="clbl">WhatsApp us</div>
                <div className="cval">Chat with an advisor</div>
              </div>
            </a>
          </div>

          <div className="counsel-badges">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              100% Privacy Protected
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
              </svg>
              Expert Counselling
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              12,000+ Students Guided
            </span>
          </div>
        </div>

        <div className="form-card reveal">
          <form id="leadForm" style={submitted ? { display: 'none' } : undefined} onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
            <div className="fh">Book Free Counselling Session</div>
            <div className="fsub">Fill in your details and we&apos;ll get back to you within 24 hours</div>
            <div className="field">
              <label htmlFor="name">
                Full Name <span className="req">*</span>
              </label>
              <input id="name" name="name" type="text" placeholder="Your full name" required />
            </div>
            <div className="field">
              <label htmlFor="phone">
                Mobile Number <span className="req">*</span>
              </label>
              <input id="phone" name="phone" type="tel" placeholder="10-digit mobile number" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="field">
              <label htmlFor="program">
                Interested In <span className="req">*</span>
              </label>
              <select id="program" name="program" required defaultValue="">
                <option value="" disabled>
                  Select a program
                </option>
                {PROGRAMS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Preferred Mode</label>
              <div className="mode-toggle">
                <label className="mode-option">
                  <input type="radio" name="mode" value="Online" />
                  Online
                </label>
                <label className="mode-option">
                  <input type="radio" name="mode" value="Offline" />
                  Offline (Delhi)
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Submit
            </button>
            <div className="form-note">By submitting, you agree to our privacy policy. No spam, ever.</div>
          </form>
          <div className={`form-success${submitted ? ' show' : ''}`}>
            <div className="ok-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>Request received</h3>
            <p>A UNGIST counselor will call you within 24 hours. Keep your phone handy!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counselling
