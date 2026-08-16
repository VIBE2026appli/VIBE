## 2024-08-15 - Dynamic Navigation Accessibility
**Learning:** On single-page scrolling sites, `aria-current` should be dynamically updated based on the active section to provide accurate screen reader feedback.
**Action:** Used `IntersectionObserver` to dynamically toggle `aria-current="true"` on navigation links as the user scrolls through sections.
