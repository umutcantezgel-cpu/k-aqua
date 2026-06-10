# Handoff Report: Contact Page Analysis & Expansion Plan

## 1. Observation
- Analyzed `/Users/umurey/Downloads/k-aqua-main/components/pages/ContactClient.tsx`. The file currently contains three inline section components: `ContactHero`, `GlobalOperations`, and `LegalSection`.
- Identified scroll hijacking: `ContactHero` uses `useScroll` and `useTransform` from `framer-motion` to animate `yText` and `opacity` on scroll. `GlobalOperations` uses `useScroll` and `useTransform` to animate `scaleIn` and `opacityIn`.
- Did not find any `dark:` utility classes in `ContactClient.tsx` (the project currently uses semantic classes like `bg-surface`, `bg-primary`, enforcing the strict light theme per `PROJECT.md`).
- Read `PROJECT.md` which confirmed the architecture (Next.js 15 App Router, Tailwind CSS strict light theme, Client Components in `components/pages/`, extracted sections in `components/sections/`). The interface contract specifies using standard HTML props for section components and simple `motion.div` fade-ins (`initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`) instead of scroll hijacking. Every section must be prefixed with the page name (e.g. `ContactHeroSection.tsx`).

## 2. Logic Chain
- To follow the architecture outlined in `PROJECT.md`, the inline components (`ContactHero`, `GlobalOperations`, `LegalSection`) currently residing in `ContactClient.tsx` must be extracted into their own files under `components/sections/` and renamed with the "Contact" prefix (e.g., `ContactHeroSection.tsx`, `ContactGlobalOperationsSection.tsx`, `ContactLegalSection.tsx`).
- The scroll hijacking features (`useScroll`, `useTransform`) from `framer-motion` violate the new design guidelines and must be removed. They should be replaced with simple `initial={{ opacity: 0 }}` and `animate={{ opacity: 1 }}` (or `whileInView`) transition effects.
- To achieve a "10x SEO content expansion," the page needs significantly more textual content targeting relevant keywords (e.g., enterprise aquatic engineering, global distribution, technical support, B2B aquatic solutions). This requires adding new, targeted section components such as an FAQ, Department Directory, Global Network detail, and a structured Contact Form.

## 3. Caveats
- `SCOPE.md` was referenced in the user request, but the file does not exist in the project root. The analysis relies fully on `PROJECT.md` and the existing `ContactClient.tsx` content.
- The exact copy/text for the 10x SEO expansion will need to be written by the implementer or content writer, as this plan outlines the structural components rather than the final copy.
- No `dark:` classes were found in the existing file, so no removal of such classes was necessary.

## 4. Conclusion
**Proposed Component Structure:**
1. **`components/sections/ContactHeroSection.tsx`** (Extracted & Modified: Remove scroll hijacking `useScroll`/`useTransform`, replace with standard fade-in)
2. **`components/sections/ContactGlobalOperationsSection.tsx`** (Extracted & Modified: Remove scroll hijacking, replace with `whileInView` fade-in)
3. **`components/sections/ContactLegalSection.tsx`** (Extracted: Keep existing `whileInView` animations)
4. **`components/sections/ContactFormSection.tsx`** (New: Structured inquiry form for B2B/Enterprise leads)
5. **`components/sections/ContactDepartmentsSection.tsx`** (New: Directory for specific departments like Sales, Technical Support, PR/Media)
6. **`components/sections/ContactGlobalNetworkSection.tsx`** (New: Details on international distributors, regions served, and global logistics)
7. **`components/sections/ContactFAQSection.tsx`** (New: SEO-rich accordion with common queries on warranty, enterprise pricing, and shipping)

**ContactClient.tsx Refactoring:**
- Update `components/pages/ContactClient.tsx` to simply import and stack these section components sequentially.

## 5. Verification Method
- **Verify Extraction:** Check that `components/pages/ContactClient.tsx` imports the above sections from `components/sections/` and contains no inline section implementations.
- **Verify Scroll Hijacking Removal:** Run `grep -rE "useScroll|useTransform" components/sections/Contact*` to ensure no scroll hijacking functions from framer-motion are present.
- **Verify Dark Mode Classes:** Run `grep -r "dark:" components/sections/Contact* components/pages/ContactClient.tsx` to ensure no dark mode utility classes exist.
- **Verify Build/Types:** Run `npm run build` to ensure no import errors or TypeScript issues arise from the refactored components.
