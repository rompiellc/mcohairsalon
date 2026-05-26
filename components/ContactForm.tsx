'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import Button from './Button'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter a message of at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const inputClasses =
  'w-full bg-transparent border border-[#C9A961]/20 px-4 py-3 text-[#FAF7F0] text-sm font-[family-name:var(--font-inter)] placeholder:text-[#E8DCC4]/30 focus:outline-none focus:border-[#C9A961] transition-colors duration-300'

const labelClasses =
  'block font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#C9A961] mb-2'

const errorClasses = 'mt-1 font-[family-name:var(--font-inter)] text-xs text-red-400'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
        <CheckCircle size={48} className="text-[#C9A961]" aria-hidden="true" />
        <div>
          <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-[#FAF7F0] mb-3">
            Message Sent
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/60 leading-relaxed max-w-xs">
            We&apos;ll be in touch shortly. Thank you for reaching out.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            {...register('name')}
            className={inputClasses}
            aria-describedby={errors.name ? 'cname-error' : undefined}
          />
          {errors.name && (
            <p id="cname-error" className={errorClasses} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            {...register('email')}
            className={inputClasses}
            aria-describedby={errors.email ? 'cemail-error' : undefined}
          />
          {errors.email && (
            <p id="cemail-error" className={errorClasses} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className={labelClasses}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="What is this regarding?"
          {...register('subject')}
          className={inputClasses}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className={errorClasses} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="How can we help you?"
          {...register('message')}
          className={`${inputClasses} resize-none`}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
