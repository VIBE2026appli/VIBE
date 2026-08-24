## 2024-08-24 - Dynamic Navigation State in Single Page Sites
**Learning:** Hardcoding `aria-current="page"` on hash anchor links in a single-page scrolling website creates an accessibility bug, as the user never actually changes pages. It is better to use `aria-current="true"` and dynamically toggle it based on the user's scroll position.
**Action:** Use JavaScript (`IntersectionObserver`) to track visible sections and apply `aria-current="true"` to the corresponding navigation links. Ensure to check `href.startsWith('#')` when manipulating links to avoid errors.
