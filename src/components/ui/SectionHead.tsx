import React from 'react'

interface SectionHeadProps {
  children: React.ReactNode
  className?: string
  center?: boolean
}

export const SectionHead = ({ children, className = '', center }: SectionHeadProps) => (
  <div
    className={`max-w-[680px] mb-[54px] ${center ? 'mx-auto text-center' : ''} ${className}`}
  >
    {children}
  </div>
)
