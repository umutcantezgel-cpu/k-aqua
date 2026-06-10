# Handoff Report: WebGLCanvas and ParallaxTilt Cleanup (Milestone 1)

## 1. Observation
- `components/ui/WebGLCanvas.tsx` and `components/ui/ParallaxTilt.tsx` exist in the project.
- Searching for `WebGLCanvas` and `ParallaxTilt` (case-insensitive) across the codebase reveals they are imported and used in exactly 7 Client components within `components/pages/`:
  1. `ContactClient.tsx`
  2. `HomeClient.tsx`
  3. `NewsClient.tsx`
  4. `ProductsClient.tsx`
  5. `ReferencesClient.tsx`
  6. `ServiceClient.tsx`
  7. `SolutionsClient.tsx`
- The components are typically used together (`ParallaxTilt` wrapping `WebGLCanvas`) to create visual background effects.
- In some cases, `ParallaxTilt` wraps other substantive content (e.g., in `NewsClient.tsx` lines 56-70, it wraps status indicators and text).
- In some cases, `WebGLCanvas` is used standalone without `ParallaxTilt` (e.g., `ReferencesClient.tsx` line 121).
- `ORIGINAL_REQUEST.md` and `PROJECT.md` specify removing all usages of these components globally.

## 2. Logic Chain
1. Since the scope requires deleting `WebGLCanvas` and `ParallaxTilt` entirely, their component files and any imports of them must be completely removed.
2. For usages where `WebGLCanvas` is standalone or wrapped in purely decorative `div`s, deleting the element (and its decorative wrappers) safely removes the usage without breaking layouts.
3. For usages where `ParallaxTilt` wraps only `WebGLCanvas` and purely decorative visual layers (e.g., background gradients), deleting the `ParallaxTilt` block entirely is safe.
4. For usages where `ParallaxTilt` acts as a layout container containing other important DOM nodes (like in `NewsClient.tsx`), we cannot simply delete `ParallaxTilt`. We must convert the `<ParallaxTilt>` element to a standard `<div>` while retaining its `className`, and then remove the internal `<WebGLCanvas>` instance.

## 3. Caveats
- Some parent wrappers might be left empty after removing `<WebGLCanvas>` or `<ParallaxTilt>`. It is safe to remove `<div>` tags if their only children were the deleted components and they have purely decorative classes (e.g., `absolute inset-0 z-0 opacity-20 pointer-events-none`).
- We must ensure we don't accidentally delete structural grid components like `lg:col-span-6` in `HomeClient.tsx` when emptying their `ParallaxTilt` children.

## 4. Conclusion
To complete this task, an implementer should:
1. Delete `components/ui/WebGLCanvas.tsx`.
2. Delete `components/ui/ParallaxTilt.tsx`.
3. In the 7 Client components (`components/pages/*Client.tsx`), remove the `import` statements for `WebGLCanvas` and `ParallaxTilt`.
4. Delete all `<WebGLCanvas />` nodes.
5. Identify all `<ParallaxTilt>` tags. Replace them with `<div className="...">` if they wrap other substantive UI elements, OR delete them entirely if they were only wrapping `<WebGLCanvas>`.
6. Clean up any leftover empty decorative `div` wrappers (like `absolute inset-0`).

## 5. Verification Method
1. Run `npm run build` to ensure the project still compiles and no imports are broken.
2. Run `grep -riE 'webglcanvas|parallaxtilt' .` in the project root to confirm 0 results in source files.
3. Manually test pages (`/`, `/about`, `/contact`, `/news`, `/products`, `/references`, `/services`, `/solutions`) to ensure layouts haven't broken.
