## 2026-08-11 - Dynamic aria-current for Single-Page Navigation
**Learning:** For single-page scrolling sites, we should dynamically toggle `aria-current="true"` on active navigation links using an IntersectionObserver rather than hardcoding `aria-current="page"`, which incorrectly implies a multi-page structure to screen readers.
**Action:** Always implement JavaScript-based dynamic navigation highlighting on single-page sites to accurately reflect the active section to assistive tech.
