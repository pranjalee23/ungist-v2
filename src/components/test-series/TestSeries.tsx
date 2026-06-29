'use client'

import React, { useState } from 'react'
import { ProductHeader, type Tab } from './ProductHeader'
import { Included } from './Included'
import { WhyDifferent } from './WhyDifferent'
import { Analytics } from './Analytics'
import { HowItWorks } from './HowItWorks'
import { Batches } from './Batches'
import { ForWhom } from './ForWhom'
import { TsFaq } from './TsFaq'
import { CrossSell } from './CrossSell'

export const TestSeries = () => {
  const [tab, setTab] = useState<Tab>('comp')

  return (
    <>
      <ProductHeader tab={tab} setTab={setTab} />
      <Included />
      <WhyDifferent />
      <Analytics />
      <HowItWorks />
      <Batches tab={tab} setTab={setTab} />
      <ForWhom />
      <TsFaq />
      <CrossSell />
    </>
  )
}

export default TestSeries
