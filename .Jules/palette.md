## 2024-10-24 - Dynamic Aria-Current for Scroll Navigation
**Learning:** In single-page scrolling websites with anchor links, hardcoding `aria-current="page"` creates an accessibility bug. Screen readers might misinterpret the context.
**Action:** Use JavaScript (`IntersectionObserver`) to dynamically apply `aria-current="true"` to the currently visible section's navigation link, ensuring an accurate and intuitive experience for screen reader users.
