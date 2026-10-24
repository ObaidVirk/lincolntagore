# Lincoln Tagore

Modern marketing website and workspace dashboard for Lincoln Tagore, built with Next.js, TypeScript, and Tailwind CSS.

[![CI](https://github.com/ObaidVirk/lincolntagore/actions/workflows/ci.yml/badge.svg)](https://github.com/ObaidVirk/lincolntagore/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

## Preview

### Homepage hero

![Lincoln Tagore homepage hero](./public/homepage-hero.png)

### Workspace dashboard

![Lincoln Tagore admin dashboard](./public/adminpanel.png)

## Features

- Responsive marketing pages for services, solutions, pricing, resources, and case studies
- Workspace login and dashboard views for users, analytics, and settings
- Stripe Checkout subscription flow
- Language selector with 20 translations
- Accessible, responsive UI built with Tailwind CSS
- Server-side validation for Stripe and admin credentials

## Tech stack

- Next.js 14 App Router
- React 18
- TypeScript with strict checking
- Tailwind CSS
- Stripe Checkout
- Lucide React icons

## Getting started

### Prerequisites

- Node.js 18.17 or later
- npm
- Stripe account credentials for checkout testing

### Installation

```bash
git clone https://github.com/ObaidVirk/lincolntagore.git
cd lincolntagore
npm install
```

Create a local environment file:

```bash
copy .env.example .env.local
```

Fill in the values in `.env.local`. Keep this file local and never commit credentials.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Scope | Description |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_NAME` | Yes | Browser | Public site name |
| `ADMIN_EMAIL` | Yes | Server | Admin login email |
| `ADMIN_PASSWORD` | Yes | Server | Admin login password for the demo |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Yes | Browser | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Yes | Server | Stripe secret key |

`ADMIN_PASSWORD` and `STRIPE_SECRET_KEY` are server-only values. Do not prefix private credentials with `NEXT_PUBLIC_`.

The included admin login is a demo flow backed by environment credentials and browser storage. For production use, replace it with a complete authentication solution using secure, HTTP-only sessions, password hashing, rate limiting, and persistent user management.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run Next.js ESLint checks |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run build` | Create a production build |
| `npm run check` | Run lint, type checking, and production build |
| `npm run start` | Serve the production build |

## Project structure

```text
app/
  (site)/       Public marketing pages
  api/          Server-side API routes
  dashboard/    Protected workspace views
components/     Shared UI components
public/         Images and static assets
translations/   Localized copy
```

## Deployment

The application can be deployed to Vercel or any host that supports Next.js. Configure the environment variables from the table above in the deployment provider before building.

## Contributing

Bug reports and pull requests are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a change.

## Security

Please report security issues privately as described in [SECURITY.md](./SECURITY.md). Never include credentials or other sensitive data in issues.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
