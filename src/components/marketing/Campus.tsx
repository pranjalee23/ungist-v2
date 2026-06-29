import React from 'react'

const BookIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)
const UsersIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const ChatIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)
const WifiIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
)
const PinIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const ClockIco = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const FEATURES = [
  { icon: <BookIco />, title: 'Premium Classrooms', desc: 'AC-equipped smart classrooms with modern AV systems' },
  { icon: <UsersIco />, title: 'Small Batch Sizes', desc: 'Max 40 students per batch for personalized attention' },
  { icon: <ChatIco />, title: 'Daily Doubt Sessions', desc: 'Dedicated faculty available for 1-on-1 doubt resolution' },
  { icon: <BookIco />, title: 'UPSC Library', desc: 'Extensive collection of books, magazines, and reference materials' },
  { icon: <WifiIco />, title: 'Digital Integration', desc: 'Hybrid access — attend online if you miss a class' },
  { icon: <UsersIco />, title: 'Peer Learning Groups', desc: 'Structured study groups with topper-led discussions' },
]

const INFO = [
  { lbl: 'Address', val: '57/12, First Floor, Near Mithaiwala, Bada Bazar Road, Old Rajender Nagar, New Delhi 110060' },
  { lbl: 'Nearest Metro', val: 'Karol Bagh Metro Station (Blue Line) — 8 min walk' },
  { lbl: 'Timing', val: 'Monday to Saturday, 9:00 AM – 7:00 PM' },
  { lbl: 'Contact', val: '+91-9643822021 | ungistsolutions@gmail.com' },
]

export const Campus = () => (
  <section className="section" id="about">
    <div className="container campus">
      <div className="reveal">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <span className="eyebrow">Our Institute</span>
          <h2>Where Toppers Are Made</h2>
        </div>
        <div className="campus-location">
          <PinIco />
          Old Rajender Nagar, New Delhi — 110060
        </div>
        <p className="campus-desc">
          Our Old Rajender Nagar centre is located at the heart of Delhi&apos;s coaching hub. Designed
          for focused UPSC preparation, the campus provides a distraction-free, academically
          enriching environment.
        </p>

        <div className="campus-feat-grid">
          {FEATURES.map((f) => (
            <div className="campus-feat-card" key={f.title}>
              <span className="ci">{f.icon}</span>
              <div>
                <div className="ct">{f.title}</div>
                <div className="cd">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="campus-cta">
          <span className="hours">
            <ClockIco />
            or visit us · Mon–Sat, 9 AM – 7 PM
          </span>
        </div>
      </div>

      <div className="campus-card reveal">
        <div className="campus-card-top" style={{ paddingTop: 36 }}>
          <span className="campus-pulse" />
          <span className="campus-pulse" />
          <span className="campus-card-icon">
            <PinIco />
          </span>
          <div className="cname">UNGIST</div>
          <div className="cloc">Old Rajender Nagar, New Delhi</div>
        </div>
        <div className="campus-card-info">
          {INFO.map((r) => (
            <div className="row" key={r.lbl}>
              <div className="lbl">{r.lbl}</div>
              <div className="val">{r.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Campus
