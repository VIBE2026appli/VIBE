document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;

                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        if (href === `#${activeId}`) {
                            link.setAttribute('aria-current', 'true');
                        } else {
                            link.removeAttribute('aria-current');
                        }
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
