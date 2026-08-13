## 2024-11-20 - Add Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) in `index.html`
**Learning:** Adding defense-in-depth measures like CSP is crucial for mitigating XSS vulnerabilities, even in static or client-side heavy applications.
**Prevention:** Always include a strict CSP header or meta tag by default, explicitly allowing only known, trusted origins.
