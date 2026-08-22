## 2024-05-24 - Dynamic Active States for Hash Navigation
**Learning:** Hardcoding `aria-current="page"` on hash links in a single-page app creates an accessibility bug. Furthermore, anchor scrolling without focus management breaks keyboard navigation.
**Action:** Added a reusable JavaScript pattern using `IntersectionObserver` to dynamically toggle `aria-current="true"` on the active navigation link and update `tabindex` and focus when scrolling to target sections.
