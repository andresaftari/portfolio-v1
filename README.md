# Andre Saftari — Portfolio

A one-page personal portfolio: hero, filterable work grid with a project dialog, about, journey and contact.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion and Biome.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command                       | What it does                           |
| ----------------------------- | -------------------------------------- |
| `npm run dev`                 | Start the dev server                   |
| `npm run build`               | Production build                       |
| `npm run start`               | Serve the production build             |
| `npm run lint`                | Biome check (lint, format, imports)    |
| `npm run format`              | Format with Biome                      |
| `npx tsc --noEmit`            | Type check                             |

## Assets

Add these to `public/Asset/` before deploying. They are not in the repo yet:

- `img/andre-portrait.png`
- `cv/Andre_Saftari_CV.pdf`
- `img/projects/budgee.png`
- `img/projects/stylens.png`

Project images that are missing show a "Preview not available" fallback.

## Project Structure

```text
src/
├─ app/          layout, page, global styles, app-level providers
├─ components/   ui/ (presentation only) and layout/ (header, footer, motion)
├─ features/     hero, portfolio, project-dialog, about, journey, contact
├─ hooks/        shared context hooks (motion, project dialog, active section)
├─ constants/    site content as data (projects, profile, motion)
├─ lib/          small helpers
└─ types/        shared types
```

Features never import each other; shared state goes through the hooks and providers.

## Editing Content

- **Projects:** add an entry to `projects` in `src/constants/projects.ts`. Its `category` must also be listed in `categories`.
- **Profile, experience, skills and links:** `src/constants/profile.ts`.
- **Colors, fonts and breakpoints:** theme tokens and custom variants in `src/app/globals.css`.

## Branches

- `main` is production. Nothing is pushed to it directly.
- `development` is the working branch.
- Other branches (`feat/*`, `fix/*`) merge into `development` by pull request.
- Deploying means a `development` → `main` promote pull request.
