const slider = document.querySelector(".benefits-section-list");
let scrollAmount = 0;
const speed = 0.5;
let animationId;

function autoScroll() {
  scrollAmount += speed;
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }
  slider.scrollLeft = scrollAmount;
  animationId = requestAnimationFrame(autoScroll);
}

animationId = requestAnimationFrame(autoScroll);

slider.addEventListener("mouseenter", () => cancelAnimationFrame(animationId));
slider.addEventListener(
  "mouseleave",
  () => (animationId = requestAnimationFrame(autoScroll)),
);
