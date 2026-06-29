import React from 'react'

type Variant = 'brand' | 'dark'

interface BadgeProps {
  children: React.ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  brand: 'bg-lavender text-violet',
  dark:  'bg-ink text-white',
}

export const Badge = ({ children, variant = 'brand', className = '' }: BadgeProps) => (
  <span className={`inline-flex items-center text-[12px] font-bold px-[13px] py-[5px] rounded-full whitespace-nowrap ${variants[variant]} ${className}`}>
    {children}
  </span>
)
