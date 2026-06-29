import React from 'react'
import type { Metadata } from 'next'
import '../../../styles/test-series.css'
import { TestSeries } from '@/components/test-series/TestSeries'

export const metadata: Metadata = {
  title: 'UPSC CSAT Test Series 2027 — UNGIST',
  description:
    'Formula-free, logic-first CSAT test series by Ram Mohan Pandey — realistic full-length mocks, sectional and topic-wise tests, video solutions, All-India ranking, and analytics. Valid till Prelims 2027.',
}

export default function TestSeriesPage() {
  return <TestSeries />
}
