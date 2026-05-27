import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Phone, ArrowRight, ChevronDown } from 'lucide-react'
import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import SectionHeading from '@/components/SectionHeading'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { heroServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'M & Co. Hair Salon | Luxury Hair Care in Roxbury, Boston',
  description:
    'M & Co. Hair Salon — a Black-owned luxury hair salon in Roxbury, Boston. Precision cuts, protective styles, color, and natural hair care. Where beauty meets artistry.',
}

export default function Home() {
  return (
    <>
      {/* Structured data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'M & Co. Hair Salon',
            description:
              'A Black-owned luxury hair salon in Roxbury, Boston specializing in textured hair, protective styles, and precision cuts.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '53 Humboldt Ave',
              addressLocality: 'Roxbury',
              addressRegion: 'MA',
              postalCode: '02119',
              addressCountry: 'US',
            },
            url: 'https://mcohairstudio.com',
            telephone: '+1-617-427-6000',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '19:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Sunday'],
                opens: '10:00',
                closes: '17:00',
              },
            ],
            priceRange: '$$',
          }),
        }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background image with Ken Burns CSS animation */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/storefront.png"
            alt="M & Co. Hair Salon storefront at 53 Humboldt Ave, Roxbury"
            fill
            priority
            className="object-cover img-warm ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#1A1612]/60 to-[#0A0A0A]/80" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#C9A961]">
              Roxbury · Boston
            </span>
          </div>

          <h1
            className="font-[family-name:var(--font-italiana)] text-[#FAF7F0] mb-6 leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
          >
            M & Co.
          </h1>

          <p
            className="font-[family-name:var(--font-cormorant-garamond)] italic text-[#E8DCC4] mb-4"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
          >
            Where Beauty Meets Artistry
          </p>

          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A961]/70 mb-12">
            Est. 2020 · Black-Owned · Roxbury, Boston
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book" variant="primary">
              Book Appointment
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="h-8 w-px bg-[#C9A961]/60" />
          <ChevronDown size={14} className="text-[#C9A961]/60" aria-hidden="true" />
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 mx-auto max-w-7xl"
        aria-label="About preview"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <Image
              src="/homepagegirl.png"
              alt="Stylist at work in M & Co. Hair Salon, Roxbury Boston"
              fill
              className="object-cover img-warm transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-[#C9A961]/20" />
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#C9A961]/60" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#C9A961]/60" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <SectionHeading
              eyebrow="Our Story"
              title="Rooted in Roxbury. Crafted for You."
              light
            />
            <div className="space-y-4 font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 leading-relaxed">
              <p>
                M & Co. was born from a simple conviction: that every woman deserves to sit in a
                chair where her hair is truly understood. Here in Roxbury, we&apos;ve built a
                sanctuary where textured, natural, and protective styles aren&apos;t an
                afterthought — they&apos;re the art form.
              </p>
              <p>
                As a proudly Black-owned salon, we carry the tradition of care that has been passed
                through generations. Every appointment is an intentional experience — from the
                consultation to the final reveal — crafted with the expertise your crown deserves.
              </p>
              <p>
                We are rooted in community, driven by craft, and honored to serve the women of
                Boston.
              </p>
            </div>
            <Button href="/about" variant="ghost" showArrow>
              Our Full Story
            </Button>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 md:py-32 bg-[#1A1612]" aria-label="Featured services">
        <div className="px-6 md:px-10 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading eyebrow="What We Offer" title="Signature Services" light />
            <Button href="/services" variant="ghost" showArrow className="flex-shrink-0">
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroServices.map((service, i) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
                image={service.image}
                alt={service.alt}
                href={service.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL QUOTE ── */}
      <section
        className="py-32 px-6 md:px-10 bg-[#0A0A0A] text-center relative overflow-hidden"
        aria-label="Brand quote"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-px bg-gradient-to-r from-transparent to-[#C9A961]/30" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-px bg-gradient-to-l from-transparent to-[#C9A961]/30" />

        <div className="max-w-3xl mx-auto">
          <div
            className="font-[family-name:var(--font-italiana)] text-[#C9A961]/20 text-8xl leading-none mb-4 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <blockquote
            className="font-[family-name:var(--font-cormorant-garamond)] italic text-[#E8DCC4]"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            Your hair is your crown.
            <br />
            We&apos;re here to make it shine.
          </blockquote>
          <div className="mt-8">
            <GoldDivider align="center" width="partial" />
          </div>
          <cite className="block mt-6 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961] not-italic">
            M & Co. Hair Salon · Roxbury, Boston
          </cite>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-24 md:py-32 bg-[#1A1612]" aria-label="Gallery preview">
        <div className="px-6 md:px-10 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading eyebrow="Our Work" title="Moments of Craft" light />
            <Button href="/gallery" variant="ghost" showArrow className="flex-shrink-0">
              Full Gallery
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
                alt: 'Knotless braids protective style',
                cls: 'row-span-2',
              },
              {
                src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
                alt: 'Salon precision styling session',
                cls: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
                alt: 'Hair color and highlights treatment',
                cls: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
                alt: 'Natural hair curl definition',
                cls: 'row-span-2',
              },
              {
                src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80',
                alt: 'Stylist crafting a style',
                cls: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=600&q=80',
                alt: 'Elegant updo styling',
                cls: '',
              },
            ].map((img, i) => (
              <div key={i} className={`relative overflow-hidden ${img.cls} group`}>
                <div className="aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover img-warm transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-[#0A0A0A]"
        aria-label="Client testimonials"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionHeading
              eyebrow="Client Love"
              title="What Our Guests Say"
              align="center"
              light
            />
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-24 md:py-32 bg-[#1A1612]" aria-label="Location and contact">
        <div className="px-6 md:px-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div className="space-y-8">
              <SectionHeading eyebrow="Find Us" title="Visit the Salon" light />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={18}
                    className="text-[#C9A961] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-1">
                      Address
                    </p>
                    <address className="not-italic font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 leading-relaxed">
                      53 Humboldt Ave
                      <br />
                      Roxbury, MA 02119
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock
                    size={18}
                    className="text-[#C9A961] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-1">
                      Hours
                    </p>
                    {/* TODO: Replace with real salon hours */}
                    <div className="font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 space-y-1">
                      <p>Tuesday – Saturday: 9:00 AM – 7:00 PM</p>
                      <p>Sunday: 10:00 AM – 5:00 PM</p>
                      <p>Monday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    size={18}
                    className="text-[#C9A961] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A961] mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+16174276000"
                      className="gold-link font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 hover:text-[#E8DCC4] transition-colors duration-300"
                    >
                      (617) 427-6000
                    </a>
                  </div>
                </div>
              </div>

              <Button
                href="https://www.google.com/maps/dir/?api=1&destination=53+Humboldt+Ave+Roxbury+MA+02119"
                variant="primary"
              >
                Get Directions
              </Button>
            </div>

            {/* Map */}
            <div className="relative aspect-[4/3] overflow-hidden border border-[#C9A961]/20">
              <iframe
                title="M & Co. Hair Salon location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4!2d-71.0836!3d42.3237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37f9a9e100001%3A0x1!2s53+Humboldt+Ave%2C+Roxbury%2C+MA+02119!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(40%) contrast(110%)',
                  display: 'block',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA BANNER ── */}
      <section
        className="py-20 px-6 md:px-10 bg-[#C9A961] text-center"
        aria-label="Book appointment"
      >
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A]/60 mb-4">
            Ready to Begin?
          </p>
          <h2
            className="font-[family-name:var(--font-playfair-display)] text-[#0A0A0A] mb-6"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Book Your Appointment Today
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#0A0A0A]/70 mb-8 leading-relaxed">
            Consultations are always available. We&apos;ll respond within 24 hours to confirm your
            appointment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0A0A0A] text-[#C9A961] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:bg-[#1A1612] transition-colors duration-300"
            >
              Request Appointment <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+16174276000"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors duration-300"
            >
              <Phone size={14} aria-hidden="true" />
              Or call (617) 427-6000
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
