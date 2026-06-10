# Career Page Expansion Handoff

## 1. Observation
- `SCOPE.md` requires: Redesign and 10x expand `components/pages/CareerClient.tsx`. Prefix new components with `Career`.
- `PROJECT.md` mandates: Next.js 15 App Router, Tailwind CSS with a strict light theme (no dark mode), and simple `motion.div` fade-ins avoiding scroll hijacking.
- Current `CareerClient.tsx` (lines 41-252) contains 5 hardcoded sections: Hero, Manifesto, Market Position, Philosophy, and CTA. It uses `useScroll` for the Hero which should be simplified/retained as long as it doesn't hijack.
- The User Request specifically asks for SEO architecture focusing on: job postings, company culture, benefits, and location info.

## 2. Logic Chain
- To achieve the 10x SEO expansion while adhering to project rules, the current monolithic `CareerClient.tsx` must be deconstructed.
- The 5 existing sections must be moved to `components/sections/` and prefixed with `Career` (e.g., `CareerHeroSection.tsx`).
- To meet the SEO requirements, new semantic sections must be created and prefixed with `Career`:
  - `CareerCultureSection.tsx` for "company culture".
  - `CareerBenefitsSection.tsx` for "benefits".
  - `CareerJobListingsSection.tsx` for "job postings".
  - `CareerLocationSection.tsx` for "location info".
  - `CareerApplicationProcessSection.tsx`, `CareerEmployeeStoriesSection.tsx`, and `CareerFAQSection.tsx` to further deepen the SEO footprint.
- The final `CareerClient.tsx` will act solely as an orchestrator importing and rendering these 12 distinct section components in a logical narrative flow.

## 3. Caveats
- I did not write the exact copy for the 10x expansion. The implementer must generate extensive, professional, engineering-focused copy for the new sections to fulfill the "extreme SEO depth" requirement.
- I assumed the job listings can be hardcoded placeholder data for now, since no CMS or API was specified in the scope.

## 4. Conclusion
The implementation strategy is solid and strictly follows project rules. The implementer should create 12 distinct components in `components/sections/` (5 extracted, 7 new) and refactor `CareerClient.tsx` to compose them. All components must adhere strictly to the light theme and use simple `whileInView` framer-motion animations.

## 5. Verification Method
- **Observation Verification:** Inspect `components/pages/CareerClient.tsx` post-implementation to ensure it only contains import and composition logic.
- **Rules Verification:** `grep -r "dark:" components/sections/Career*.tsx` must return no results. `ls -la components/sections/ | grep "Career"` should show all 12 components.
- **Build Verification:** Run `npm run build` or the relevant build command to ensure the Next.js App Router successfully compiles the new client components without errors.
