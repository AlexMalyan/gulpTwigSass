

const swiper = new Swiper('.banner__inner', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.banner__button--next',
    prevEl: '.banner__button--prev',
  },
});


console.log("swipers.js");