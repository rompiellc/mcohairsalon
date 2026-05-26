import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  showArrow?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  disabled = false,
  showArrow = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-[#C9A961] text-[#0A0A0A] hover:bg-[#B08D57] hover:shadow-lg hover:-translate-y-0.5 btn-shimmer',
    secondary:
      'border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] hover:-translate-y-0.5',
    ghost:
      'text-[#C9A961] hover:text-[#B08D57] underline-offset-4 hover:underline px-0 py-0',
  }

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight size={14} />}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {showArrow && <ArrowRight size={14} />}
    </button>
  )
}
