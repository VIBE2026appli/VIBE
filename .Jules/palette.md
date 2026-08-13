## 2024-05-20 - Dynamic ARIA Current for Scroll Nav
**Learning:** Hardcoding aria-current="page" on single-page scroll websites creates an accessibility bug.
**Action:** Use JavaScript IntersectionObserver to dynamically toggle aria-current="true" on navigation links based on visible main sections.
