## 2024-10-24 - Dynamic aria-current for internal navigation
**Learning:** When enhancing single-page scrolling websites that use hash anchor navigation, hardcoding `aria-current="page"` creates an accessibility bug. The current "page" isn't changing, just the active section within it.
**Action:** Use JavaScript (`IntersectionObserver`) to dynamically toggle `aria-current="true"` on the navigation link corresponding to the section currently in view to properly indicate the active section to screen readers without falsely claiming a page transition.
