## 2024-08-15 - Dynamic Navigation Accessibility
**Learning:** Hardcoding `aria-current="page"` on single-page scrolling sites creates an accessibility bug. It needs to be dynamically updated based on the active section to provide accurate screen reader feedback.
**Action:** Used `IntersectionObserver` to dynamically toggle `aria-current="true"` on navigation links as the user scrolls through sections.
