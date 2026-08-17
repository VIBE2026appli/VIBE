document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus({ preventScroll: true });

                    navLinks.forEach(nav => nav.removeAttribute('aria-current'));
                    link.setAttribute('aria-current', 'true');
                }
            }
        });
    });
});
