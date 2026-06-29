import React from 'react'
import { Hero } from '@/components/home-page/Hero'
import { Metrics } from '@/components/home-page/Metrics'
import { Pricing } from '@/components/home-page/Pricing'
import { Products } from '@/components/home-page/Products'
import { Faculty } from '@/components/home-page/Faculty'
import { WhyUngist } from '@/components/home-page/WhyUngist'
import { Testimonials } from '@/components/home-page/Testimonials'
import { Campus } from '@/components/home-page/Campus'
import { Resources } from '@/components/home-page/Resources'
import { Faq } from '@/components/home-page/Faq'
import { Counselling } from '@/components/home-page/Counselling'

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
