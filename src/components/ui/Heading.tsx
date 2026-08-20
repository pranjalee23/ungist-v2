import React from 'react'

type Level = 'h1' | 'h2' | 'h3' | 'h4'
type Size = 'display' | 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps {
  children: React.ReactNode
  as?: Level
  size?: Size
  className?: string
}

const sizes: Record<Size, string> = {
  display: 'text-[clamp(2.6rem,7.5vw,52px)] font-bold tracking-[-0.03em] leading-[1.08]',
  h1:      'text-[44px] font-bold tracking-[-0.025em] leading-tight',
  h2:      'text-[36px] font-bold tracking-[-0.025em]',
  h3:      'text-[1.18rem] font-bold tracking-[-0.01em]',
  h4:      'text-[14px] font-bold',
}

export const Heading = ({ children, as: Tag = 'h2', size, className = '' }: HeadingProps) => {
  const resolvedSize: Size = size ?? (Tag as Size)
  return (
    <Tag className={`${sizes[resolvedSize]} ${className}`}>
      {children}
    </Tag>
  )
}
