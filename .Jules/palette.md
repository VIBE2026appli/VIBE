## 2024-05-24 - Dynamic ARIA current state for single-page apps
**Learning:** Hardcoding `aria-current="page"` on hash-based navigation links in static HTML creates an accessibility bug, as the page context doesn't actually change.
**Action:** Always use JavaScript to dynamically set `aria-current="true"` on the currently active internal navigation link and manage focus to the target section.
