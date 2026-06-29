'use client'

import React from 'react'

type Variant = 'primary' | 'ghost' | 'soft'
type Size = 'md' | 'lg'

interface ButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, 'type'> {
  variant?: Variant
  size?: Size
  block?: boolean
  as?: 'a' | 'button'
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const base =
  'inline-flex items-center justify-center gap-[9px] font-text font-semibold text-[0.97rem] tracking-tight px-6 py-3.5 rounded-[12px] border border-transparent cursor-pointer relative isolate overflow-hidden transition-[box-shadow,border-color,color] duration-[400ms] [transition-timing-function:cubic-bezier(0.2,0.7,0.2,1)] no-underline [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:relative [&_svg]:z-[1]'

const variants: Record<Variant, string> = {
  primary: 'bg-violet text-white group',
  ghost: 'bg-white text-ink border-[1.5px] border-border hover:text-violet hover:border-violet hover:shadow-[0_2px_12px_rgba(20,12,40,0.1)]',
  soft: 'bg-lavender-2 text-violet transition-[background] hover:bg-[#e6d2fb]',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3.5 text-[0.97rem]',
  lg: 'px-7 py-4 text-[1.02rem]',
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  block,
  as: Tag = 'a',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const classes = [
    base,
    variants[variant],
    sizes[size],
    block ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...(props as React.HTMLAttributes<HTMLElement>)}>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="absolute inset-0 -z-[1] bg-[--grad] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"
        />
      )}
      {children}
    </Tag>
  )
}
