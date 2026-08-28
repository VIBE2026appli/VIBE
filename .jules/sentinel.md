## 2024-08-12 - Missing Security Headers in Static Frontend
**Vulnerability:** The application lacks a Content Security Policy (CSP), leaving it potentially exposed to Cross-Site Scripting (XSS) and data injection attacks if malicious scripts are injected or third-party resources are compromised.
**Learning:** Even static frontend applications require defense-in-depth security headers like CSP to restrict the origins of executable scripts and stylesheets.
**Prevention:** Always implement a strict Content-Security-Policy in the `<head>` of HTML entry points or via HTTP response headers to explicitly whitelist allowed resource origins.
