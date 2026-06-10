# Observation

- **Target Files**: `components/ui/WebGLCanvas.tsx` and `components/ui/ParallaxTilt.tsx`
- **Usages**: A search across the `components/` and `app/` directories reveals that these components are imported and used exclusively in the following 6 page components:
  1. `components/pages/ServiceClient.tsx`
  2. `components/pages/ContactClient.tsx`
  3. `components/pages/NewsClient.tsx`
  4. `components/pages/HomeClient.tsx`
  5. `components/pages/AboutClient.tsx`
  6. `components/pages/CareerClient.tsx`
- **Implementation Details**:
  - `WebGLCanvas` is always used as a self-closing element (`<WebGLCanvas ... />`) to render background effects.
  - `ParallaxTilt` renders a `<motion.div className={cn("w-full h-full", className)}>` element (from `components/ui/ParallaxTilt.tsx`).
  - Importantly, `ParallaxTilt` is frequently used as a wrapper for other functional layout and DOM elements, not just `WebGLCanvas`. For instance, in `AboutClient.tsx` (lines 112-126) and `NewsClient.tsx` (lines 204-215), it wraps standard `div` structures, text content, and icons.

# Logic Chain

1. Since `WebGLCanvas` and `ParallaxTilt` need to be completely removed globally, their source files must be deleted, and all imports of them must be removed from the 6 client page components.
2. `WebGLCanvas` nodes can be safely deleted wherever they appear because they are purely decorative backgrounds.
3. `ParallaxTilt` nodes cannot simply be deleted because they often wrap other essential content. If they were deleted, their children would be orphaned or removed.
4. Because `ParallaxTilt` resolves to a `div` that defaults to `w-full h-full` and accepts a custom `className`, we can seamlessly remove the tilt effect without breaking layouts by replacing `<ParallaxTilt>` with a standard `div` combining `"w-full h-full"` and the provided `className`.

# Caveats

- In some cases, `ParallaxTilt` wraps nothing *but* `WebGLCanvas`. In those specific instances, both the wrapper and the canvas could be safely deleted entirely. However, replacing `ParallaxTilt` with an empty `div` (after removing the canvas) is also safe and simplifies the generic replacement rule without risking broken layouts.
- `WebGLCanvas` is sometimes imported dynamically via `next/dynamic` (e.g., in `AboutClient.tsx:12`). These dynamic imports must also be cleaned up.

# Conclusion

**Fix Strategy:**
1. Delete `components/ui/WebGLCanvas.tsx` and `components/ui/ParallaxTilt.tsx`.
2. In the 6 affected files (`components/pages/*Client.tsx`):
   - Remove the `import` statements (both static and dynamic) for `WebGLCanvas` and `ParallaxTilt`.
   - Delete all `<WebGLCanvas ... />` elements.
   - Replace all `<ParallaxTilt className="some-class" ...>` tags with `<div className="w-full h-full some-class">`. (Drop any `tiltReverse` or `scale` props that were specific to the tilt effect).
   - Ensure the closing tags `</ParallaxTilt>` are replaced with `</div>`.

# Verification Method

1. Run `grep -rnE "WebGLCanvas|ParallaxTilt" components app` to verify no occurrences remain.
2. Run `npm run build` to ensure Next.js builds successfully without import or unused variable errors.
