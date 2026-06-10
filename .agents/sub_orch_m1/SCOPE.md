# Scope: Global Cleanup & Setup

## Architecture
- Next.js 15 App Router
- Tailwind CSS

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | WebGLCanvas and ParallaxTilt Cleanup | Delete components/ui/WebGLCanvas.tsx and components/ui/ParallaxTilt.tsx, and remove all imports/usages globally | none | DONE |
| 2 | Dark Mode Removal | Remove all dark mode utility classes (e.g., bg-zinc-950, text-zinc-*, dark:*) from app/layout.tsx, app/globals.css, and any other global wrappers. | M1 | DONE |
