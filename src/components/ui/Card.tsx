import React from 'react'

type Variant = 'default' | 'elevated'

interface CardProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  variant?: Variant
  id?: string
}

const variants: Record<Variant, string> = {
  default: 'border border-border',
  elevated: 'border border-border transition-[box-shadow,border-color] duration-300 hover:shadow-md hover:border-white',
}

export const Card = ({ children, className = '', as: Tag = 'div', variant = 'default', id }: CardProps) => (
  <Tag
    id={id}
    className={`bg-white rounded-xl p-6 ${variants[variant]} ${className}`}
  >
    {children}
  </Tag>
)
