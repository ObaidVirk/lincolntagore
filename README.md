# Lincoln Tagore Frontend

Modern marketing and admin frontend for Lincoln Tagore, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS

## Features

- UI clone and branded marketing pages
- Login and signup pages
- Admin dashboard (analytics, users, settings)
- Language selector with 20 translations

## Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Environment Variables

Create `.env.local` in the project root using `.env.example` as the template.

Required variables:

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_ADMIN_EMAIL`
- `NEXT_PUBLIC_ADMIN_PASSWORD`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

Do not commit `.env.local` or real credentials to git.
