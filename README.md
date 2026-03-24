# Mantu Kumar Portfolio

A production-ready personal portfolio built with React + Vite and deployed on Vercel.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- EmailJS

## Features

- Responsive single-page portfolio sections (Home, About, Skills, Projects, Experience, Certifications, Contact)
- Project cards with dedicated detail pages
- Optimized static media served from public/images
- Social preview metadata (Open Graph + Twitter)
- Vercel SPA routing support via vercel.json

## Local Development

### Prerequisites

- Node.js 20+ recommended
- npm 10+

### Install and run

```bash
npm install
npm run dev
```

The app runs on the default Vite port unless overridden.

## Production Build

```bash
npm run lint
npm run build
npm run preview
```

## Environment Variables

Create a .env file (or configure these in Vercel Project Settings):

```env
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
VITE_PUBLIC_KEY=
```

Reference template file: .env.template

## Deploy to Vercel

1. Push this project to GitHub.
2. Import repository into Vercel.
3. Set Environment Variables:
   - VITE_SERVICE_ID
   - VITE_TEMPLATE_ID
   - VITE_PUBLIC_KEY
4. Build settings:
   - Build Command: npm run build
   - Output Directory: dist
5. Deploy.

The project already includes vercel.json for:

- SPA rewrites to index.html for client-side routing
- Long-term cache headers for built assets

## Social Preview Strategy (Open Graph)

- Primary share image is public/og-image.png (1200x630)
- Source artwork is public/og-image.svg
- Metadata is configured in index.html:
  - og:image
  - twitter:image
  - og:image:width
  - og:image:height

If you want a photo-based card instead, replace public/og-image.svg with a 1200x630 PNG/JPG and update the meta type accordingly.

## Content Update Guide

### Add or update project cards

Edit src/data/projectsData.js:

- title, subtitle, description, badges, tech, metrics
- liveUrl and sourceUrl
- image path from public/images, for example: /images/bookmyappointment-banner.png

### Replace project images

1. Drop image file into public/images.
2. Update the corresponding image field in src/data/projectsData.js.

## Final Pre-Launch Checklist

- npm run lint passes
- npm run build passes
- All project banner image paths in src/data/projectsData.js resolve correctly
- Contact form environment variables set in Vercel
- Replace canonical and og:url values in index.html with your final custom domain URL after go-live
- Domain connected and HTTPS active
