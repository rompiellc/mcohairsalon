import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Users, Sparkles, Shield } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import GoldDivider from '@/components/GoldDivider'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn the story behind M & Co. Hair Salon — a Black-owned luxury salon rooted in Roxbury, Boston. Our philosophy, our team, and our commitment to community.',
}

const values = [
  {
    icon: Sparkles,
    title: 'Craftsmanship',
    description:
      'Every service is executed with precision and intention. We treat hair care as the art form it is.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Roxbury is home. We invest in our neighborhood and celebrate the culture that raised us.',
  },
  {
    icon: Heart,
    title: 'Care',
    description:
      'Your hair health comes first. We consult, educate, and tailor every service to your specific needs.',
  },
  {
    icon: Shield,
    title: 'Confidence',
    description:
      'We believe the right stylist can change how you carry yourself. We aim to send you out feeling unstoppable.',
  },
]

const team = [
  {
    name: 'M.',
    title: 'Founder & Lead Stylist',
    specialty: 'Protective Styles · Precision Cuts · Color',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    alt: 'M., founder and lead stylist at M & Co.',
    bio: 'With over a decade of experience and a passion for natural textures, M. founded M & Co. to create the salon she always wished existed in Roxbury. Her work blends technical precision with deep cultural understanding.',
  },
  {
    name: 'Simone',
    title: 'Senior Colorist',
    specialty: 'Balayage · Color Correction · Highlights',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    alt: 'Simone, senior colorist at M & Co.',
    bio: 'A trained colorist with experience in both high-fashion editorial and everyday wearable color, Simone specializes in creating dimensional looks that honor the integrity of textured hair.',
  },
  {
    name: 'Jade',
    title: 'Natural Hair Specialist',
    specialty: 'Natural Styles · Loc Maintenance · Treatments',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    alt: 'Jade, natural hair specialist at M & Co.',
    bio: 'Jade is deeply committed to the health of natural hair. Her consultations are thorough, her technique is gentle, and her results speak for themselves.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden" aria-label="About page header">
        <Image
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1920&q=80"
          alt="Warm luxury salon interior"
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 px-6 md:px-10 pb-16 max-w-7xl mx-auto w-full">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C9A961] mb-3">
            Our Story
          </p>
          <h1
            className="font-[family-name:var(--font-playfair-display)] text-[#FAF7F0]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            About M & Co.
          </h1>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="py-24 md:py-32 px-6 md:px-10" aria-label="Founder story">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80"
              alt="M., founder of M & Co. Hair Salon"
              fill
              className="object-cover img-warm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-[#C9A961]/20" />
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#C9A961]/60" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#C9A961]/60" />
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="The Founder"
              title="A Vision Born in Roxbury"
              light
            />
            {/* TODO: Replace with owner's real bio */}
            <div className="space-y-4 font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 leading-relaxed">
              <p>
                Growing up in Roxbury, M. spent her childhood watching her mother braid her
                sisters&apos; hair on Sunday mornings. That ritual — the warmth of it, the
                conversation, the transformation — never left her. It became the blueprint for
                everything she would build.
              </p>
              <p>
                After training in Boston and New York and spending years refining her craft at
                some of the city&apos;s most respected salons, M. returned to Roxbury with a clear
                vision: a space where Black women could walk in and feel immediately at home.
                Not tolerated. Not accommodated. At home.
              </p>
              <p>
                M & Co. opened its doors in 2020, in the neighborhood that raised her. Today it
                is a landmark — not just for the quality of its work, but for what it represents:
                excellence, rooted in community, crafted for the crown.
              </p>
            </div>
            <blockquote className="border-l-2 border-[#C9A961] pl-6 font-[family-name:var(--font-cormorant-garamond)] italic text-xl text-[#E8DCC4]">
              &ldquo;I wanted to build the salon I always needed but could never find.&rdquo;
              <cite className="block mt-2 font-[family-name:var(--font-inter)] text-[10px] not-italic tracking-[0.2em] uppercase text-[#C9A961]">
                — M., Founder
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 md:py-32 bg-[#1A1612] px-6 md:px-10" aria-label="Our philosophy">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="How We Work"
              title="Our Philosophy"
              light
            />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 leading-relaxed">
              <p>
                We believe that great hair care starts with great listening. Before any service
                begins, we take time to understand your hair&apos;s history, its needs, your
                lifestyle, and your vision. No assumptions. No shortcuts.
              </p>
              <p>
                We are specialists in textured, coily, and kinky hair types — not because we
                exclude others, but because we have chosen to go deep rather than wide. We invest
                in ongoing education so that our team stays at the forefront of technique, product
                science, and protective care.
              </p>
              <p>
                Every product we use is selected for quality and compatibility with the hair we
                serve. We don&apos;t chase trends — we celebrate timeless health and beauty,
                expressed in whatever style feels like you.
              </p>
            </div>

            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Beautiful braided hairstyle at M & Co. salon"
                fill
                className="object-cover img-warm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-[#C9A961]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 md:py-32 px-6 md:px-10" aria-label="Our values">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeading eyebrow="What Drives Us" title="Our Values" align="center" light />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group p-8 border border-[#C9A961]/20 hover:border-[#C9A961]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon
                    size={28}
                    className="text-[#C9A961] mb-6 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-[#FAF7F0] mb-3">
                    {value.title}
                  </h3>
                  <GoldDivider className="mb-4" />
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 md:py-32 bg-[#1A1612] px-6 md:px-10" aria-label="Our team">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionHeading eyebrow="The Stylists" title="Meet the Team" light />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <article
                key={member.name}
                className="group border border-[#C9A961]/20 hover:border-[#C9A961]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover img-warm transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 bg-[#0A0A0A]">
                  <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-[#FAF7F0] mb-1">
                    {member.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#C9A961] mb-2">
                    {member.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] text-[#C9A961]/50 mb-4 tracking-wide">
                    {member.specialty}
                  </p>
                  <GoldDivider className="mb-4" />
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#E8DCC4]/60 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="py-24 md:py-32 px-6 md:px-10" aria-label="Community">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Roxbury Roots"
              title="Community Is Our Foundation"
              light
            />
            <div className="space-y-4 font-[family-name:var(--font-inter)] text-sm text-[#E8DCC4]/70 leading-relaxed">
              <p>
                M & Co. was never meant to be just a salon. It was always meant to be a gathering
                point — a place where women from this neighborhood could come and feel the kind of
                care that Roxbury has always given its own.
              </p>
              <p>
                We are proud to be a Black-owned business in a neighborhood with a rich history of
                Black culture, resistance, and excellence. That legacy lives in every appointment
                we take, every hand we steady, every crown we honor.
              </p>
              <p>
                We give back through partnerships with local schools, mentoring young stylists
                from the community, and participating in Roxbury&apos;s cultural events. This
                neighborhood built us. We intend to build it back.
              </p>
            </div>
            <Button href="/book" variant="primary">
              Book an Appointment
            </Button>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1614243683577-12c98a5ab4ce?w=900&q=80"
              alt="Community gathering and celebration in Roxbury Boston"
              fill
              className="object-cover img-warm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-[#C9A961]/20" />
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#C9A961]/60" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#C9A961]/60" />
          </div>
        </div>
      </section>
    </>
  )
}
