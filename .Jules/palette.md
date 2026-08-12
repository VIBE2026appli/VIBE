## 2024-05-18 - Dynamic aria-current for Single-Page Hash Navigation
**Learning:** Hardcoding `aria-current="page"` on single-page websites using hash navigation creates accessibility bugs since the user never actually leaves the page.
**Action:** Use an IntersectionObserver to dynamically toggle `aria-current="true"` on the active navigation link as the corresponding section enters the viewport, providing accurate feedback to screen readers.
