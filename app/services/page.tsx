import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import GoldDivider from '@/components/GoldDivider'
import Button from '@/components/Button'
import { serviceCategories } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Explore M & Co. Hair Salon\'s full service menu — cuts, color, protective styles, natural hair care, and treatments. Located in Roxbury, Boston.',
}

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        aria-label="Services page header"
      >
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Stylist providing a luxury hair service"
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 px-6 md:px-10 pb-16 max-w-7xl mx-auto w-full">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A961] mb-3">
            What We Offer
          </p>
          <h1
            className="font-[family-name:var(--font-playfair-display)] text-[#FAF7F0]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Services & Pricing
          </h1>
        </div>
      </section>

      {/* ── SERVICE CATEGORIES ── */}
      <section className="py-24 px-6 md:px-10" aria-label="Service menu">
        <div className="max-w-5xl mx-auto">
          {/* Intro note */}
          <p className="font-[family-name:var(--font-cormorant-garamond)] italic text-xl text-[#E8DCC4]/60 text-center mb-20 max-w-xl mx-auto leading-relaxed">
            Every service begins with a consultation. We tailor our work to your hair&apos;s unique
            needs.
          </p>

          <div className="space-y-20">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id}>
                {/* Category heading */}
                <div className="mb-8">
                  <SectionHeading
                    eyebrow="Services"
                    title={category.name}
                    light
                  />
                </div>

                {/* Service rows */}
                <div className="space-y-0">
                  {category.services.map((service, i) => (
                    <div key={service.name}>
                      <div className="py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 group">
                        <div className="flex-1 max-w-xl">
                          <h3 className="font-[family-name:var(--font-playfair-display)] text-lg text-[#FAF7F0] mb-2 group-hover:text-[#C9A961] transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/55 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-6 flex-shrink-0">
                          <span className="font-[family-name:var(--font-cormorant-garamond)] text-base text-[#C9A961] whitespace-nowrap">
                            {service.price}
                          </span>
                          <Link
                            href="/book"
                            className="gold-link inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#E8DCC4]/40 hover:text-[#C9A961] transition-colors duration-300 whitespace-nowrap"
                          >
                            Book <ArrowRight size={10} />
                          </Link>
                        </div>
                      </div>
                      {i < category.services.length - 1 && (
                        <div className="h-px bg-[#C9A961]/10" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom gold divider between categories */}
                <div className="mt-8">
                  <GoldDivider width="full" />
                </div>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div className="mt-16 p-8 border border-[#C9A961]/20 bg-[#1A1612]">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 leading-relaxed text-center">
              Prices listed are starting points and may vary based on hair length, density, and
              complexity. Consultations are available for all services — especially color correction
              and protective styles. We&apos;ll always be upfront about pricing before we begin.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button href="/book" variant="primary">
              Request an Appointment
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
