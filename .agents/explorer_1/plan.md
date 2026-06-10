# Career Page Expansion Plan

## Goal
Redesign and expand `CareerClient.tsx` by 10x for extreme SEO depth, maintaining a strict light, bright, professional theme with no dark mode classes and no WebGL/extreme scroll hijacking. Break the page into `components/sections/Career*`.

## Proposed Architecture

`CareerClient.tsx` will be refactored to orchestrate the following semantic, SEO-rich section components:

1. **`CareerHeroSection.tsx`**
   - **Content**: H1 ("Careers at K-Aqua"), engaging subheadline, background imagery or subtle gradients. Focus keyword: "Careers at K-Aqua".
   - **Purpose**: High-impact entry point.

2. **`CareerManifestoSection.tsx`**
   - **Content**: "We do not just build pipes." Expand on mission and vision.
   - **Purpose**: Communicate corporate identity and purpose.

3. **`CareerMarketPositionSection.tsx`**
   - **Content**: Global reach, aggressive growth, market leadership.
   - **Purpose**: Showcase the company's stability and growth to attract top talent.

4. **`CareerPhilosophySection.tsx`**
   - **Content**: "Aggrandising by design." Innovation culture, continuous improvement.
   - **Purpose**: Set expectations for ambition and expertise.

5. **`CareerBenefitsSection.tsx`** (NEW)
   - **Content**: Comprehensive benefits package (health, retirement, work-life balance, continuous learning, modern workspace, international travel).
   - **Purpose**: Essential SEO for "K-Aqua employee benefits" and talent attraction.

6. **`CareerLocationsSection.tsx`** (NEW)
   - **Content**: Details on the HQ in Germany, commute, area lifestyle, and global offices.
   - **Purpose**: SEO for location-based job searches (e.g., "Engineering jobs in Germany").

7. **`CareerDepartmentsSection.tsx`** (NEW)
   - **Content**: Breakdowns of Engineering, Sales, Manufacturing, R&D, Logistics.
   - **Purpose**: Keyword-rich descriptions of different career paths and functions.

8. **`CareerCultureSection.tsx`** (NEW)
   - **Content**: Focus on diversity, inclusion, collaborative work environment, and global teams.
   - **Purpose**: Build trust and showcase company values.

9. **`CareerStudentsSection.tsx`** (NEW)
   - **Content**: Internships, apprenticeships, thesis programs, entry-level opportunities.
   - **Purpose**: Attract emerging talent and rank for student/graduate queries.

10. **`CareerProcessSection.tsx`** (NEW)
    - **Content**: Step-by-step guide to the hiring process (Application → Phone Screen → Technical/Cultural Interview → Offer).
    - **Purpose**: Transparency for candidates and structural content depth.

11. **`CareerFaqSection.tsx`** (NEW)
    - **Content**: Frequently asked questions about working at K-Aqua, work hours, remote policies, etc.
    - **Purpose**: High-value long-tail SEO queries (e.g., "What is the interview process like at K-Aqua").

12. **`CareerJobsSection.tsx`** (NEW)
    - **Content**: List of open positions categorized by department (static or placeholder for CMS integration).
    - **Purpose**: Target specific job title keywords (e.g., "Senior Polymer Engineer vacancy").

13. **`CareerCtaSection.tsx`**
    - **Content**: Final invitation to apply, HR contact info (email, phone).
    - **Purpose**: Conversion point.

## Design Guidelines
- **Theme**: Strict light theme (`bg-white`, `bg-slate-50`). Text in `text-slate-900`, `text-slate-600`.
- **Animations**: Use `motion.div` with subtle fade-ins (`initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`).
- **Scroll**: No scroll hijacking or complex parallax. Use standard DOM flow.
- **Components**: Place all in `components/sections/` prefixed with `Career`.

## Implementation Strategy
1. Create each section component in `components/sections/` using the specified naming convention.
2. Port existing content from `CareerClient.tsx` into the corresponding new components (`CareerHeroSection`, `CareerManifestoSection`, `CareerMarketPositionSection`, `CareerPhilosophySection`, `CareerCtaSection`).
3. Flesh out the new components with extensive, keyword-rich SEO copy.
4. Update `CareerClient.tsx` to import and render these components sequentially.
