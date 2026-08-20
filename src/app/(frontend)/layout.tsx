import React from 'react'
import type { Metadata } from 'next'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RevealOnScroll } from '@/components/home-page/RevealOnScroll'
import { getSiteSettings } from '@/lib/getSiteSettings'

export const metadata: Metadata = {
  title: 'UNGIST — Crack UPSC with Confidence',
  description:
    'UNGIST — Online UPSC preparation across India and offline classroom coaching in Old Rajender Nagar, New Delhi. Structured learning, personal mentorship, CSAT expertise.',
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <html lang="en">
      <body>
        <Header settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
        <RevealOnScroll />
      </body>
    </html>
  )
}
