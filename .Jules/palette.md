## 2024-10-24 - Dynamic aria-current for Single-Page Scrolls
**Learning:** Hardcoding `aria-current="page"` on hash anchor navigation links creates an accessibility bug for screen readers on single-page websites.
**Action:** Instead, use an `IntersectionObserver` to dynamically toggle `aria-current="true"` on the active navigation link based on the user's scroll position, ensuring screen readers receive accurate state information.
