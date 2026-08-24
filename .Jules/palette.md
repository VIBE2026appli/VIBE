## 2024-05-24 - Dynamic Navigation State Accessibility
**Learning:** Hardcoding `aria-current="page"` on hash-based single-page navigations creates accessibility issues as the "page" doesn't change. Also, anchor links need robust validation (checking `href.startsWith('#')`) to avoid JS exceptions on external links.
**Action:** Use `IntersectionObserver` to dynamically toggle `aria-current="true"` on the active navigation item based on scroll position, and always validate internal hash links before applying custom scrolling behaviors.
