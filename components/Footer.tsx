import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/book', label: 'Book Appointment' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services#cuts-styling', label: 'Cuts & Styling' },
  { href: '/services#color', label: 'Color' },
  { href: '/services#protective', label: 'Protective Styles' },
  { href: '/services#natural', label: 'Natural Hair Care' },
  { href: '/services#treatments', label: 'Treatments' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A961]/20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4" aria-label="M & Co. Hair Salon — Home">
              <Image
                src="/logo.png"
                alt="M & Co. Hair Salon"
                width={80}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-[family-name:var(--font-cormorant-garamond)] italic text-[#E8DCC4]/60 text-sm mb-6 leading-relaxed">
              Where Beauty Meets Artistry
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#E8DCC4]/50 text-xs leading-relaxed">
              A Black-owned luxury hair salon rooted in Roxbury, Boston. Celebrating textured hair
              in all its glory.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="gold-link font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-6">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="gold-link font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit us */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A961] mb-6">
              Visit Us
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A961] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 leading-relaxed">
                  53 Humboldt Ave<br />
                  Roxbury, MA 02119
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9A961] flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+16174276000"
                  className="gold-link font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors duration-300"
                >
                  (617) 427-6000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#C9A961] flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hello@mcohairstudio.com"
                  className="gold-link font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors duration-300"
                >
                  {/* TODO: Replace with real email */}
                  hello@mcohairstudio.com
                </a>
              </li>
              <li>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 leading-relaxed">
                  {/* TODO: Replace with real hours */}
                  Tue–Sat: 9am – 7pm<br />
                  Sun: 10am – 5pm<br />
                  Mon: Closed
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#C9A961]/20 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[#E8DCC4]/40">
            © 2026 M & Co. Hair Salon. All rights reserved. · Roxbury, Boston
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/mandcompanysalon2015/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#E8DCC4]/40 hover:text-[#C9A961] transition-colors duration-300"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#E8DCC4]/40 hover:text-[#C9A961] transition-colors duration-300"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-[#E8DCC4]/40 hover:text-[#C9A961] transition-colors duration-300"
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
