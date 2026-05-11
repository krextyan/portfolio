# Portfolio + Activity Log

A clean, minimal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Update Content

### ➕ Add a new project

Edit `data/projects.json` and add a new object:

```json
{
  "title": "Your Project Name",
  "description": "What it does and why it matters.",
  "techStack": ["React", "Node.js"],
  "completionDate": "2026-06-01",
  "category": "Fullstack",
  "image": "/images/your-image.png"
}
```

Place images in `public/images/`. Done — no code changes needed.

---

### 📝 Add a new log entry

Create a new `.md` file in `content/logs/`:

```
content/logs/week-3-new-feature.md
```

With this format:

```md
---
title: "Week 3 — New Feature"
date: "2026-05-10"
---

Your content here using regular **Markdown**.

## A Heading

- A list item
- Another item
```

The slug (URL) is derived from the filename: `/logs/week-3-new-feature`

---

## Project Structure

```
/app
  /work              → /work page (all projects + filters)
  /logs              → /logs index page
  /logs/[slug]       → individual log pages (auto-generated)
  layout.tsx         → root layout (Navbar, Footer)
  page.tsx           → home page

/components
  Navbar.tsx         → top navigation
  Footer.tsx         → footer
  Button.tsx         → reusable button / link
  Badge.tsx          → tech stack badge
  ProjectCard.tsx    → project display card
  LogCard.tsx        → log preview card

/content/logs        → Markdown log files (add new logs here)
/data
  projects.json      → all project data (add new projects here)
/lib
  types.ts           → shared TypeScript interfaces
  projects.ts        → helpers for loading project data
  logs.ts            → helpers for reading Markdown files
/public/images       → project screenshots and images
```

## Customizing

- **Colors / fonts**: Edit the CSS variables at the top of `app/globals.css`
- **Your name / bio**: Edit `app/page.tsx` (Hero section) and `components/Navbar.tsx`
- **Social links**: Edit `components/Footer.tsx`
- **Navigation links**: Edit the `NAV_LINKS` array in `components/Navbar.tsx`
