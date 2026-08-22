document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    const updateActiveLink = (id) => {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                if (href === id) link.setAttribute('aria-current', 'true');
                else link.removeAttribute('aria-current');
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, '', href);
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                    updateActiveLink(href);
                }
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) updateActiveLink('#' + entry.target.id);
        });
    }, { rootMargin: '-50% 0px -50% 0px' });

    document.querySelectorAll('main section').forEach(sec => observer.observe(sec));
});
