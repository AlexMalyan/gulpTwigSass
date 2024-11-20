const burger = document.querySelector(".header__menu-burger");

burger.addEventListener("mouseover", () => {
  burger.classList.add("is-active");
});

burger.addEventListener("mouseout", () => {
  burger.classList.remove("is-active");
});
