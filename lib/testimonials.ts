export interface Testimonial {
  id: number
  quote: string
  name: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I've been natural for seven years and never felt more seen by a stylist. They took time to understand my curl pattern and gave me the most beautiful twist-out I've ever had.",
    name: "Aaliyah T.",
    service: "Natural Hair Care",
  },
  {
    id: 2,
    quote:
      "The knotless braids were installed so gently — no tension, no pain, just the most gorgeous result. My scalp thanked me for a week.",
    name: "Simone R.",
    service: "Knotless Braids",
  },
  {
    id: 3,
    quote:
      "My silk press has never looked this good. The stylist walked me through exactly how to maintain it at home. That level of care is rare.",
    name: "Destiny M.",
    service: "Silk Press",
  },
  {
    id: 4,
    quote:
      "From the moment I walked in, I felt at home. The salon is beautiful, the energy is warm, and my color came out exactly as I envisioned. I won't go anywhere else.",
    name: "Janelle K.",
    service: "Balayage Color",
  },
  {
    id: 5,
    quote:
      "They corrected years of damage from another salon and actually made my hair healthy again. I cried happy tears at the mirror. This place is a sanctuary.",
    name: "Brianna W.",
    service: "Color Correction",
  },
  {
    id: 6,
    quote:
      "M & Co. is exactly what Roxbury deserved. A space where Black women are celebrated, not just serviced. My go-to for life.",
    name: "Keisha L.",
    service: "Precision Cut",
  },
]
