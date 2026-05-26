'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/lib/testimonials'

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <div className="relative max-w-3xl mx-auto text-center px-12">
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-6" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="#C9A961" className="text-[#C9A961]" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={current}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-[family-name:var(--font-cormorant-garamond)] italic text-xl md:text-2xl text-[#E8DCC4] leading-relaxed mb-8"
        >
          &ldquo;{t.quote}&rdquo;
        </motion.blockquote>
      </AnimatePresence>

      {/* Attribution */}
      <AnimatePresence mode="wait">
        <motion.footer
          key={`footer-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A961]">
            {t.name}
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[10px] text-[#E8DCC4]/40 tracking-widest uppercase">
            {t.service}
          </p>
        </motion.footer>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="p-2 border border-[#C9A961]/30 hover:border-[#C9A961] text-[#C9A961]/60 hover:text-[#C9A961] transition-all duration-300"
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-px transition-all duration-300 ${
                i === current ? 'bg-[#C9A961] w-8' : 'bg-[#C9A961]/30 w-4 hover:bg-[#C9A961]/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="p-2 border border-[#C9A961]/30 hover:border-[#C9A961] text-[#C9A961]/60 hover:text-[#C9A961] transition-all duration-300"
        >
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
