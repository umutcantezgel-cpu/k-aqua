# Service Page 10x Expansion Strategy

## 1. Observation
- The target file `components/pages/ServiceClient.tsx` currently functions as the `/service` route and focuses on "Customer Service & Downloads" (Engineering Resources).
- **Current Architecture**: It contains a hero section with a WebGL background container, a 3-item Bento Grid for PDF downloads, and an aggressive horizontal scroll section (`400vw` track) for 4 installation videos using `motion/react` `useScroll`.
- **Theme**: Currently uses `bg-white`, `text-slate-900`, but relies on opacity tricks and dark overlays in the video section.
- **Content Density**: It is very light on textual content (around 300 words), relying heavily on external PDFs and YouTube videos, which severely limits organic SEO indexing.
- **Components**: There are currently no `Service` prefixed components in `components/sections/`.

## 2. Logic Chain
- **Constraint Resolution**: The prompt requires the removal of WebGL and extreme scroll hijacking. By replacing the horizontal scroll with a vertical layout, we not only satisfy the constraint but significantly improve SEO by allowing space for detailed textual descriptions of each installation protocol.
- **SEO 10x Expansion**: To achieve 10x SEO depth, we must transition the page from a simple "portal/link" page to a comprehensive "Technical Knowledge Base". Search engines need rich text about PP-R/PP-RCT piping, material science, quality assurance, and step-by-step welding techniques.
- **Component Breakdown**: Breaking the page into multiple `Service` prefixed components in `components/sections/` will make the `ServiceClient.tsx` file clean, modular, and easy to maintain. Each component will target a specific cluster of SEO keywords.
- **Theming**: Enforcing strict light mode (`bg-white`, `bg-slate-50`, `text-slate-900`, `text-slate-600`) ensures a professional, bright "engineering whitepaper" aesthetic. All `dark:` classes or inverted color schemes will be avoided.

## 3. Caveats
- As the Explorer, I am not implementing the code. The implementer must generate the actual text content for the new sections (like the FAQ and Material Science) based on general knowledge of PP-R piping and the hints provided in the current codebase.
- The German services list found in `lib/data/services.ts` was ignored, as the actual deployed `/service` route is completely in English and targets Engineering/Technical Data. The strategy is built around expanding the English technical content.

## 4. Conclusion & Component Breakdown
The `components/pages/ServiceClient.tsx` should be entirely refactored to simply import and stack the following new components, ensuring normal vertical scrolling and no WebGL.

### Required New Components (Exact Paths)

1. **`components/sections/ServiceHeroSection.tsx`**
   - **Purpose**: A clean, bright hero section replacing the WebGL version. Clear H1 ("Engineering & Technical Resources"). Text-focused, highly legible.

2. **`components/sections/ServiceOverviewSection.tsx`**
   - **Purpose**: 10x SEO text. A high-level, keyword-rich introduction to K-Aqua's commitment to precision engineering, supporting architects, planners, and installers with PP-R and PP-RCT systems.

3. **`components/sections/ServiceDocumentLibrarySection.tsx`**
   - **Purpose**: Replaces the 3-item Bento Grid. A comprehensive, categorized list or table of downloads (Product Catalogs, Technical Data Sheets, Material Safety Data Sheets). Allows for detailed descriptions next to each download link.

4. **`components/sections/ServiceMaterialScienceSection.tsx`**
   - **Purpose**: Deep dive into the properties of K-Aqua PP-R/PP-RCT. Explains high-molecular-weight polypropylene, thermal stability, acoustic dampening, and chemical resistance. Excellent for long-tail technical SEO queries.

5. **`components/sections/ServiceInstallationProtocolsSection.tsx`**
   - **Purpose**: Replaces the horizontal scroll. A vertical, detailed section for the 4 welding techniques (Manual Socket, Machine Socket, Electrofusion, Butt Fusion). Each block will contain the video link/thumbnail alongside rich text detailing required tools, temperatures, and step-by-step procedures.

6. **`components/sections/ServiceQualityAssuranceSection.tsx`**
   - **Purpose**: Expands on the QA PDF. Details ISO 9001 standards, zero-defect policy, automated inline extrusion checks, and third-party certifications (TÜV, DVGW). 

7. **`components/sections/ServiceTrainingAcademySection.tsx`**
   - **Purpose**: Introduces the K-Aqua Academy for installers to get certified. Discusses on-site training and official certification benefits.

8. **`components/sections/ServiceFAQSection.tsx`**
   - **Purpose**: An accordion of frequently asked technical questions (e.g., "What is the maximum operating temperature for PP-RCT?", "How long must a fusion joint cool?"). An SEO goldmine.

9. **`components/sections/ServiceCTASection.tsx`**
   - **Purpose**: A final, clean call-to-action block encouraging users to contact engineering support or schedule a consultation.

## 5. Verification Method
- **Code Inspection**: Verify that all 9 components exist in `components/sections/` with the exact names proposed.
- **Client Component Verification**: Check `components/pages/ServiceClient.tsx` to ensure `useScroll`, `useTransform`, and WebGL placeholders are completely removed.
- **Visual & Functional Test**: Start the Next.js dev server, navigate to `/service`, and verify the page scrolls vertically, contains a massive amount of readable text, and strictly adheres to a light/bright theme with no dark mode classes.
- **Build Check**: Run `npm run build` to ensure no missing imports or type errors.
