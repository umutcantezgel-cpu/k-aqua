# Original User Request

## 2026-06-10T16:04:53Z

# Teamwork Project Prompt

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

Redesign and massively expand the 9 pages of the K-Aqua Next.js application. Remove all extreme 3D/WebGL and scroll-hijacking animations in favor of a clean, bright, professional light theme, while expanding the text content by another 10x for maximum SEO depth and resolving any existing bugs.

Working directory: /Users/umurey/Downloads/k-aqua-main
Integrity mode: development

## Requirements

### R1. Remove Extreme Animations
Remove all `WebGLCanvas`, `ParallaxTilt`, and heavy Framer Motion scroll-hijacking. Retain only subtle fade-ins.

### R2. 10x Content Expansion
Expand the text content on all 9 routes (`/`, `/products`, `/solutions`, `/about`, `/service`, `/news`, `/career`, `/contact`, `/references`) by another factor of 10x, focusing on extreme SEO depth and professional B2B value. The agent team is encouraged to break these pages down into smaller, semantic sub-components (e.g., in a `components/sections/` folder) to handle the massive size.

### R3. Strict Light Theme
Enforce a strict, bright, and professional light theme (`bg-white`, `bg-slate-50`, `border-slate-200`) with soft shadows. Remove all dark mode styles (`bg-zinc-950`, `bg-[#0a0a0a]`, etc.).

## Acceptance Criteria

### Content and Architecture
- [ ] No `WebGLCanvas` or `ParallaxTilt` imports or usages exist in the codebase.
- [ ] No dark mode classes (like `bg-zinc-950` or `bg-[#0a0a0a]`) exist in the `components/pages/` directory.
- [ ] The local dev server (`npm run dev`) builds and runs without errors.
- [ ] The user can manually click through all 9 routes and verify a massive increase in text depth and a clean, bug-free, bright design.
