const showCartButton = document.querySelector(".show-cart");

const minicartModal = document.querySelector(".minicart");

const minicartCloseButton = document.querySelector(".minicart__close");

minicartCloseButton.addEventListener("click", (e) => {
  minicartModal.close();
});

console.log(minicartModal);

showCartButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(minicartModal);
  minicartModal.showModal();
});

// swiper

const swiper4 = new Swiper(".swiper-container ", {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".minicart__footer-btn--next",
    prevEl: ".minicart__footer-btn--prev",
  },
});

const counterMain = document.querySelector(".minicart__quantity");
const btnMinicartMinus = counterMain.querySelector('[data-action="minus"]');
const btnMinicartPlus = counterMain.querySelector('[data-action="plus"]');
const counterMinicartValue = counterMain.querySelector(
  '[data-counter="quantity"]'
);

btnMinicartPlus.addEventListener("click", () => {
  counterMinicartValue.value++;
});

btnMinicartMinus.addEventListener("click", () => {
  counterMinicartValue.value--;

  if (counterMinicartValue.value < 1) {
    counterMinicartValue.value = 1;
  }
});

const quantity = document.querySelector('[data-qa="quantity"]');
const total = document.querySelector('[data-qa="total"]');

counterMinicartValue.addEventListener("change", (event) => {
  console.log(counterMinicartValue.value);
  // total.innerText = 1290 * counterMinicartValue.innerText;
});
// quantity.innerText = 1

// total.innerText = 1290;
