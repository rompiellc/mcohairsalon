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
    name: 'Cuts & Styling',
    services: [
      {
        name: 'Haircut',
        description:
          'A tailored cut shaped to complement your natural texture and lifestyle. Includes a consultation and finished style.',
        price: 'Call for pricing',
      },
      {
        name: 'Trims and Cuts',
        description:
          'Precision trims to remove split ends and maintain your shape without sacrificing length.',
        price: 'Call for pricing',
      },
      {
        name: 'Hairstyling',
        description:
          'From sleek finishes to voluminous curls — styled to suit the occasion and celebrate your unique look.',
        price: 'Call for pricing',
      },
      {
        name: 'Blowouts',
        description:
          'A smooth, voluminous blow-dry finish that respects your hair\'s health. Perfect for everyday polish or a special event.',
        price: 'Call for pricing',
      },
      {
        name: 'Press and Curl',
        description:
          'A classic thermal press and curl service that delivers silky, defined results while preserving moisture and minimizing heat damage.',
        price: 'Call for pricing',
      },
      {
        name: 'Custom Colors',
        description:
          'Bold, dimensional, or subtly blended — our colorists craft shades tailored to your skin tone and hair texture. Includes a color consultation.',
        price: 'Call for pricing',
      },
      {
        name: 'Braiding',
        description:
          'From box braids to knotless, feed-in to cornrows — intricate braid work installed with care and precision in all sizes and styles.',
        price: 'Call for pricing',
      },
      {
        name: 'Shampoo & Conditioning',
        description:
          'A thorough cleanse and deep conditioning treatment to restore moisture, strength, and shine to your hair.',
        price: 'Call for pricing',
      },
    ],
  },
  {
    id: 'extensions-weaves',
    name: 'Extensions & Weaves',
    services: [
      {
        name: 'Hair Extensions',
        description:
          'Add length, volume, or both with professional extension application. We match texture and tone for a seamless, natural result.',
        price: 'Call for pricing',
      },
      {
        name: 'Full Weaves',
        description:
          'Full sew-in installations with a braided base, tailored to your desired look, density, and lifestyle.',
        price: 'Call for pricing',
      },
      {
        name: 'Frontals',
        description:
          'Frontal and closure installs for a seamless hairline and versatile styling options. Includes blending and customization.',
        price: 'Call for pricing',
      },
    ],
  },
]

export const heroServices = [
  {
    name: 'Cuts & Styling',
    description:
      'From precision haircuts to press and curls — every service begins with a conversation about your texture, lifestyle, and the look that\'s uniquely yours.',
    image: '/homepagepic.png',
    alt: 'Hairstyling service at M & Co. Hair Salon',
    href: '/services#cuts-styling',
  },
  {
    name: 'Braiding & Weaves',
    description:
      'Expert braiding, full weaves, frontals, and extensions — protective styles that honor your hair\'s strength and let your crown breathe.',
    image: '/braidspic1.png',
    alt: 'Beautiful braided protective style at M & Co.',
    href: '/services#braiding',
  },
  {
    name: 'Custom Colors',
    description:
      'Bold, dimensional, or subtly sun-kissed — our colorists craft shades that work with your natural texture and complement your skin tone.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    alt: 'Custom hair color service at M & Co. Hair Salon',
    href: '/services#color',
  },
]
