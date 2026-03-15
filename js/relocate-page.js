const links = document.querySelectorAll("[data-page]");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const page = e.currentTarget.dataset.page;
    window.location.href = page;
  });
});
