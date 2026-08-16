document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = Array.from(navLinks).map(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            try {
                return document.querySelector(href);
            } catch (err) {
                return null;
            }
        }
        return null;
    }).filter(Boolean);

    // Smooth scroll and focus management
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        e.preventDefault();
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                        targetSection.setAttribute('tabindex', '-1');
                        targetSection.focus({ preventScroll: true });
                        history.pushState(null, null, targetId);
                    }
                } catch (err) {
                    // Ignore invalid selectors
                }
            }
        });
    });

    // Intersection Observer for dynamic aria-current
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.setAttribute('aria-current', 'true');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});
