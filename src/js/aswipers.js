const swiperBanner = new Swiper(".banner__inner", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".banner__button--next",
    prevEl: ".banner__button--prev",
  },
});

// swiper for product
const swiperPoduct = new Swiper(".product__swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const swiperProductFooter = new Swiper(".product__footer-swiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // thumbs: {
  //   swiper: swiper,
  // },
});

// console.log("swipers.js");
