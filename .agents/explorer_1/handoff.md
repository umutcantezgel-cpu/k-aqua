# Handoff: Milestone 3 - Career Page Redesign and Expansion Strategy

## 1. Observation
- The `SCOPE.md` and `PROJECT.md` documents specify that Milestone 3 involves expanding `components/pages/CareerClient.tsx` by 10x for extreme SEO depth.
- Constraints require a strict light theme, no WebGL or extreme scroll hijacking, and breaking down content into `components/sections/` prefixed with `Career`.
- The existing `CareerClient.tsx` contains 5 logical sections: Hero, Manifesto, Market Position, Philosophy, and Invitation/CTA.
- The `ls -la components/sections/` command indicates that no `Career*` prefixed sections currently exist.

## 2. Logic Chain
- To achieve a 10x expansion for SEO depth, the page must cover a much broader spectrum of employment-related topics than its current iteration.
- We must port the existing 5 sections into dedicated components (`CareerHeroSection`, `CareerManifestoSection`, `CareerMarketPositionSection`, `CareerPhilosophySection`, `CareerCtaSection`).
- To meet the SEO expansion goals, we need to introduce new sections targeting high-value career-related queries: `CareerBenefitsSection`, `CareerLocationsSection`, `CareerDepartmentsSection`, `CareerCultureSection`, `CareerStudentsSection`, `CareerProcessSection`, `CareerFaqSection`, and `CareerJobsSection`.
- By using semantic HTML and separating these topics, we create a robust, keyword-rich structure (e.g., job locations, specific department roles, benefits, interview processes).
- Enforcing the `Career` prefix guarantees no conflicts with parallel milestone work.
- Relying strictly on Tailwind's light mode classes (`bg-slate-50`, `text-slate-900`) and simple Framer Motion fade-ins satisfies the design constraints.

## 3. Caveats
- I did not write the actual source code or copy text for the new components (read-only constraint).
- The `CareerJobsSection` will use static placeholder data; if a CMS or API is intended later, it will need to be connected by the implementation agent.

## 4. Conclusion
The implementation agent should proceed with creating 13 distinct section components inside `components/sections/`, prefixed with `Career`, as detailed in `/Users/umurey/Downloads/k-aqua-main/.agents/explorer_1/plan.md`. They should then refactor `CareerClient.tsx` to orchestrate these components sequentially. This architecture cleanly separates concerns, massively expands SEO footprint, and strictly adheres to the project's styling and interaction rules.

## 5. Verification Method
- **Files to Inspect**: Verify that `components/pages/CareerClient.tsx` only contains imports and rendering of `Career*` section components.
- **Section Existence**: Check `ls -la components/sections/Career*` to ensure all 13 components have been created.
- **Build and Test**: Run `npm run build` or the Next.js equivalent to ensure the page compiles without errors.
- **Visual Inspection**: Run the dev server and verify no dark mode classes are present and no scroll-hijacking/WebGL components are utilized.
