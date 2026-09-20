// =========================================================
// HEADER: bayangan + background saat discroll
// =========================================================
const header = document.getElementById("site-header");
const onScrollHeader = () => {
  if (window.scrollY > 12) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
};
onScrollHeader();
window.addEventListener("scroll", onScrollHeader, { passive: true });

// =========================================================
// MENU MOBILE
// =========================================================
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconBurger = document.getElementById("icon-burger");
const iconClose = document.getElementById("icon-close");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    iconBurger.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      iconBurger.classList.remove("hidden");
      iconClose.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================
// REVEAL ON SCROLL
// =========================================================
const revealEls = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// =========================================================
// FILTER PROJECT / PRODUK
// =========================================================
const filterBar = document.getElementById("filter-bar");
const projectCards = document.querySelectorAll("#project-grid .project-card[data-tags]");

if (filterBar) {
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !show);
    });
  });
}