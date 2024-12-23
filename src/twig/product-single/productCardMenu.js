const items = document.querySelectorAll('.product__menu-item');
const item = document.querySelector('.product__menu-item');
const icon = item.querySelector('.icon');

if (item.classList.contains('product__menu-item--has-sub')) {
  icon.classList.add('product__menu-icon--active');
}

/* 
Если есть подменю то добавляем активность
Если нет то убираем активность
*/