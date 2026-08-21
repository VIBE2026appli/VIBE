document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove aria-current from all links
            links.forEach(l => l.removeAttribute('aria-current'));
            // Add aria-current to the clicked link
            this.setAttribute('aria-current', 'true');

            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Manage focus for accessibility
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                }
            }
        });
    });
});
