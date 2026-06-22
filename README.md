# Sami Cenkci — Portfolio

My personal portfolio website. A clean, dark-themed single-page site that brings together my background, work experience, projects, and contact info in one place.

🔗 **Live site:** [my-portfolio-five-drab-24.vercel.app](https://my-portfolio-five-drab-24.vercel.app)

## About

I'm a CS student at OsloMet (graduating December 2025) with a focus on full-stack development and data analysis. This site is my one-page introduction — designed to be fast, readable, and minimal.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts:** Geist Sans & Geist Mono via `next/font/google`
- **Image optimization:** `next/image`
- **Deployment:** [Vercel](https://vercel.com/)

## Sections

- **Header** — Profile photo (links to GitHub), name, and role.
- **Bio** — Short intro paragraph.
- **Education** — OsloMet, Bachelor's in Computer Science.
- **Experience** — Sintef, Reitan Convenience Norway, and Easypick AS.
- **Outside of Code** — Hobbies grid (reading, Finn.no flipping, gaming, football).
- **Selected Projects** — Wisp marketplace, Bachelor thesis (AI electricity forecasting with SINTEF), and an Arcane fan site.
- **A Day in My Life** — Side-by-side timelines for weekdays and weekends with hover effects and gradient lines.
- **Languages** — Norwegian, Turkish, and English with proficiency bars.
- **Get in touch** — Links to email, GitHub, LinkedIn, and a downloadable CV (PDF).

## Components

The page is composed from a small set of reusable components in `/components`:

- **`Card.tsx`** — Compact horizontal card used in Education and Experience. Logo on the left, title and subtitle in the middle, date on the right.
- **`Cardbox.tsx`** — Larger project card with a full-width cover image, title, description, and language badges.
- **`Languages.tsx`** — Tag-style language badges. Each language gets a consistent color, picked by hashing the language name against a fixed palette.

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx         # Root layout, fonts, metadata
│   ├── page.tsx           # Single-page portfolio
│   └── globals.css        # Tailwind + base styles
├── components/
│   ├── Card.tsx           # Education / Experience card
│   ├── Cardbox.tsx        # Project card
│   └── Languages.tsx      # Color-coded language badges
├── public/                # Images, logos, CV PDF
├── next.config.ts
├── tailwind.config / postcss.config
└── package.json
```

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/SamiCenkci/my-portfolio.git
cd my-portfolio
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build for production
npm run start    # Run the production build
npm run lint     # Run ESLint
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic build and deploy.

## Contact

- **Email:** [samicenkci02@gmail.com](mailto:samicenkci02@gmail.com)
- **GitHub:** [@SamiCenkci](https://github.com/SamiCenkci)
- **LinkedIn:** [sami-cenkci](https://www.linkedin.com/in/sami-cenkci-81620625b/)

---

© Sami Cenkci · Built with Next.js & Tailwind CSS
