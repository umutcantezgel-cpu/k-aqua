**Context**: Planning for Milestone 3 (Contact SEO Content Expansion).

## 1. Observation
The existing `components/pages/ContactClient.tsx` (280 lines) is visually refined but thin on text. It contains three basic sections: `ContactHero`, `GlobalOperations` (HQ address, phone, email, support email), and `LegalSection` (imprint and privacy). It currently lacks long-form B2B text, global office listings, defined support SLAs, frequently asked questions, and JSON-LD structured data. This thin content profile limits organic reach for high-value B2B procurement and support queries.

## 2. Logic Chain
- **Search Intent Match**: Enterprise buyers and distributors search for specific terms like "PPR pipe manufacturer Germany", "enterprise pipeline support SLA", and "become K-Aqua distributor". Expanding the page with targeted text sections captures this intent.
- **Component Architecture**: Breaking the single `ContactClient.tsx` file into multiple `Contact[Name]Section.tsx` files will keep the codebase modular, allowing independent iteration on complex sections like interactive maps or accordion FAQs.
- **Support & Global Footprint**: Adding "Support Tiers" and "Regional Hubs" establishes trust, demonstrating global scale and operational maturity, critical for high-end engineering brands.
- **Structured Data**: Implementing `Organization`, `LocalBusiness`, and `FAQPage` schemas via JSON-LD directly injects rich entities into Google's Knowledge Graph, drastically increasing the likelihood of rich snippet capture in SERPs.

## 3. Caveats
- **Fictionalized Regional Data**: Since exact addresses for K-Aqua's global hubs (beyond the German HQ) were not provided in the source code, placeholder regions (e.g., K-Aqua MENA, K-Aqua APAC) and Support Tier names have been drafted. The client will need to replace these with actual operational data before production deployment.
- **Form Implementation**: A `ContactSalesFormSection` is proposed for lead capture, but backend integration (e.g., API routes, CRM webhooks) is outside the scope of this pure frontend content strategy.

## 4. Conclusion
The contact page should be transformed from a basic vCard into a comprehensive Global Operations & Support hub. 

### Proposed Component Breakdown (to be created in `components/pages/contact/`):

1. **`ContactHeroSection.tsx`**
   - **Content**: Enhanced value proposition. "Direct access to German engineering excellence. Connect with K-Aqua for enterprise deployment, global distribution, and technical architectural support."

2. **`ContactGlobalOperationsSection.tsx`**
   - **Content**: Refined current HQ info, emphasizing the Waldsolms-Brandoberndorf facility as the central nervous system for R&D and QA.

3. **`ContactRegionalOfficesSection.tsx` (NEW)**
   - **Content**: Expand SEO footprint with global regions. 
     - *K-Aqua MENA (Middle East & North Africa)*: Focusing on high-temperature resilience solutions.
     - *K-Aqua APAC (Asia-Pacific)*: Focusing on rapid urban development infrastructure.
     - *K-Aqua Americas*: Focusing on commercial distribution networks.
   - **SEO Value**: Targets localized commercial intent ("PPR pipes UAE", "aquatic engineering Asia").

4. **`ContactSupportTiersSection.tsx` (NEW)**
   - **Content**: Define B2B SLAs.
     - *Tier 1: Commercial Distribution* (Onboarding, volume pricing, logistics).
     - *Tier 2: Project Engineering* (Blueprint analysis, custom manifold design, fluid dynamics consultation).
     - *Tier 3: Enterprise QA* (On-site training, forensic material analysis, lifetime warranty support).
   - **SEO Value**: Ranks for technical support and enterprise SLA keywords.

5. **`ContactFAQSection.tsx` (NEW)**
   - **Content**: Rich text Q&A.
     - *How do I apply to become an authorized K-Aqua distributor?*
     - *What are the standard lead times for international freight?*
     - *Do you offer on-site welding and installation certification?*
     - *How can I access DVGW and SKZ certification documents?*
     - *What is the engineering warranty on K-Aqua PPR systems?*
   - **SEO Value**: Captures long-tail "How to" and "What is" queries.

6. **`ContactLegalSection.tsx`**
   - **Content**: Existing imprint and privacy data, structurally enhanced for readability.

7. **`ContactSalesFormSection.tsx` (NEW)**
   - **Content**: A high-end, multi-step B2B inquiry form (Company, Role, Project Scale, Inquiry Type) to capture high-intent leads directly on the page.

8. **`ContactStructuredData.tsx` (NEW)**
   - **Content**: A headless component returning `<script type="application/ld+json">`.
   - **Schemas**: 
     - `@type: Organization` (KWT GmbH)
     - `@type: LocalBusiness` (HQ Address)
     - `@type: FAQPage` (Mapping the FAQ section)

## 5. Verification Method
1. **Implementation Check**: Verify that `components/pages/ContactClient.tsx` is refactored to import the new `Contact[Name]Section.tsx` components.
2. **SEO Check**: Inspect the rendered DOM to ensure the `<script type="application/ld+json">` tag exists and contains valid JSON with `FAQPage`, `Organization`, and `LocalBusiness` schemas.
3. **Build Check**: Run `npm run build` or `npm run lint` to ensure all new components are strictly typed and free of React hydration errors.
