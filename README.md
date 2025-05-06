# Utsav Mishra Portfolio

A modern portfolio website built with Next.js, React, and Tailwind CSS.

## Deployment to Vercel

This project is configured for seamless deployment on Vercel. Follow these steps to deploy:

1. Push your code to a GitHub repository
2. Log in to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Keep all default settings (the project is pre-configured for Vercel)
6. Click "Deploy"

## Environment Variables

The following environment variables are used in production:

- `NEXT_PUBLIC_SITE_URL`: The URL of your deployed site

## Development

```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build
```

## Project Structure

- `app/`: Next.js app directory with pages and layouts
- `components/`: React components
- `public/`: Static assets
- `styles/`: Global CSS styles
- `lib/`: Utility functions
- `hooks/`: Custom React hooks