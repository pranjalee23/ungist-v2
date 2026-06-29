import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  surface?: boolean
  as?: React.ElementType
}

export const Section = ({ children, className = '', id, surface, as: Tag = 'section' }: SectionProps) => (
  <Tag
    id={id}
    className={`relative py-[clamp(76px,10vw,140px)] ${surface ? 'bg-surface' : ''} ${className}`}
  >
    {children}
  </Tag>
)
