import React from 'react'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export const Eyebrow = ({ children, className = '' }: EyebrowProps) => (
  <span
    className={`inline-flex items-center gap-[9px] text-[14px] font-bold tracking-[0.1em] uppercase text-violet ${className}`}
  >
    {children}
  </span>
)
