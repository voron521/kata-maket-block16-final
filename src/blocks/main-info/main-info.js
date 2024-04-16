let infoPblock = document.querySelector('.main-info__p'); /* получили элемент блок текста
чтобы потом добавить класс увеличения высоты */
let button = document.querySelector('.main-info__button'); // получили кнопку
let buttonSpan = document.querySelector('.main-info__button-span') // получили спан кнопки для изменения текста кнопки
let buttonIcon = document.querySelector('.main-info__img-button') // получили иконку кнопки для ее переворота

button.addEventListener('click', function () {

  if (infoPblock.classList.contains('main-info__p--change-height')) {
    infoPblock.classList.remove('main-info__p--change-height')
    buttonIcon.classList.remove('main-info__img-button--rotate-img');
    buttonSpan.textContent = "Читать далее";

  } else {
    infoPblock.classList.add('main-info__p--change-height')
    buttonIcon.classList.add('main-info__img-button--rotate-img');
    
    
    buttonSpan.textContent = "Скрыть";


  }
});