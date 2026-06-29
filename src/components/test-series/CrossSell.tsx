import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const CrossSell = () => (
  <section className="py-[clamp(44px,6.5vw,72px)] bg-surface">
    <Container>
      <div className="rv bg-surface rounded-[24px] px-6 py-5 flex items-center justify-between gap-5 flex-wrap">
        <p className="text-[0.88rem] text-muted">
          <strong className="text-ink">Want more than just tests?</strong> The CSAT Foundation Course includes live
          classes, structured notes, doubt support — and this test series — all in one.
        </p>
        <Button variant="ghost" as="a" href="/#pricing" className="flex-none">
          Explore Foundation Course
        </Button>
      </div>
    </Container>
  </section>
)

export default CrossSell
