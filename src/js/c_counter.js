// TODO счетчик для всех товаров и корзина здесь https://rutube.ru/video/1e5b786f22480ad59f81b0dc56736f59/
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

// TODO восставновить счетчик
btnMinus.addEventListener('click', () => {
  if (document.querySelector('[data-counter]').value > 1) {
    document.querySelector('[data-counter]').value--
  }
})
btnPlus.addEventListener('click', () => {
  document.querySelector('[data-counter]').value++
})