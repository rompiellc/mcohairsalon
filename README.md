# M & Co. Hair Salon — Website

A production-ready luxury website for M & Co. Hair Salon, a Black-owned hair salon at 53 Humboldt Ave, Roxbury, Boston.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animations:** Framer Motion (scroll-triggered, page transitions)
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Fonts:** Playfair Display, Cormorant Garamond, Inter, Italiana (via `next/font/google`)
- **Images:** Next.js Image component (optimized, lazy-loaded)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
# Production build
npm run build
npm start
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, about preview, services, quote, gallery, testimonials, location |
| `/about` | Founder story, philosophy, values, team, community |
| `/services` | Full service menu organized by category with pricing |
| `/gallery` | Filterable masonry grid with lightbox |
| `/book` | Appointment request form + side panel |
| `/contact` | Contact info columns, map iframe, contact form |

## Customization Checklist (Owner TODOs)

Before going live, replace every placeholder marked `// TODO` in the code. Here's the full list:

### Required — Business Info
- [ ] **Phone number** — `components/Footer.tsx`, `app/page.tsx`, `app/book/page.tsx`, `app/contact/page.tsx`. Replace `(617) XXX-XXXX` and `href="tel:+1XXXXXXXXXX"` with the real number.
- [ ] **Email address** — `components/Footer.tsx`, `app/contact/page.tsx`. Replace `hello@mcohairstudio.com`.
- [ ] **Salon hours** — `components/Footer.tsx`, `app/page.tsx`, `app/book/page.tsx`, `app/contact/page.tsx`. Update days and times.
- [ ] **Founding year** — `app/page.tsx` hero. Update `Est. 2020` if different.
- [ ] **Website URL** — `app/page.tsx` structured data. Replace `https://mcohairstudio.com` with the real domain.

### Required — Social Media
- [ ] **Instagram** — Replace `href="https://instagram.com"` in `components/Footer.tsx` and `app/contact/page.tsx`.
- [ ] **Facebook** — Same files, replace `href="https://facebook.com"`.
- [ ] **TikTok** — Same files, replace `href="https://tiktok.com"`.
- [ ] **Instagram handle display** — `app/gallery/page.tsx` — update `@mcohairstudio` to the real handle.

### Required — Images
All images are Unsplash placeholders. Replace with real salon photography:

| File | Section | Suggested photo |
|---|---|---|
| `app/page.tsx` hero | Salon interior background | Warm shot of M & Co. interior |
| `app/page.tsx` about section | Stylist at work | Owner/stylist in session |
| `app/page.tsx` gallery grid | 6 preview photos | Client styling results |
| `app/about/page.tsx` | Founder portrait | Professional headshot of M. |
| `app/about/page.tsx` | 3 team stylist cards | Headshots of each stylist |
| `app/services/page.tsx` | Hero background | In-action styling shot |
| `components/GalleryGrid.tsx` | Full gallery (8 items) | Client work portfolio |
| `app/book/page.tsx` | Hero background | Welcoming salon interior |
| `app/contact/page.tsx` | Hero background | Exterior or street view |

### Recommended — Copy
- [ ] **Founder bio** — `app/about/page.tsx` — replace the placeholder story with M.'s real background.
- [ ] **Team names & bios** — `app/about/page.tsx` — update stylist names, specialties, and bios.
- [ ] **Stylist dropdown** — `components/BookingForm.tsx` — update the stylist `<option>` list with real names.
- [ ] **Services & pricing** — `lib/services.ts` — adjust names, descriptions, and prices.
- [ ] **Testimonials** — `lib/testimonials.ts` — replace with real client quotes.

### Optional Enhancements
- [ ] **Google Maps embed** — `app/page.tsx` and `app/contact/page.tsx` — get a real embed URL from Google Maps → Share → Embed a map.
- [ ] **OG image** — Add `public/og-image.jpg` and reference it in `app/layout.tsx` metadata for social sharing previews.
- [ ] **Favicon** — Replace `public/favicon.ico` with the salon's branded favicon.
- [ ] **Real booking system** — Connect to Vagaro, Square Appointments, or Calendly by updating `onSubmit` in `components/BookingForm.tsx`.
- [ ] **Analytics** — Add Vercel Analytics or Google Analytics in `app/layout.tsx`.

## Deployment (Vercel)

1. Push the `mco-hair-salon/` directory to a GitHub repository.
2. Connect the repo at [vercel.com](https://vercel.com).
3. Set root directory to `mco-hair-salon/` in Vercel project settings.
4. Deploy — no environment variables required for the base site.

## Design System

| Token | Value | Use |
|---|---|---|
| Primary Black | `#0A0A0A` | Backgrounds, body text |
| Soft Black | `#1A1612` | Secondary surfaces |
| Champagne Gold | `#C9A961` | Buttons, accents, dividers |
| Antique Gold | `#B08D57` | Hover states |
| Warm Beige | `#E8DCC4` | Light text on dark |
| Off-White | `#FAF7F0` | Primary body text |
| Muted Bronze | `#8B6F47` | Subtle accents |

**Fonts:** Playfair Display (headings) · Cormorant Garamond (italic accents) · Inter (body) · Italiana (logo wordmark)
