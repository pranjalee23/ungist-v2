import React from 'react'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'UNGIST — Student',
  robots: { index: false, follow: false },
}

/**
 * Authenticated student-app shell. Kept separate from the public (frontend)
 * marketing site so the two never mix. Real auth + chrome land in a later step.
 */
export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '100dvh' }}>{children}</main>
      </body>
    </html>
  )
}
