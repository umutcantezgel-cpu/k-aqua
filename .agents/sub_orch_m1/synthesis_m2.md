## Consensus
- **Target Files**: `components/pages/ProductsClient.tsx`, `components/pages/SolutionsClient.tsx`, `components/pages/ReferencesClient.tsx`, `components/pages/ServiceClient.tsx`, `components/pages/NewsClient.tsx`, `components/pages/AboutClient.tsx`, `components/pages/CareerClient.tsx`.
- **Usage Strategy**: The global wrappers (`app/layout.tsx`, `app/globals.css`) are already free of dark mode utilities. The dark mode classes are hardcoded inside the page components. The fix is to remove or replace all usages of dark hex backgrounds (`bg-[#050505]`, `bg-[#030305]`, `bg-[#050507]`), `bg-black`, and `zinc` colors (`bg-zinc-*`, `text-zinc-*`, `border-zinc-*`) with light theme equivalents (e.g., `bg-slate-50`, `bg-white`, `text-slate-600`, `border-slate-200`) or transparent alternatives for gradients.

## Resolved Conflicts
- None.

## Dissenting Views
- None.

## Gaps
- None.
