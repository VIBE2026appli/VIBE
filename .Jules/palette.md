## 2024-08-19 - Dynamic ARIA Current for Single-Page Navigation
**Learning:** Hardcoding `aria-current="page"` on single-page scrolling sites creates an accessibility bug because the page doesn't actually change. Screen readers need accurate context of which section is currently active within the same document.
**Action:** Use JavaScript (like IntersectionObserver) to dynamically toggle `aria-current="true"` on navigation links as the user scrolls, accurately reflecting the active state without implying a page load.
