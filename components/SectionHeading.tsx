'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GoldDivider from './GoldDivider'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const textAlign = align === 'center' ? 'text-center items-center' : 'items-start'
  const textColor = light ? 'text-[#FAF7F0]' : 'text-[#0A0A0A]'
  const subtitleColor = light ? 'text-[#E8DCC4]/70' : 'text-[#8B6F47]'
  const eyebrowColor = light ? 'text-[#C9A961]' : 'text-[#B08D57]'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${textAlign} ${className}`}
    >
      {eyebrow && (
        <span className={`text-xs font-[family-name:var(--font-inter)] tracking-[0.3em] uppercase ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-playfair-display)] text-3xl md:text-4xl lg:text-5xl leading-tight ${textColor}`}
        style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
      >
        {title}
      </h2>
      <GoldDivider align={align} />
      {subtitle && (
        <p className={`font-[family-name:var(--font-inter)] text-base leading-relaxed max-w-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
