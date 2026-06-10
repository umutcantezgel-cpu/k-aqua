# Project: K-Aqua Redesign and Content Expansion

## Architecture
- Next.js 15 App Router
- Tailwind CSS (strict light theme)
- Pages use Client Components from `components/pages/`
- Break down expanded content into `components/sections/`

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Global Cleanup & Setup | Remove WebGLCanvas, ParallaxTilt components from components/ui/. Remove dark mode classes from layout. | none | DONE |
| 2 | Pages Batch 1 | Redesign & expand Home, About, Contact | M1 | DONE |
| 3 | Pages Batch 2 | Redesign & expand Products, Solutions, Service | M1 | DONE |
| 4 | Pages Batch 3 | Redesign & expand References, News, Career | M1 | DONE |

## Interface Contracts
### `components/pages/` ↔ `components/sections/`
- Section components should accept standard HTML props (e.g., `className`) and focus on semantic, SEO-rich content.
- Use simple `motion.div` with `initial={{ opacity: 0 }}` and `animate={{ opacity: 1 }}` for subtle fade-ins, avoiding scroll hijacking.
- **CRITICAL PARALLEL EXECUTION RULE**: To avoid conflicts, every new section component created must be prefixed with its page name (e.g. `HomeHeroSection.tsx`, `AboutStatsSection.tsx`, `ContactFormSection.tsx`). DO NOT create generic components like `HeroSection.tsx` or `CTASection.tsx` that might conflict with other pages being built simultaneously.
