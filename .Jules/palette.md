## 2024-05-15 - Dynamic Navigation Accessibility
**Learning:** For single-page scrolling websites using hash anchors, statically setting `aria-current="page"` creates an accessibility bug since the page doesn't reload.
**Action:** Use JavaScript (e.g., IntersectionObserver) to dynamically toggle `aria-current="true"` and manage focus states when navigating between sections.
