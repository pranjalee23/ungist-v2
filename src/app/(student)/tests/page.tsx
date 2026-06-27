import React from 'react'

export default function StudentTestsPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Student</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 36px)', marginTop: 16 }}>Tests</h1>
        <p style={{ color: 'var(--muted)', marginTop: 12 }}>
          The test-taking flow (Questions / Tests → TestAttempts) lands here.
        </p>
      </div>
    </section>
  )
}
