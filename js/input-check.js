const input = document.querySelector(".footer__input-control");
const btn = document.querySelector(".button-subscribe");

input.addEventListener("input", () => {
  if (input.value.trim() != "") {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
