'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

type Filter = 'all' | 'cuts' | 'color' | 'braids' | 'natural' | 'special'

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: Exclude<Filter, 'all'>
  width: number
  height: number
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/braidspic1.png',
    alt: 'Braided protective style at M & Co. Hair Salon',
    category: 'braids',
    width: 229,
    height: 287,
  },
  {
    id: 2,
    src: '/braidspic2.png',
    alt: 'Detailed braid work by M & Co. stylists',
    category: 'braids',
    width: 229,
    height: 383,
  },
  {
    id: 3,
    src: '/homepagepic.png',
    alt: 'Natural hair styling at M & Co. Hair Salon',
    category: 'natural',
    width: 229,
    height: 230,
  },
  {
    id: 4,
    src: '/storefront.png',
    alt: 'M & Co. Hair Salon at 53 Humboldt Ave, Roxbury',
    category: 'special',
    width: 229,
    height: 164,
  },
]

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'cuts', label: 'Cuts' },
  { value: 'color', label: 'Color' },
  { value: 'braids', label: 'Braids' },
  { value: 'natural', label: 'Natural' },
  { value: 'special', label: 'Special Occasion' },
]

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)

  const filtered =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div>
      {/* Filter bar */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-12"
        role="group"
        aria-label="Gallery filter"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            aria-pressed={activeFilter === f.value}
            className={`px-5 py-2 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase border transition-all duration-300 ${
              activeFilter === f.value
                ? 'bg-[#C9A961] text-[#0A0A0A] border-[#C9A961]'
                : 'border-[#C9A961]/30 text-[#E8DCC4]/60 hover:border-[#C9A961] hover:text-[#E8DCC4]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              onClick={() => setLightboxItem(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 img-warm"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.alt}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 text-[#E8DCC4]/60 hover:text-[#C9A961] transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <X size={28} aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                width={lightboxItem.width}
                height={lightboxItem.height}
                className="w-full h-auto max-h-[85vh] object-contain img-warm"
                priority
              />
              <p className="text-center font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/50 mt-4 tracking-wider">
                {lightboxItem.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
