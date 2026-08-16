## 2024-05-20 - Dynamic ARIA Current on Scroll
**Learning:** Hardcoding aria-current="page" on single-page scrolling sites creates an accessibility bug because the physical page doesn't change. Dynamic toggling of aria-current="true" using IntersectionObserver provides accurate context to screen readers.
**Action:** Implement IntersectionObserver to manage aria-current="true" for hash navigation links on single-page websites to accurately reflect the active section.
