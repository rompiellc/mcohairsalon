import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Clock, CheckCircle2 } from 'lucide-react'
import BookingForm from '@/components/BookingForm'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Request an appointment at M & Co. Hair Salon in Roxbury, Boston. Fill out our booking form and we\'ll confirm within 24 hours.',
}

const expectations = [
  'Your request will be confirmed via phone or email within 24 hours.',
  'New clients are encouraged to book a complimentary 15-minute consultation.',
  'Please arrive 5 minutes before your appointment time.',
  'Hair should be detangled and in a natural state for most services.',
  'We kindly ask for 24-hour notice for cancellations or rescheduling.',
]

export default function BookPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative h-64 md:h-80 flex items-end overflow-hidden"
        aria-label="Book appointment header"
      >
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80"
          alt="Welcoming luxury hair salon interior"
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A961] mb-3">
            Reserve Your Visit
          </p>
          <h1
            className="font-[family-name:var(--font-playfair-display)] text-[#FAF7F0]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Book an Appointment
          </h1>
        </div>
      </section>

      {/* ── BOOKING CONTENT ── */}
      <section className="py-20 px-6 md:px-10" aria-label="Booking form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <SectionHeading
                eyebrow="Request Your Visit"
                title="Let's Begin"
                light
                subtitle="Fill out the form below and we'll reach out within 24 hours to confirm your appointment."
              />
            </div>
            <BookingForm />
          </div>

          {/* Side panel */}
          <aside className="space-y-10">
            {/* What to expect */}
            <div className="p-8 border border-[#C9A961]/20 bg-[#1A1612]">
              <h2 className="font-[family-name:var(--font-playfair-display)] text-lg text-[#FAF7F0] mb-6">
                What to Expect
              </h2>
              <ul className="space-y-4">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={14}
                      className="text-[#C9A961] mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call instead */}
            <div className="p-8 border border-[#C9A961]/20">
              <h2 className="font-[family-name:var(--font-playfair-display)] text-lg text-[#FAF7F0] mb-3">
                Prefer to Call?
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 mb-5 leading-relaxed">
                We&apos;re happy to book your appointment over the phone.
              </p>
              <a
                href="tel:+16174276000"
                className="inline-flex items-center gap-3 text-[#C9A961] hover:text-[#B08D57] transition-colors duration-300"
              >
                <Phone size={16} aria-hidden="true" />
                <span className="font-[family-name:var(--font-playfair-display)] text-xl">
                  (617) 427-6000
                </span>
              </a>
            </div>

            {/* Hours */}
            <div className="p-8 border border-[#C9A961]/20 bg-[#1A1612]">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={16} className="text-[#C9A961]" aria-hidden="true" />
                <h2 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A961]">
                  Salon Hours
                </h2>
              </div>
              {/* TODO: Replace with real salon hours */}
              <div className="space-y-2 font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60">
                <div className="flex justify-between">
                  <span>Tuesday – Saturday</span>
                  <span>9 AM – 7 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10 AM – 5 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="text-[#E8DCC4]/30">Closed</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
