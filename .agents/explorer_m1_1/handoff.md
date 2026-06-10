# Observation
- Found two UI component files: `components/ui/WebGLCanvas.tsx` and `components/ui/ParallaxTilt.tsx`.
- Ran `grep_search` across the workspace and found these components are imported and used exclusively within the `components/pages` directory.
- The 9 files that import and use them are:
  1. `components/pages/SolutionsClient.tsx`
  2. `components/pages/ReferencesClient.tsx`
  3. `components/pages/ProductsClient.tsx`
  4. `components/pages/ServiceClient.tsx`
  5. `components/pages/ContactClient.tsx`
  6. `components/pages/NewsClient.tsx`
  7. `components/pages/HomeClient.tsx`
  8. `components/pages/AboutClient.tsx`
  9. `components/pages/CareerClient.tsx`
- In these files, `<WebGLCanvas>` is rendered either directly or wrapped inside `<ParallaxTilt>`.
- In some cases (e.g., `AboutClient.tsx` and `CareerClient.tsx`), `<ParallaxTilt>` acts as a wrapper around other UI elements (like text boxes and layout divs) in addition to `<WebGLCanvas>`. 
- `AboutClient.tsx` dynamically imports `WebGLCanvas` using `next/dynamic`.

# Logic Chain
1. The objective is to globally remove `WebGLCanvas` and `ParallaxTilt` components.
2. Since these components are used as wrappers and decorative visuals, simply removing the `<WebGLCanvas>` tags is straightforward.
3. However, just deleting `<ParallaxTilt>` could break the structure and layout if it wraps other essential content (e.g., text elements in `AboutClient.tsx`).
4. Therefore, `<ParallaxTilt>` should be replaced with a standard `<div>`, carrying over the `className` prop to preserve the layout structure, while removing ParallaxTilt-specific props like `tiltReverse`.
5. The `WebGLCanvas` imports (including the `next/dynamic` ones) and `ParallaxTilt` imports must be removed from all 9 page client files.

# Caveats
- Some layout containers may become empty after removing the inner `<WebGLCanvas>` component (e.g. hero sections with an absolute positioned `<ParallaxTilt>` holding the canvas). These empty div containers will remain as structural placeholders or with their gradient backgrounds, which is expected to retain the page dimensions.

# Conclusion
The fix strategy is:
1. Delete the files `components/ui/WebGLCanvas.tsx` and `components/ui/ParallaxTilt.tsx`.
2. In the 9 `components/pages/*Client.tsx` files listed above:
   - Remove the `import` statements for `ParallaxTilt` and `WebGLCanvas`. (Note: In `AboutClient.tsx`, delete the `const WebGLCanvas = dynamic(...)` declaration).
   - Delete all `<WebGLCanvas />` elements.
   - Convert all `<ParallaxTilt>` and `</ParallaxTilt>` wrapper tags to standard `<div>` and `</div>` tags.
   - Preserve the `className` attributes on these new `<div>` tags.
   - Remove any `ParallaxTilt`-specific properties such as `tiltReverse={true}` or `tiltReverse`.

# Verification Method
1. Run `grep -r "WebGLCanvas" components/` and `grep -r "ParallaxTilt" components/`. Both should return no results.
2. Run `npm run build` or the Next.js build command to ensure there are no compilation errors related to missing modules or syntax errors from deleted tags.
