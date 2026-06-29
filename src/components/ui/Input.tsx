import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  className?: string
}

export const Input = ({ icon, className = '', ...props }: InputProps) => (
  <div className={`flex items-center gap-[9px] bg-surface border border-border rounded-xs px-[14px] py-[11px] [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-muted [&_svg]:flex-none ${className}`}>
    {icon}
    <input
      className="border-none bg-transparent outline-none font-sans text-[14px] text-ink w-full placeholder:text-subtle"
      {...props}
    />
  </div>
)
