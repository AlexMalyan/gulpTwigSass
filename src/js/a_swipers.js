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
const swiperProductThumbs = new Swiper(".product__thumbs", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const swiperPoduct = new Swiper(".product__swiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperProductThumbs,
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
