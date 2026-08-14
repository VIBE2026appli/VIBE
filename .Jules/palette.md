## 2024-08-14 - Dynamic aria-current for Single-Page Navigation
**Learning:** Hardcoding `aria-current="page"` on single-page scroll sites is an anti-pattern. Assistive technologies need the active state to change as the user scrolls through different sections.
**Action:** Use an IntersectionObserver to dynamically apply `aria-current="true"` to the active navigation anchor link when its corresponding section enters the viewport.
