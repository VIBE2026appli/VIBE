## 2024-05-24 - Dynamic Aria-Current for Scrolling Sites
**Learning:** Single-page scrolling sites using hash anchor navigation should avoid hardcoding `aria-current="page"`. This creates an accessibility bug as the visible section changes.
**Action:** Use JavaScript (e.g., IntersectionObserver) to dynamically toggle `aria-current="true"` on the navigation link that corresponds to the currently visible section.
