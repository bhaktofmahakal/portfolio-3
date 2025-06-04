# 🚀 Utsav Mishra — Next.js & Tailwind Portfolio


> 📱 A modern, responsive, and fully typed developer portfolio built with Next.js 13 (App Router), React, TypeScript, and Tailwind CSS.  
> 🚀 Deployed seamlessly on Vercel; optimized for performance, SEO, and maintainability.


---

<p align="center">
   [![Live on Vercel](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-3-blue-delta.vercel.app)
  <img src="https://img.shields.io/badge/Framework-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Renderer-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
 
</p>

---

## 🧭 Table of Contents

- [✨ Key Features](#-key-features)  
- [🧰 Tech Stack](#-tech-stack)  
- [📁 Project Structure](#-project-structure)  
- [📸 Screenshots](#-screenshots)  
- [⚙️ Getting Started](#️-getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Local Development](#local-development)  
  - [Production Build](#production-build)  
- [🤝 Contributing](#-contributing)  
- [📄 License](#-license)  
- [📬 Contact](#-contact)  

---

## ✨ Key Features

- **Next.js 13 (App Router)**  
  - File-based routing under `/app` with server-side rendering and incremental static regeneration.  
  - Built-in API routes (`/pages/api`) for contact-form handling.

- **Fully Typed with TypeScript**  
  - Strict TS configuration (`tsconfig.json`) for zero-runtime errors.  
  - Shared types/interfaces in `/lib` for consistent data shapes.

- **Tailwind CSS + PostCSS**  
  - Utility-first styling with `tailwind.config.ts`.  
  - Dark/Light theme toggle persisted in `localStorage` (uses a custom hook under `/hooks`).  
  - Glassmorphism and fluid layouts—mobile-first, then progressively enhanced.

- **Component-Driven Architecture**  
  - Reusable UI building blocks in `/components` (buttons, cards, navbars, modals).  
  - Custom React hooks in `/hooks` (e.g., `useTheme`, `useScroll`, `useFormValidation`).

- **Optimized Images & Assets**  
  - `/public/images` holds optimized PNG/SVG assets.  
  - A custom script (`create-public-assets.js`) generates WebP + fallback PNGs for `next/image`.

- **Animation & Interactivity**  
  - Scroll-based reveals using [AOS] or custom Framer Motion variants (check `/components/AnimatedSection.tsx`).  
  - Smooth section transitions via Next.js `Link` prefetching + CSS scroll-snap.

- **Contact Form + Email Integration**  
  - `/app/api/contact/route.ts` endpoint processes form submissions with serverless functions.  
  - Backed by an SMTP provider (configured via `.env.local`) or EmailJS integration.

- **SEO & Performance**  
  - Meta tags, dynamic Open Graph previews (via `generateMetadata` in `app/layout.tsx`).  
  - Automatic image optimization (`next/image`).  
  - Lighthouse-friendly: <90 ms TBT, ~98% accessibility, <1 MB bundle on first load.

- **Vercel Deployment**  
  - Zero-configuration deployment using `vercel.json`.  
  - Environment variables stored securely in Vercel dashboard (e.g., `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`).  

---

## 🧰 Tech Stack

| Category         | Technology & Version                                     |
| ---------------- | -------------------------------------------------------- |
| **Framework**    | Next.js 13 (App Router)                                   |
| **Language**     | TypeScript 4.x                                            |
| **UI Library**   | React 18.x                                                |
| **Styling**      | Tailwind CSS 3.x (+ PostCSS)                              |
| **Build Tools**  | Vercel CLI (Deployment), `npm` / `pnpm` (Package Manager) |
| **API / Forms**  | Next.js API Routes (`/app/api/contact/route.ts`)          |
| **Linting / QA** | ESLint, Prettier, TypeScript strict mode                  |
| **Versioning**   | Git (GitHub), `.github/workflows/ci.yml` (CI pipeline)    |
| **Hosting**      | Vercel (Automatic CI/CD on push to `main` branch)         |

---

## 📁 Project Structure

<details>
<summary>Click to expand directory tree</summary>
    
    portfolio-3/
    ├── app/                    # → Next.js App Router (server+client components)
    │   ├── api/
    │   │   └── contact/        # POST handler: /api/contact
    │   │       └── route.ts
    │   ├── layout.tsx          # Root layout (includes theme provider, meta tags)
    │   ├── page.tsx            # Home / Hero Section
    │   ├── about/              # About Me page
    │   │   └── page.tsx
    │   ├── skills/             # Skills showcase
    │   │   └── page.tsx
    │   ├── projects/           # Projects portfolio
    │   │   └── page.tsx
    │   ├── certificates/       # Certificates / Achievements
    │   │   └── page.tsx
    │   ├── contact/            # Contact form page
    │   │   └── page.tsx
    │   └── 404/                # Custom 404 page
    │       └── page.tsx
    │
    ├── components/             # Reusable React components (Client + Server)
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── ThemeToggle.tsx
    │   ├── ProjectCard.tsx
    │   ├── SkillsBar.tsx
    │   ├── CertificateCard.tsx
    │   ├── AnimatedSection.tsx
    │   └── … (others: Button, Modal, FormInput, etc.)
    │
    ├── hooks/                  # Custom React hooks (Client-side only)
    │   ├── useTheme.ts         # Dark/Light mode logic
    │   ├── useForm.ts          # Form validation + state management
    │   └── useScroll.ts        # Scroll position hook for animations
    │
    ├── image/                  # Helper scripts/resources for image processing
    │   └── create-public-assets.js  # Auto-generate WebP + PNG variants
    │
    ├── lib/                    # Shared utility functions (server+client)
    │   ├── mailer.ts           # Email sending logic (SMTP / EmailJS wrapper)
    │   └── constants.ts        # Global constants (site meta, nav items)
    │
    ├── public/                 # Static files served at root (`/`)
    │   ├── images/             # Logos, avatars, project screenshots
    │   ├── favicon.ico
    │   └── robots.txt
    │
    ├── styles/                 # Global CSS + Tailwind overrides
    │   ├── globals.css         # Tailwind base import + resets
    │   └── variables.css       # Custom CSS variables (colors, fonts)
    │
    ├── .gitignore              # Ignore node_modules, .env.local, .next/, etc.
    ├── .vercelignore           # Exclude files on Vercel deployment
    ├── components.json         # Optional: component metadata for design system
    ├── create-public-assets.js  # Root script for building optimized images
    ├── gitattributes            # Git attributes for line endings, etc.
    ├── middleware.ts            # Next.js middleware for auth / redirects
    ├── next-env.d.ts            # Auto-generated Next.js types
    ├── next.config.mjs          # Next.js config (image domains, rewrites)
    ├── package.json             # Dependencies, scripts, metadata
    ├── pnpm-lock.yaml           # pnpm lockfile (or use `package-lock.json`)
    ├── postcss.config.mjs       # PostCSS + TailwindCSS config
    ├── tailwind.config.ts       # Tailwind CSS config (themes, plugins)
    ├── tsconfig.json            # TypeScript config (paths, strict mode)
    ├── vercel.json              # Vercel-specific deployment settings
    └── README.md                # ← Readme File
