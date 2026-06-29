import React from 'react'

type Size = 'xs' | 'sm' | 'md'

interface TextLinkProps {
  href?: string
  children: React.ReactNode
  className?: string
  arrow?: boolean
  onClick?: (e: React.MouseEvent) => void
  as?: 'a' | 'button'
  size?: Size
  target?: string
  rel?: string
  icon?: React.ReactNode
}

const ArrowSvg = ({ size }: { size: Size }) => {
  const cls =
    size === 'xs'
      ? 'w-[11px] h-[11px]'
      : size === 'md'
        ? 'w-[17px] h-[17px]'
        : 'w-[14px] h-[14px]'
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${cls} flex-none transition-transform duration-[250ms] group-hover:translate-x-[3px]`}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const sizeText: Record<Size, string> = {
  xs: 'text-[13px]',
  sm: 'text-[14px]',
  md: 'text-[15px]',
}

export const TextLink = ({
  href,
  children,
  className = '',
  arrow = true,
  onClick,
  as,
  size = 'sm',
  target,
  rel,
  icon,
}: TextLinkProps) => {
  const Tag = as ?? (href ? 'a' : 'button')
  const anchorProps = Tag === 'a' ? { href, target, rel } : {}
  const buttonProps = Tag === 'button' ? { type: 'button' as const } : {}

  return (
    <Tag
      {...anchorProps}
      {...buttonProps}
      onClick={onClick}
      className={`group inline-flex items-center gap-1.5 font-semibold text-violet no-underline cursor-pointer bg-transparent border-none p-0 ${sizeText[size]} ${className}`}
    >
      {icon && <span className="flex-none">{icon}</span>}
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-violet transition-[width] duration-300 ease-out group-hover:w-full"
        />
      </span>
      {arrow && <ArrowSvg size={size} />}
    </Tag>
  )
}

export default TextLink
