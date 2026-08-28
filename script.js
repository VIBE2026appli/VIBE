document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    const currentHash = window.location.hash || '#accueil';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.setAttribute('aria-current', 'true');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.getAttribute('aria-disabled') === 'true') {
                return;
            }

            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    navLinks.forEach(nav => nav.removeAttribute('aria-current'));
                    this.setAttribute('aria-current', 'true');

                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();

                    window.history.pushState(null, '', targetId);
                }
            }
        });
    });
});
