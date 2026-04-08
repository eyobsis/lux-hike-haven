<div align="center">

# Lux Hike Haven 🏡🥾

Modern, responsive Next.js 15 application marketing a premium Grevenmacher (Luxembourg) apartment: hiking‑friendly location, curated local attractions, rich photo tour, and direct contact form with EmailJS integration.

</div>

## ✨ Features

- Elegant landing hero with strong dual CTAs (reserve & explore sections)
- Detailed “About / Listing Details” & highlights (prominent amenities surfaced early)
- Sleep arrangements & amenities sections (responsive cards)
- Hiking Guide & Grevenmacher Tourism sections (image cards, gradient overlays)
- Photo Tour page (optimized `next/image` usage)
- CTA “Book Your Grevenmacher Escape” section with gradient emphasis
- Contact form powered by EmailJS (client‑side submit + toast feedback)
- Custom not‑found handling
- Accessible, keyboard‑friendly UI (shadcn-ui + Radix primitives)
- Mobile‑first responsive layout & fluid typography
- Tailwind utility design system with theme tokens

## 🧱 Tech Stack

| Layer                        | Technology                                                 |
| ---------------------------- | ---------------------------------------------------------- |
| Framework                    | Next.js ^15.5.0 (App Router)                               |
| Language                     | TypeScript                                                 |
| UI Primitives                | shadcn-ui / Radix UI                                       |
| Styling                      | Tailwind CSS + custom design tokens                        |
| Icons                        | lucide-react                                               |
| State / Forms                | React 19 + controlled inputs / react-hook-form (available) |
| Email                        | emailjs-com                                                |
| Data Fetching (future ready) | @tanstack/react-query                                      |
| Charts / Extras              | Recharts (if needed)                                       |

## 🔐 Environment Variables

Create a `.env.local` in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key_or_user_id
NEXT_PUBLIC_SITE_URL=https://luxtraveler.eu
```

Make sure your EmailJS template expects the fields: `from_name`, `to_email`, `reply_to`, `message`.

For SEO metadata, set `NEXT_PUBLIC_SITE_URL` to the canonical deployment domain. If omitted, production falls back to `https://luxtraveler.eu`.

## 📁 Project Structure (abridged)

```
src/
	app/
		layout.tsx           # Root layout
		page.tsx             # Home page
		photo-tour/page.tsx  # Photo tour page
		not-found.tsx        # Custom 404 (App Router)
	components/
		HeroSection.tsx
		ListingDetailSection.tsx
		SleepSection.tsx
		AmenitiesSection.tsx
		HikingGuide.tsx
		GrevenmacherSection.tsx
		CtaReserveSection.tsx
		ContactSection.tsx
		ui/                  # Reusable shadcn-ui primitives
	lib/
		links.ts             # Centralized external URLs (Airbnb, etc.)
		utils.ts             # Helpers
public/
	Photo tour/            # Photo assets (served statically)
	hiking-maps/           # PDF trail maps
```

## 🚀 Getting Started

Using pnpm (recommended – lockfile present), else substitute with npm/yarn.

```bash
git clone <repo-url>
cd lux-hike-haven
pnpm install
cp .env.local.example .env.local   # (create + fill if you add example file)
pnpm run dev
```

Visit http://localhost:3000

### Alternate (npm)

```bash
npm install
npm run dev
```

## 🛠 Development Notes

- Components under `src/components` are all client components (interactive sections / forms).
- Keep image imports via `next/image` for automatic optimization.
- Favor existing Tailwind design tokens (`text-primary`, `bg-primary`, etc.) for consistency.
- When adding new interactive logic, co-locate lightweight hooks under `src/hooks`.
- Use semantic sectioning (`<section id="...">`) to maintain in‑page navigation & accessibility.

## 📨 EmailJS Integration

The contact form ( `ContactSection` ) calls:

```ts
emailjs.send(
  serviceId,
  templateId,
  {
    from_name,
    to_email, // fixed recipient added
    reply_to, // user-entered email
    message,
  },
  publicKey
);
```

If you receive `422 recipients address is empty`:

1. Confirm `to_email` variable name matches template.
2. Ensure the template has a default recipient or uses `to_email` substitution.
3. Rebuild after adding env vars.

## 📦 Scripts

| Script       | Purpose                                  |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Run local dev server                     |
| `pnpm build` | Production build (type check + optimize) |
| `pnpm start` | Start built app                          |
| `pnpm lint`  | ESLint static analysis                   |

## 🧪 Quality Checklist

- [x] TypeScript strict enabled (TS 5.8.x)
- [x] Accessible color contrast for CTAs
- [x] Responsive breakpoints (sm / md / lg / xl) validated
- [x] Images use `sizes` where large to reduce CLS
- [ ] Add Lighthouse report (optional)

## 🔄 Future Enhancements

- Add availability calendar & direct booking widget
- Integrate serverless email fallback (Resend / Nodemailer API route)
- Internationalization (English / French / German)
- Image gallery lightbox with keyboard navigation
- Structured data (JSON-LD) for lodging listing

## 🤝 Contributing

1. Fork & clone
2. Create a feature branch `feat/your-feature`
3. Commit with conventional messages (e.g. `feat: add trail map download`)
4. Open PR

## 🛡 License

Proprietary – All rights reserved (adjust if you plan to open source).

## 🙋 Support

For questions: use the contact form (production) or email: `samaha.orl@gmail.com`.

---

Made with Next.js, Tailwind, and a love for Luxembourg's trails.
