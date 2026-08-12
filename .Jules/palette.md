## 2025-02-18 - Dynamic ARIA current for single-page sites
**Learning:** Hardcoding `aria-current="page"` on hash anchor navigation in single-page scrolling sites creates an accessibility bug, because multiple sections aren't distinct pages and only one is truly active at a time.
**Action:** Use JavaScript (`IntersectionObserver`) to dynamically toggle `aria-current="true"` on the nav link corresponding to the active section, reflecting the user's current context accurately for screen readers.
