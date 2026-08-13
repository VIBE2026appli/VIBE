## 2024-10-24 - Dynamic aria-current for hash navigation
**Learning:** Hardcoding `aria-current="page"` on single-page scroll websites with hash navigation is an accessibility bug, because the user stays on the same page. Using `aria-current="true"` toggled dynamically via IntersectionObserver provides accurate screen reader feedback.
**Action:** Implemented an IntersectionObserver to dynamically manage `aria-current="true"` on navigation links based on the visible `<section>` in the viewport.
