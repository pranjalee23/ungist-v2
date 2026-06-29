import React from 'react'

export default function StudentDashboardPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Student</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 36px)', marginTop: 16 }}>Dashboard</h1>
        <p style={{ color: 'var(--muted)', marginTop: 12 }}>
          Progress, schedule, and practice engine land here.
        </p>
      </div>
    </section>
  )
}
