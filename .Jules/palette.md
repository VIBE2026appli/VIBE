## 2024-05-18 - Missing Anchor Targets Resulting in Broken Navigation
**Learning:** This app relies on static index.html structure with anchor links, but the sections these links target may be missing, leading to broken navigation.
**Action:** When working on navigation or adding new sections, verify that all anchor tags have valid targets, and add the missing targets with proper ARIA `aria-labelledby` landmarks.
