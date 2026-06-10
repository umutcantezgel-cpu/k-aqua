# Handoff Report: Career Page Redesign and Expansion Strategy

## 1. Observation
- The current `components/pages/CareerClient.tsx` is a single file of 253 lines containing 5 hardcoded sections: Hero, Manifesto, Market Position, Philosophy, and CTA.
- It conforms to the light-theme requirement (`bg-slate-50`, `text-slate-800`, `text-slate-900`) and does not use any dark mode (`dark:`) classes.
- It does not contain WebGL or extreme scroll hijacking, using simple `framer-motion` for transforms and `whileInView` fade-ins.
- `PROJECT.md` rules mandate Next.js 15 App Router, Tailwind CSS (strictly light theme), and requires new components to be isolated in `components/sections/` prefixed with the page name (e.g., `CareerHeroSection.tsx`).
- `SCOPE.md` states the goal is to redesign and 10x expand the page for extreme SEO depth, focusing on job postings, company culture, benefits, and location info.

## 2. Logic Chain
- To achieve a 10x content expansion and maximize SEO depth, the page must cover the full spectrum of career-related search intents. We need to go beyond a simple manifesto and include concrete details that prospective employees search for.
- Extracting existing content and introducing new semantic sections will satisfy the architectural constraints of `PROJECT.md`.
- The new structure will consist of 10 targeted components.
- The theme will remain exclusively light-mode and professional. We will avoid complex interactive canvases or heavy scroll-hijacking, sticking to simple `framer-motion` fade-ins (`initial={{ opacity: 0 }}` and `animate={{ opacity: 1 }}`) as instructed.

## 3. Proposed Architecture & Sections
We will create the following components in `components/sections/`:

1. **`CareerHeroSection.tsx`**: Replaces the current hero. Clean, professional intro with subtle motion.
2. **`CareerManifestoSection.tsx`**: Extracted "The Manifesto" / mission statement.
3. **`CareerCultureSection.tsx`**: (NEW) Detailed view of the work environment, innovation focus, and team collaboration. High SEO value for "company culture".
4. **`CareerMarketPositionSection.tsx`**: Extracted from the current Market Position grid, maintaining the professional tone.
5. **`CareerBenefitsSection.tsx`**: (NEW) Comprehensive grid of employee benefits (insurance, training, time off, facility amenities) to capture "benefits" and "perks" SEO.
6. **`CareerLocationsSection.tsx`**: (NEW) Details on the HQ in Germany, facilities, and global reach. Strong local SEO signals.
7. **`CareerJobPostingsSection.tsx`**: (NEW) Core SEO section. A list/grid of open roles categorized by department (Engineering, Manufacturing, Sales, Logistics).
8. **`CareerHiringProcessSection.tsx`**: (NEW) Step-by-step timeline of the recruitment process (Application -> Interview -> Technical -> Offer).
9. **`CareerFAQSection.tsx`**: (NEW) Accordion of common questions to capture long-tail SEO queries (e.g., "What is the interview process at K-Aqua?").
10. **`CareerCTASection.tsx`**: Extracted "The Invitation" / HR contact info.

`CareerClient.tsx` will act as a clean container:
```tsx
"use client";
import CareerHeroSection from '@/components/sections/CareerHeroSection';
import CareerManifestoSection from '@/components/sections/CareerManifestoSection';
// ... other imports

export default function CareerClient() {
  return (
    <main className="relative flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#431074] selection:text-white overflow-hidden">
      <CareerHeroSection />
      <CareerManifestoSection />
      <CareerCultureSection />
      <CareerMarketPositionSection />
      <CareerBenefitsSection />
      <CareerLocationsSection />
      <CareerJobPostingsSection />
      <CareerHiringProcessSection />
      <CareerFAQSection />
      <CareerCTASection />
    </main>
  );
}
```

## 4. Caveats
- Since there is no CMS or backend attached, the job postings and FAQ data will need to be mocked. The implementer should generate realistic placeholder data that aligns with K-Aqua's brand (German engineering, professional, aggressive growth).
- The implementer must be careful to strictly avoid `dark:` classes when generating the massive amount of new Tailwind markup.
- Ensure `framer-motion` imports use `motion/react` as per Next.js 15 / React 19 compatibilities if already established in the codebase.

## 5. Conclusion
Breaking the page into 10 semantic, highly-targeted sections allows for the requested 10x content expansion while maintaining a strict, clean, professional architecture. This strategy directly addresses the SEO requirements for jobs, culture, benefits, and locations without violating project constraints.

## 6. Verification Method
1. Run `ls -l components/sections/Career*.tsx` to verify all 10 components are created.
2. Inspect `components/pages/CareerClient.tsx` to verify it delegates cleanly to the new sections.
3. Run `grep -r "dark:" components/sections/Career*.tsx` to ensure zero dark mode classes slipped in.
4. Run `npm run build` to verify there are no hydration or import errors.
