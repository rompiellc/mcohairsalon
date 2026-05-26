'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A961]/10'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-italiana)] text-2xl text-[#C9A961] tracking-wider hover:text-[#B08D57] transition-colors duration-300 flex-shrink-0"
            aria-label="M & Co. Hair Salon — Home"
          >
            M & Co.
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link text-[10px] tracking-[0.25em] uppercase font-[family-name:var(--font-inter)] transition-colors duration-300 ${
                      isActive
                        ? 'text-[#C9A961] active'
                        : 'text-[#E8DCC4]/70 hover:text-[#FAF7F0]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Book Now CTA */}
          <Link
            href="/book"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#C9A961] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium hover:bg-[#B08D57] transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#FAF7F0] hover:text-[#C9A961] transition-colors duration-300 p-1"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col items-center gap-8" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-[family-name:var(--font-playfair-display)] text-3xl hover:text-[#C9A961] transition-colors duration-300 ${
                        pathname === link.href ? 'text-[#C9A961]' : 'text-[#FAF7F0]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.07 }}
                >
                  <Link
                    href="/book"
                    className="mt-4 inline-flex items-center px-8 py-3 bg-[#C9A961] text-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium"
                  >
                    Book Now
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
