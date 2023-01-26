const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value != "") return;
    input.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});
