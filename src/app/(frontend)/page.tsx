import React from 'react'
import '../../styles/home.css'
import { Hero } from '@/components/marketing/Hero'
import { Metrics } from '@/components/marketing/Metrics'
import { Pricing } from '@/components/marketing/Pricing'
import { Products } from '@/components/marketing/Products'
import { Faculty } from '@/components/marketing/Faculty'
import { WhyUngist } from '@/components/marketing/WhyUngist'
import { Testimonials } from '@/components/marketing/Testimonials'
import { Campus } from '@/components/marketing/Campus'
import { Resources } from '@/components/marketing/Resources'
import { Faq } from '@/components/marketing/Faq'
import { Counselling } from '@/components/marketing/Counselling'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Pricing />
      <Products />
      <Faculty />
      <WhyUngist />
      <Testimonials />
      <Campus />
      <Resources />
      <Faq />
      <Counselling />
    </>
  )
}
