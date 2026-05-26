import type { Metadata } from 'next'
import Image from 'next/image'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse M & Co. Hair Salon\'s portfolio — cuts, color, braids, natural styles, and special occasion looks. Based in Roxbury, Boston.',
}

export default function GalleryPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        aria-label="Gallery page header"
      >
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
          alt="Showcasing beautiful braided hairstyles at M & Co."
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 px-6 md:px-10 pb-16 max-w-7xl mx-auto w-full">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A961] mb-3">
            Our Work
          </p>
          <h1
            className="font-[family-name:var(--font-playfair-display)] text-[#FAF7F0]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            The Gallery
          </h1>
        </div>
      </section>

      {/* ── GALLERY CONTENT ── */}
      <section className="py-20 px-6 md:px-10" aria-label="Gallery grid">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-cormorant-garamond)] italic text-center text-lg text-[#E8DCC4]/50 mb-16 max-w-lg mx-auto leading-relaxed">
            Each image is a moment — a conversation between stylist and client, craft and
            confidence.
          </p>
          <GalleryGrid />
        </div>
      </section>

      {/* ── IG CTA ── */}
      <section
        className="py-20 px-6 md:px-10 bg-[#1A1612] text-center"
        aria-label="Follow on Instagram"
      >
        <div className="max-w-lg mx-auto">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-4">
            Follow Along
          </p>
          <h2
            className="font-[family-name:var(--font-playfair-display)] text-[#FAF7F0] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            See Our Latest Work
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/60 mb-8 leading-relaxed">
            Follow us on Instagram for daily inspiration, behind-the-scenes looks, and real client
            transformations.
          </p>
          {/* TODO: Replace with real Instagram handle */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#C9A961] text-[#C9A961] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-all duration-300"
          >
            @mcohairstudio
          </a>
        </div>
      </section>
    </>
  )
}
