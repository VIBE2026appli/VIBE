## 2024-05-18 - Dynamic ARIA Current and Focus Management for Anchor Links
**Learning:** Hardcoding `aria-current="page"` on single-page scroll sites creates a false accessibility state. Furthermore, smooth scrolling to anchor links often drops keyboard focus, making navigation confusing for screen reader users.
**Action:** Implemented JavaScript to dynamically toggle `aria-current="true"` on the active navigation link and manage focus by temporarily setting `tabindex="-1"` and calling `focus()` on the target section when smoothly scrolling.
