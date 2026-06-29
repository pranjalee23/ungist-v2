import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export const Container = ({ children, className = '', as: Tag = 'div' }: ContainerProps) => (
  <Tag className={`w-full max-w-[1280px] mx-auto px-6 max-[768px]:px-4 ${className}`}>
    {children}
  </Tag>
)
