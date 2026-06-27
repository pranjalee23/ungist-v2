import React from 'react'

interface Mentor {
  initials: string
  avatarBg: string
  years: string
  name: string
  role: string
  roleColor: string
  desc: string
  tags: string[]
  list: string[]
}

const MENTORS: Mentor[] = [
  {
    initials: 'RP',
    avatarBg: '#9a2ffb',
    years: '15 years',
    name: 'Ram Mohan Pandey',
    role: 'Mathematics & CSAT Faculty',
    roleColor: '#9a2ffb',
    desc: 'MSc Mathematics from IIT Roorkee, with 15 years of teaching experience helping aspirants master quantitative aptitude and CSAT.',
    tags: ['Mathematics', 'CSAT', 'Quantitative Aptitude'],
    list: ['MSc Mathematics, IIT Roorkee', '15 Years Teaching Experience'],
  },
  {
    initials: 'PB',
    avatarBg: '#f97316',
    years: '12 years',
    name: 'Prosenjit Basak',
    role: 'Faculty',
    roleColor: '#ea580c',
    desc: '12 years of teaching experience guiding UPSC aspirants through structured, exam-focused preparation.',
    tags: ['UPSC Mentorship'],
    list: ['12 Years Teaching Experience'],
  },
]

export const Faculty = () => (
  <section className="section" id="faculty">
    <div className="container">
      <div className="section-head center reveal">
        <span className="eyebrow">Our Mentors</span>
        <h2>Learn From the Best</h2>
        <p>UNGIST faculty comprises former IAS officers, subject matter experts, and educators with decades of UPSC mentorship experience.</p>
      </div>
      <div className="mentor-grid">
        {MENTORS.map((m) => (
          <article className="mentor reveal" key={m.name}>
            <div className="mentor-top">
              <span className="mentor-avatar" style={{ background: m.avatarBg }}>
                {m.initials}
              </span>
              <span className="mentor-years">{m.years}</span>
            </div>
            <div className="mentor-body">
              <div className="mentor-name">{m.name}</div>
              <div className="mentor-role" style={{ color: m.roleColor }}>
                {m.role}
              </div>
              <p className="mentor-desc">{m.desc}</p>
              <div className="mentor-tags">
                {m.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <ul className="mentor-list">
                {m.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Faculty
