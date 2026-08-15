## 2024-05-24 - Dynamic ARIA current for Hash Navigation
**Learning:** Hardcoding aria-current="page" on single-page scroll apps creates accessibility bugs. It's necessary to dynamically track intersecting sections and apply aria-current="true" to accurately communicate the active section.
**Action:** Always use an IntersectionObserver or scroll listener to toggle aria-current="true" on internal anchor links based on the viewport.
