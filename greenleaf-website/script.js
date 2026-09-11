document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  const filters = document.querySelectorAll(".filter");
  const plantCards = document.querySelectorAll(".product-card");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(btn => btn.classList.remove("active-filter"));
      filter.classList.add("active-filter");

      const selected = filter.dataset.filter;

      plantCards.forEach(card => {
        const categories = card.dataset.category.split(" ");
        card.style.display =
          selected === "all" || categories.includes(selected)
            ? "block"
            : "none";
      });
    });
  });

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const message = document.getElementById("formMessage");
      message.textContent =
        "Thanks! Your message has been received for this demo website.";

      form.reset();
    });
  }
});
