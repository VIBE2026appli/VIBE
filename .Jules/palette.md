## 2024-05-13 - Fixed Navigation Accessibility and Broken Link
**Learning:** The 'Accueil' (Home) link in the navigation menu was pointing to an ID that didn't exist ('#accueil' instead of '#hero'). Additionally, the `<nav>` element and the generic 'Explorer' link lacked accessible labels, reducing screen reader context.
**Action:** Always verify that anchor links point to valid IDs within the page. Add `aria-label` to navigation landmarks and links that might need more context for screen reader users.
