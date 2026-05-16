## 2024-03-24 - Semantic Landmarks & Broken Anchor
**Learning:** Found pattern of missing accessible names on landmark regions (`<nav>`, `<section>`) and a broken internal anchor link (`#accueil` vs `#hero`) in the static HTML.
**Action:** Applied `aria-label` to `<nav>`, linked heading `id`s to `<section>` `aria-labelledby`, and fixed broken anchor links to point to valid structural elements.