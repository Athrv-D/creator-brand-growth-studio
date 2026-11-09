# Creator Brand Growth Studio

A website for creators and personal brands to turn their audience into customers through a professional online presence.

## Project overview

The homepage introduces the service, explains the benefits of having a dedicated creator website, and provides a form for requesting a free demo.

The demo request form currently uses Supabase.

## Tech stack

- React 19
- TanStack Start and TanStack Router
- TypeScript
- Vite
- Tailwind CSS v4
- Supabase
- Drizzle ORM

## Getting started

### Requirements

- [Bun](https://bun.sh/)

### Install dependencies

```bash
bun install
```

### Configure environment variables

Create a local `.env` file using `.env.example` as a reference. Add the required Supabase project URL and publishable key.

Never commit `.env` or server-only credentials.

### Run locally

```bash
bun run dev
```

### Production build

```bash
bun run build
```

## Available scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Build the production application |
| `bun run preview` | Preview the production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format project files with Prettier |
| `bun run test` | Run the test suite |

## Repository structure

- `src/routes/` — application routes
- `src/components/` — reusable UI components
- `src/integrations/` — external service integrations
- `src/lib/` — shared utilities and application helpers
- `src/styles.css` — global styles and design tokens
- `public/` — static public assets
- `drizzle/` — database schema and migrations
