# Career Page Expansion Strategy

## 1. Observation
- `CareerClient.tsx` currently contains 5 hardcoded sections: Hero, Manifesto, Market Position, Philosophy, and CTA. 
- `PROJECT.md` dictates: Next.js 15 App Router, Tailwind CSS (strict light theme), break down into `components/sections/`, prefix new components with the page name (e.g. `CareerHeroSection.tsx`), and use subtle `motion.div` fade-ins instead of scroll hijacking.
- The user's request requires a 10x content expansion for extreme SEO depth, specifically highlighting: job postings, company culture, benefits, and location info.

## 2. Logic Chain
- To achieve a 10x SEO expansion, the 5 current sections must be extracted into their own prefixed components and heavily supplemented with new, highly-structured semantic HTML sections.
- New sections will focus on the missing SEO content areas: Job Listings, Benefits, Culture, Application Process, Locations, FAQ, and Testimonials. 
- Prefixing components with `Career*` complies with the `PROJECT.md` contract.
- Using `framer-motion` for simple opacity/transform animations with `viewport={{ once: true }}` will provide the required professional motion without scroll-hijacking or WebGL.

## 3. Proposed Component Architecture

All components to be placed in `components/sections/`:

1. **`CareerHeroSection.tsx`** - The initial impact hero. Keep light and airy.
2. **`CareerManifestoSection.tsx`** - Extended from existing.
3. **`CareerCultureSection.tsx`** (NEW) - SEO content about the work environment, diversity, and engineering-first culture.
4. **`CareerBenefitsSection.tsx`** (NEW) - Comprehensive grid/list of benefits (health, pension, continuous learning, etc.).
5. **`CareerMarketPositionSection.tsx`** - Extracted from existing.
6. **`CareerPhilosophySection.tsx`** - Extracted from existing.
7. **`CareerJobListingsSection.tsx`** (NEW) - SEO-rich list of open roles (Engineering, Sales, etc.) with structured data capabilities.
8. **`CareerApplicationProcessSection.tsx`** (NEW) - Step-by-step SEO content describing how to apply and interview.
9. **`CareerLocationSection.tsx`** (NEW) - Global HQ and office information, accessibility, and region-specific benefits.
10. **`CareerEmployeeStoriesSection.tsx`** (NEW) - Testimonials to build trust and add semantic keywords.
11. **`CareerFAQSection.tsx`** (NEW) - Extensive accordion of FAQs for rich-snippet SEO.
12. **`CareerCTASection.tsx`** - Extracted from existing CTA.

## 4. `CareerClient.tsx` Refactor Strategy
The main client component will be simplified to a clean orchestrator of these sections:

```tsx
"use client";

import React from 'react';
import CareerHeroSection from '@/components/sections/CareerHeroSection';
import CareerManifestoSection from '@/components/sections/CareerManifestoSection';
import CareerCultureSection from '@/components/sections/CareerCultureSection';
import CareerBenefitsSection from '@/components/sections/CareerBenefitsSection';
import CareerMarketPositionSection from '@/components/sections/CareerMarketPositionSection';
import CareerPhilosophySection from '@/components/sections/CareerPhilosophySection';
import CareerJobListingsSection from '@/components/sections/CareerJobListingsSection';
import CareerApplicationProcessSection from '@/components/sections/CareerApplicationProcessSection';
import CareerLocationSection from '@/components/sections/CareerLocationSection';
import CareerEmployeeStoriesSection from '@/components/sections/CareerEmployeeStoriesSection';
import CareerFAQSection from '@/components/sections/CareerFAQSection';
import CareerCTASection from '@/components/sections/CareerCTASection';

export default function CareerClient() {
  return (
    <main className="relative flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#431074] selection:text-white overflow-hidden">
      <CareerHeroSection />
      <CareerManifestoSection />
      <CareerCultureSection />
      <CareerBenefitsSection />
      <CareerMarketPositionSection />
      <CareerPhilosophySection />
      <CareerJobListingsSection />
      <CareerApplicationProcessSection />
      <CareerLocationSection />
      <CareerEmployeeStoriesSection />
      <CareerFAQSection />
      <CareerCTASection />
    </main>
  );
}
```

## 5. Strict Constraints to Observe
- No `dark:bg-*` or `dark:text-*` classes anywhere.
- No `useScroll` combined with excessive `useTransform` that might hijack scrolling or create jank; standard `whileInView` fade-ins are preferred.
- All new files must be prefixed with `Career`.
