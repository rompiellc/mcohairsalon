'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import Button from './Button'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  stylist: z.string().min(1, 'Please select a stylist preference'),
  date: z.string().min(1, 'Please select a preferred date'),
  time: z.string().min(1, 'Please select a preferred time'),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const inputClasses =
  'w-full bg-transparent border border-[#C9A961]/20 px-4 py-3 text-[#FAF7F0] text-sm font-[family-name:var(--font-inter)] placeholder:text-[#E8DCC4]/30 focus:outline-none focus:border-[#C9A961] transition-colors duration-300'

const labelClasses =
  'block font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A961] mb-2'

const errorClasses = 'mt-1 font-[family-name:var(--font-inter)] text-xs text-red-400'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
        <CheckCircle size={48} className="text-[#C9A961]" aria-hidden="true" />
        <div>
          <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-[#FAF7F0] mb-3">
            Request Received
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/60 max-w-sm leading-relaxed">
            Thank you for reaching out. We&apos;ll confirm your appointment within 24 hours via
            phone or email.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            {...register('name')}
            className={inputClasses}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className={errorClasses} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(617) 555-0100"
            autoComplete="tel"
            {...register('phone')}
            className={inputClasses}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClasses} role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          {...register('email')}
          className={inputClasses}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className={errorClasses} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service
          </label>
          <select
            id="service"
            {...register('service')}
            className={`${inputClasses} appearance-none cursor-pointer bg-[#1A1612]`}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="">Select a service</option>
            <optgroup label="Cuts & Styling">
              <option>Women&apos;s Precision Cut</option>
              <option>Men&apos;s Cut</option>
              <option>Blowout</option>
              <option>Silk Press</option>
              <option>Updo & Special Occasion</option>
            </optgroup>
            <optgroup label="Color">
              <option>Single Process Color</option>
              <option>Highlights</option>
              <option>Balayage</option>
              <option>Color Correction</option>
            </optgroup>
            <optgroup label="Protective Styles">
              <option>Box Braids</option>
              <option>Knotless Braids</option>
              <option>Twists</option>
              <option>Locs Maintenance</option>
              <option>Sew-In Weave</option>
              <option>Wig Installation</option>
            </optgroup>
            <optgroup label="Natural Hair Care">
              <option>Deep Conditioning</option>
              <option>Detangle & Style</option>
              <option>Curl Definition</option>
              <option>Natural Hair Trim</option>
            </optgroup>
            <optgroup label="Treatments">
              <option>Scalp Treatment</option>
              <option>Keratin Smoothing</option>
              <option>Hot Oil Treatment</option>
            </optgroup>
          </select>
          {errors.service && (
            <p id="service-error" className={errorClasses} role="alert">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Stylist */}
        <div>
          <label htmlFor="stylist" className={labelClasses}>
            Preferred Stylist
          </label>
          <select
            id="stylist"
            {...register('stylist')}
            className={`${inputClasses} appearance-none cursor-pointer bg-[#1A1612]`}
            aria-describedby={errors.stylist ? 'stylist-error' : undefined}
          >
            <option value="">Select a stylist</option>
            {/* TODO: Replace with real stylist names */}
            <option>M. (Lead Stylist)</option>
            <option>No Preference</option>
          </select>
          {errors.stylist && (
            <p id="stylist-error" className={errorClasses} role="alert">
              {errors.stylist.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClasses}>
            Preferred Date
          </label>
          <input
            id="date"
            type="date"
            {...register('date')}
            className={`${inputClasses} cursor-pointer`}
            style={{ colorScheme: 'dark' }}
            aria-describedby={errors.date ? 'date-error' : undefined}
          />
          {errors.date && (
            <p id="date-error" className={errorClasses} role="alert">
              {errors.date.message}
            </p>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className={labelClasses}>
            Preferred Time
          </label>
          <select
            id="time"
            {...register('time')}
            className={`${inputClasses} appearance-none cursor-pointer bg-[#1A1612]`}
            aria-describedby={errors.time ? 'time-error' : undefined}
          >
            <option value="">Select a time</option>
            <option>9:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
          </select>
          {errors.time && (
            <p id="time-error" className={errorClasses} role="alert">
              {errors.time.message}
            </p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelClasses}>
          Additional Notes{' '}
          <span className="text-[#E8DCC4]/30 normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder="Tell us about your hair, inspiration, or any concerns..."
          {...register('notes')}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center">
        {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
      </Button>
    </form>
  )
}
