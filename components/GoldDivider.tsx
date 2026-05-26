'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface GoldDividerProps {
  className?: string
  width?: 'full' | 'partial'
  align?: 'left' | 'center'
}

export default function GoldDivider({
  className = '',
  width = 'partial',
  align = 'left',
}: GoldDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${align === 'center' ? 'flex justify-center' : ''} ${className}`}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: width === 'full' ? '100%' : '80px' } : { width: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-px bg-[#C9A961]"
      />
    </div>
  )
}
