document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.scrollBehavior = "smooth";
  const navLinks = document.querySelectorAll(".nav-links a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
