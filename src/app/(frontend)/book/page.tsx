import React from 'react'
import type { Metadata } from 'next'
import { CsatBookHeader } from '@/components/csat-book/CsatBookHeader'
import { CsatBookContents } from '@/components/csat-book/CsatBookContents'
import { CsatBookPreview } from '@/components/csat-book/CsatBookPreview'
import { CsatWhyDifferent } from '@/components/csat-book/CsatWhyDifferent'
import { CsatForWhom } from '@/components/csat-book/CsatForWhom'
import { CsatAuthor } from '@/components/csat-book/CsatAuthor'
import { CsatCrossSell } from '@/components/csat-book/CsatCrossSell'
import { CsatFaq } from '@/components/csat-book/CsatFaq'

export const metadata: Metadata = {
  title: 'UNGIST CSAT Book: Theory & Practice (4th Ed.) — Buy on Amazon',
  description:
    'UNGIST CSAT Book by Ram Mohan Pandey. 668 pages, 4th Edition. Topic-wise segregation with 15 years of solved PYQs. Formula-free, logic-first approach. ₹444 on Amazon.',
}

export default function CsatBookPage() {
  return (
    <>
      <CsatBookHeader />
      <CsatBookContents />
      <CsatBookPreview />
      <CsatWhyDifferent />
      <CsatForWhom />
      <CsatAuthor />
      <CsatCrossSell />
      <CsatFaq />
    </>
  )
}
