document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = new Date().getFullYear());
  const header = document.querySelector(".site-header");
  let lastY = window.scrollY;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (header && y > lastY && y > 180) header.classList.add("header-hidden");
    else if (header) header.classList.remove("header-hidden");
    lastY = y;
  }, {passive:true});
  document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
    const el = document.getElementById("mainNav");
    if (el && el.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(el).hide();
  }));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
