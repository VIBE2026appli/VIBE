## 2024-08-23 - Dynamic ARIA Current for SPAs
**Learning:** Hardcoding `aria-current="page"` on single-page scrolling websites creates an accessibility bug because the user hasn't changed pages, but rather navigated to a different section.
**Action:** Use JavaScript (`IntersectionObserver`) to dynamically toggle `aria-current="true"` on the active navigation link based on scroll position, and ensure focus is managed for screen readers when anchor links are clicked.
