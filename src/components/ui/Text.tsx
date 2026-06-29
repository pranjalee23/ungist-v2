import React from 'react'

type Variant = 'lead' | 'body' | 'sm' | 'xs' | '2xs'

interface TextProps {
  children: React.ReactNode
  variant?: Variant
  muted?: boolean
  className?: string
  as?: React.ElementType
}

const variants: Record<Variant, string> = {
  lead: 'text-[18px] leading-[1.6]',
  body: 'text-[16px] leading-[1.55]',
  sm:   'text-[14px] leading-[1.55]',
  xs:   'text-[13px] leading-[1.55]',
  '2xs': 'text-[12px] leading-[1.5]',
}

export const Text = ({ children, variant = 'body', muted, className = '', as: Tag = 'p' }: TextProps) => (
  <Tag className={`${variants[variant]} ${muted ? 'text-muted' : ''} ${className}`}>
    {children}
  </Tag>
)
