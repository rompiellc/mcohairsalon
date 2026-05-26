export interface Service {
  name: string
  description: string
  price: string
}

export interface ServiceCategory {
  id: string
  name: string
  services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cuts-styling',
    name: "Cuts & Styling",
    services: [
      {
        name: "Women's Precision Cut",
        description:
          "A tailored cut shaped to complement your natural texture and lifestyle. Includes consultation, shampoo, and blow-dry finish.",
        price: "Starting at $75",
      },
      {
        name: "Men's Cut",
        description:
          "Clean, confident cuts with attention to detail. From classic tapers to textured fades.",
        price: "Starting at $45",
      },
      {
        name: "Blowout",
        description:
          "A smooth, voluminous blow-dry finish that respects your hair's health. Perfect for special occasions or a polished everyday look.",
        price: "Starting at $65",
      },
      {
        name: "Silk Press",
        description:
          "Achieve silky-straight results without compromise. Our thermal technique preserves moisture and minimizes heat damage.",
        price: "Starting at $85",
      },
      {
        name: "Updo & Special Occasion Styling",
        description:
          "Editorial-quality updos, bridal styles, and event-ready looks crafted for the moment.",
        price: "Starting at $95",
      },
    ],
  },
  {
    id: 'color',
    name: "Color",
    services: [
      {
        name: "Single Process Color",
        description:
          "Rich, even color applied from root to tip. We use nourishing, professional-grade formulas designed for all hair textures.",
        price: "Starting at $100",
      },
      {
        name: "Highlights",
        description:
          "Dimensional highlights hand-painted or foiled to brighten your base and add movement.",
        price: "Starting at $130",
      },
      {
        name: "Balayage",
        description:
          "Sun-kissed, natural-looking color swept freehand through your hair for a soft, lived-in effect.",
        price: "Starting at $175",
      },
      {
        name: "Color Correction",
        description:
          "Restoring balance and vibrancy to hair that's been previously colored, bleached, or damaged. Requires consultation.",
        price: "By consultation",
      },
    ],
  },
  {
    id: 'protective',
    name: "Protective Styles",
    services: [
      {
        name: "Box Braids",
        description:
          "Classic, enduring braids installed with care and precision. Available in all sizes — jumbo, medium, and small.",
        price: "Starting at $175",
      },
      {
        name: "Knotless Braids",
        description:
          "A gentler, feed-in technique that reduces tension at the root while offering a sleek, natural-looking part.",
        price: "Starting at $200",
      },
      {
        name: "Twists",
        description:
          "Two-strand and Senegalese twists installed to last. Moisture-sealed and finished for longevity.",
        price: "Starting at $150",
      },
      {
        name: "Locs Maintenance",
        description:
          "Retwisting, interlocking, and loc care services to keep your locs healthy, defined, and thriving.",
        price: "Starting at $80",
      },
      {
        name: "Sew-In Weave",
        description:
          "Full or partial sew-in installations with a braided base, tailored to your desired look and density.",
        price: "Starting at $175",
      },
      {
        name: "Wig Installation",
        description:
          "Custom wig application for a seamless, natural hairline. Includes blending and styling.",
        price: "Starting at $120",
      },
    ],
  },
  {
    id: 'natural',
    name: "Natural Hair Care",
    services: [
      {
        name: "Deep Conditioning Treatment",
        description:
          "An intensive moisture-restoring treatment that strengthens, softens, and revives your natural curl pattern.",
        price: "Starting at $55",
      },
      {
        name: "Detangle & Style",
        description:
          "Gentle detangling of tightly coiled and kinky textures, followed by a defined, styled finish of your choice.",
        price: "Starting at $70",
      },
      {
        name: "Curl Definition",
        description:
          "A wash-and-go or twist-out service designed to celebrate and define your natural curl pattern.",
        price: "Starting at $65",
      },
      {
        name: "Natural Hair Trim",
        description:
          "A precise trim on natural, coily hair to remove split ends and maintain shape without compromising length.",
        price: "Starting at $50",
      },
    ],
  },
  {
    id: 'treatments',
    name: "Treatments",
    services: [
      {
        name: "Scalp Treatment",
        description:
          "A targeted scalp care ritual that cleanses, exfoliates, and nourishes your scalp for healthier, stronger growth.",
        price: "Starting at $60",
      },
      {
        name: "Keratin Smoothing",
        description:
          "A professional smoothing treatment that reduces frizz, enhances shine, and cuts styling time — without harsh chemicals.",
        price: "Starting at $200",
      },
      {
        name: "Hot Oil Treatment",
        description:
          "A warm, penetrating oil treatment that restores moisture and elasticity to dry, brittle strands.",
        price: "Starting at $40",
      },
    ],
  },
]

export const heroServices = [
  {
    name: "Precision Cuts",
    description:
      "Every cut is a conversation — about texture, lifestyle, and the look that's uniquely yours. We shape, refine, and perfect.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    // Unsplash search: "luxury hair salon stylist"
    alt: "Stylist giving a precision haircut in a luxury salon",
    href: "/services#cuts-styling",
  },
  {
    name: "Protective Styles",
    description:
      "From knotless braids to silk presses — styles that honor your hair's strength and let your crown breathe.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    // Unsplash search: "Black woman natural hair braids"
    alt: "Beautiful protective braided hairstyle on a Black woman",
    href: "/services#protective",
  },
  {
    name: "Color & Highlights",
    description:
      "Bold, dimensional, or subtly sun-kissed — our colorists craft shades that work with your natural texture, not against it.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    // Unsplash search: "hair color highlights salon"
    alt: "Hair color and highlights treatment in a salon",
    href: "/services#color",
  },
]
