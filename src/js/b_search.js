const search = document.querySelector(".header__search");
const searchInput = search.querySelector("input");
const searchButton = search.querySelector("button");
const test = document.querySelector(".test");

searchInput.addEventListener("change", () => {
  // TODO добавить валидацию
  // TODO добавть обработку вводимых данных
  // TODO добавить логику поиска
  // TODO добавить логику фильтрации
  // TODO добавить логику сортировки
  // TODO добавить вывод результата поиска
  // TODO добавить логику пагинации

  const searchValue = searchInput.value;
  test.innerHTML = searchInput.value;

  //   console.log(searchInput.value);

  fetch("http://localhost:8080/data.html")
    .then((response) => response.json())
    .then((data) => {
      data.find((item) => {
        if (searchValue == item.name) {
          test.innerHTML = `<div class="base-input-card">
                <img class="base-input-card__image" src="${item.images[0]}.jpg" alt="" >
                <div class="base-input-card__content">
                <div class="base-input-card__text">
                    <span class="base-input-card__text-name">
                    ${item.name}
                    </span>
                </div>
                <span class="base-input-card__price">
                ${item.price}
                </span>
                </div>
            </div>`;
        }
      });
      //   if (searchValue == data.name) {
      //     test.innerHTML = `<div class="base-input-card">
      //     <img class="base-input-card__image" src="${data.images[0]}.jpg" alt="" >
      //     <div class="base-input-card__content">
      //     <div class="base-input-card__text">
      //         <span class="base-input-card__text-name">
      //         ${data.name}
      //         </span>
      //     </div>
      //     <span class="base-input-card__price">
      //     ${data.price}
      //     </span>
      //     </div>
      // </div>`;
      //   } else {
      //     test.innerHTML += searchInput.value;
      //     test.innerHTML += "Ваш запрос не найден";
      //   }
    });
});

// fakeFetch = () => {};

// fakeFetch();
