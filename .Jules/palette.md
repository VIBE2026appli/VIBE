## 2024-10-24 - Dynamic ARIA and Focus Management
**Learning:** Hardcoding aria-current="page" creates bugs in single-page applications. Dynamic toggling along with programmatic focus management significantly improves accessibility.
**Action:** Use JavaScript to dynamically set aria-current="true" on the active navigation link and manage focus when smooth scrolling between sections by setting tabindex="-1" and calling focus().

## 2024-10-25 - Handling Disabled Navigation Links
**Learning:** Having dead links to unimplemented sections creates confusion and breaks keyboard navigation flow. Adding aria-disabled="true" combined with JavaScript prevention correctly communicates the state to screen readers and prevents empty interactions.
**Action:** Always mark unavailable navigation links with aria-disabled="true", provide a helpful title or tooltip, and intercept clicks via JS to ensure they are truly disabled.
