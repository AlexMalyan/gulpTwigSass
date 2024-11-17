const items = document.querySelectorAll('.product__menu-item');
const item = document.querySelector('.product__menu-item');
const icon = item.querySelector('.icon');

if (item.classList.contains('product__menu-item--has-sub')) {
  icon.classList.add('product__menu-icon--active');
}

// =include productCardMenu.js
const element = document.querySelector('.product__main-share-button');
const block = document.querySelector('.product__main-share-block');

const dialogElement = document.querySelector('.buy-one-click');
const openBtn = document.querySelector('.product__main-oneclick');
const closeBtn = document.querySelector(".buy-one-click__btn-cancel");

/* desription */
const description = document.querySelector('.product__description');
const descBtn = document.querySelector('.product__main-more');
document.querySelector('.product__main-more').addEventListener('click', () => {

  description.classList.toggle('product__description--is-active');

  if (description.classList.contains('product__description--is-active')) {
    document.querySelector('.product__main-more').textContent = 'Скрыть';
  } else {
    document.querySelector('.product__main-more').textContent = 'Все характеристики';
  }
})

openBtn.addEventListener("click", () => {
  dialogElement.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElement.close();
});

element.addEventListener('click', () => {
  if (block.classList.contains('is-active')) {
    block.classList.remove('is-active');
    return;
  }
  else {
    block.classList.add('is-active');
  }

  // element.classList.toggle('is-active');
});


