import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'

export const CrossSell = () => (
  <Section surface id="cross-sell">
    <Container>
      <div className="reveal bg-surface rounded-lg px-6 py-5 flex items-center justify-between gap-5 flex-wrap">
        <Text variant="sm" muted>
          <strong className="text-ink">Want more than just tests?</strong> The CSAT Foundation Course includes live
          classes, structured notes, doubt support — and this test series — all in one.
        </Text>
        <Button variant="ghost" as="a" href="/#pricing" className="flex-none">
          Explore Foundation Course
        </Button>
      </div>
    </Container>
  </Section>
)

export default CrossSell
