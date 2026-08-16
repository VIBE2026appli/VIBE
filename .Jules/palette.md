## 2025-01-20 - Dynamic ARIA Current for Anchor Nav
**Learning:** Hardcoding `aria-current="page"` on single-page scrolling sites is an accessibility bug. It misleads screen readers.
**Action:** Used an IntersectionObserver to dynamically toggle `aria-current="true"` on the active nav link and managed focus on anchor click to maintain accessibility context.
