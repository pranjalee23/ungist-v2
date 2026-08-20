import React from 'react'

type AvatarSize = 'sm' | 'md' | 'lg'
type AvatarShape = 'circle' | 'rounded'

interface AvatarProps {
  initials: string
  size?: AvatarSize
  shape?: AvatarShape
  /** Use brand gradient as background */
  gradient?: boolean
  /** Custom CSS background value (color or gradient string) */
  bg?: string
  className?: string
}

const sizeMap: Record<AvatarSize, string> = {
  sm: 'w-11 h-11 text-[0.85rem] font-semibold',
  md: 'w-14 h-14 text-[1rem] font-bold',
  lg: 'w-[84px] h-[84px] text-[1.6rem] font-bold',
}

const shapeMap: Record<AvatarShape, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-[20px]',
}

export const Avatar = ({
  initials,
  size = 'sm',
  shape = 'circle',
  gradient = false,
  bg,
  className = '',
}: AvatarProps) => (
  <span
    className={`${sizeMap[size]} ${shapeMap[shape]} text-white grid place-items-center font-display flex-none ${className}`}
    style={{ background: gradient ? 'var(--grad)' : (bg ?? '#9a2ffb') }}
  >
    {initials}
  </span>
)

export default Avatar
