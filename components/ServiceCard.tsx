'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  name: string
  description: string
  image: string
  alt: string
  href: string
  index?: number
}

export default function ServiceCard({
  name,
  description,
  image,
  alt,
  href,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group border border-[#C9A961]/20 hover:border-[#C9A961]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 img-warm"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
      </div>
      <div className="p-6 bg-[#1A1612]">
        <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-[#FAF7F0] mb-3">
          {name}
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 leading-relaxed mb-5">
          {description}
        </p>
        <Link
          href={href}
          className="gold-link inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#C9A961] hover:text-[#B08D57] transition-colors duration-300"
        >
          Learn More <ArrowRight size={12} />
        </Link>
      </div>
    </motion.article>
  )
}
