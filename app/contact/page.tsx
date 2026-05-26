import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon, TikTokIcon } from '@/components/SocialIcons'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with M & Co. Hair Salon in Roxbury, Boston. Find our address, hours, phone number, and contact form.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        aria-label="Contact page header"
      >
        <Image
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1920&q=80"
          alt="The exterior and street view near M & Co. salon in Roxbury"
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 px-6 md:px-10 pb-16 max-w-7xl mx-auto w-full">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A961] mb-3">
            Get in Touch
          </p>
          <h1
            className="font-[family-name:var(--font-playfair-display)] text-[#FAF7F0]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── INFO COLUMNS ── */}
      <section className="py-20 px-6 md:px-10 bg-[#1A1612]" aria-label="Contact information">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={18} className="text-[#C9A961]" aria-hidden="true" />
              <h2 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961]">
                Address
              </h2>
            </div>
            <address className="not-italic font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 leading-relaxed">
              53 Humboldt Ave
              <br />
              Roxbury, MA 02119
            </address>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=53+Humboldt+Ave+Roxbury+MA+02119"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-link font-[family-name:var(--font-inter)] text-xs text-[#C9A961] hover:text-[#B08D57] transition-colors duration-300 w-fit"
            >
              Get Directions →
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Clock size={18} className="text-[#C9A961]" aria-hidden="true" />
              <h2 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961]">
                Hours
              </h2>
            </div>
            {/* TODO: Replace with real salon hours */}
            <div className="font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 space-y-2">
              <div className="flex justify-between gap-8">
                <span>Tuesday – Saturday</span>
                <span className="flex-shrink-0">9 AM – 7 PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Sunday</span>
                <span className="flex-shrink-0">10 AM – 5 PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Monday</span>
                <span className="flex-shrink-0 text-[#E8DCC4]/30">Closed</span>
              </div>
            </div>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Phone size={18} className="text-[#C9A961]" aria-hidden="true" />
              <h2 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961]">
                Contact
              </h2>
            </div>
            <div className="space-y-3">
              {/* TODO: Replace with real phone number */}
              <a
                href="tel:+1XXXXXXXXXX"
                className="gold-link flex items-center gap-3 font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 hover:text-[#E8DCC4] transition-colors duration-300"
              >
                <Phone size={14} aria-hidden="true" />
                (617) XXX-XXXX
              </a>
              {/* TODO: Replace with real email */}
              <a
                href="mailto:hello@mcohairstudio.com"
                className="gold-link flex items-center gap-3 font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 hover:text-[#E8DCC4] transition-colors duration-300"
              >
                <Mail size={14} aria-hidden="true" />
                hello@mcohairstudio.com
              </a>
            </div>

            <div className="mt-4">
              <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A961] mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-5">
                {/* TODO: Replace href with real social profile URLs */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#E8DCC4]/50 hover:text-[#C9A961] transition-colors duration-300"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#E8DCC4]/50 hover:text-[#C9A961] transition-colors duration-300"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-[#E8DCC4]/50 hover:text-[#C9A961] transition-colors duration-300"
                >
                  <TikTokIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="h-80 md:h-[440px] relative" aria-label="Salon location map">
        <iframe
          title="M & Co. Hair Salon map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4!2d-71.0836!3d42.3237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37f9a9e100001%3A0x1!2s53+Humboldt+Ave%2C+Roxbury%2C+MA+02119!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'grayscale(50%) contrast(110%)',
            display: 'block',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="py-24 px-6 md:px-10" aria-label="Contact form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="Send a Message"
              title="We'd Love to Hear from You"
              light
              subtitle="Whether it's a question about a service, a special request, or just a hello — we'll get back to you promptly."
            />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
