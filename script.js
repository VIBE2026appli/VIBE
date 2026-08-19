const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        }
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.forEach(l => {
                l.getAttribute('href') === `#${entry.target.id}`
                    ? l.setAttribute('aria-current', 'true')
                    : l.removeAttribute('aria-current');
            });
        }
    });
}, { rootMargin: '-50% 0px' });
document.querySelectorAll('main section').forEach(s => observer.observe(s));
