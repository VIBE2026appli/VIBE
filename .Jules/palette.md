## 2024-05-19 - Missing Content Section Causes Broken Link
**Learning:** The navigation menu included a link to `#contact`, but the section was entirely missing from the static HTML, resulting in a dead link which is frustrating UX. This pattern is common in static sites where placeholders are added to navigation before content is ready.
**Action:** When auditing static HTML sites, verify that all internal anchor links in navigation actually resolve to a corresponding `id` on the page. Added a simple empty state message for the missing contact section.
