## 2024-05-20 - Dynamic Navigation Accessibility
**Learning:** Hardcoding `aria-current="page"` on single-page scroll navigation creates accessibility bugs, as the page context doesn't change. Instead, `aria-current="true"` must be toggled dynamically alongside proper focus management to indicate the active section.
**Action:** Use JavaScript to apply `aria-current="true"` dynamically on the active link and manage focus by setting `tabindex="-1"` and calling `.focus()` on the target section.
