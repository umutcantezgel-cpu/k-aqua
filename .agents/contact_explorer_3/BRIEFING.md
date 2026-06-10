# BRIEFING — 2026-06-10T11:44:00-07:00

## Mission
Plan the visual redesign of `components/pages/ContactClient.tsx` with a light theme, simple fade-ins, and prepare for 10x SEO content expansion.

## 🔒 My Identity
- Archetype: Contact UX/UI Pattern Analyzer
- Roles: UX/UI Analyst, Planner
- Working directory: /Users/umurey/Downloads/k-aqua-main/.agents/contact_explorer_3
- Original parent: 868a21b6-e2e3-4fec-b504-39d4b1519514
- Milestone: Milestone 3

## 🔒 Key Constraints
- Read-only investigation — do NOT implement
- Ensure strict light, bright, professional theme (`bg-white`, `bg-slate-50`). No dark mode classes.
- Remove extreme animations and scroll hijacking. Replace them with simple `framer-motion` fade-ins.
- Plan the UX flow for the massively expanded SEO content (10x).
- Write requirements and structural plan to `handoff.md`.

## Current Parent
- Conversation ID: 868a21b6-e2e3-4fec-b504-39d4b1519514
- Updated: 2026-06-10T11:44:00-07:00

## Investigation State
- **Explored paths**: `components/pages/ContactClient.tsx`
- **Key findings**: Current site uses complex `useScroll`/`useTransform` from `framer-motion` and dynamic color tokens like `bg-surface`. 
- **Unexplored areas**: None.

## Key Decisions Made
- Replace abstract color tokens (`bg-surface`, `text-on-surface`) with hardcoded Tailwind light mode classes (`bg-white`, `bg-slate-50`, `text-slate-900`, `text-slate-600`).
- Remove `useScroll`/`useTransform` and replace with `whileInView={{ opacity: 1, y: 0 }}`.
- Expand layout structure to include 4 new long-form SEO sections: German Engineering Standards, Procurement Process, FAQ, and Regional Distribution.

## Artifact Index
- handoff.md — UI/UX requirements and structural plan
