
import Swiper from 'swiper';

new Swiper('.swiper1', {
  
  spaceBetween: 16, // Расстояние между слайдами
  speed: 1000, // Скорость анимации в миллисекундах
  height: 72,
  width: 240,
  
  direction: 'horizontal',

  navigation: {
      nextEl: '.swiper1-button-next',
      prevEl: '.swiper1-button-prev',
      toggle: '.swiper1-button-toggle'
  },
  pagination: {
      el: '.swiper1-pagination', // class элемента, который будет содержать точки прокрутки
      type: 'bullets', // тип навигации (bullets - точки, fractal - фрактальная навигация)*/
      clickable: true, // позволяет кликать по точкам для переключения слайдов
  }

});


let brandImages = {
    Lenovo: "img/brands/Lenovo.svg",
    Samsung: "img/brands/Samsung.svg",
    Apple: "img/brands/Apple.svg",
    ViewSonic: "img/brands/ViewSonic.svg",
    Bosch: "img/brands/Bosch.svg",
    hp: "img/brands/hp.svg",
    Acer: "img/brands/Acer.svg",
    Sony: "img/brands/Sony.svg",
    Lenovo2: "img/brands/Lenovo2.svg",
    Samsung2: "img/brands/samsung2.svg",
    Apple2: "img/brands/Apple2.svg",
  }
  
  
    
let button = document.querySelector('.navigation-brends__button'); //получили кнопку
let buttonTxt = button.querySelector('.navigation-brends__batton-txt'); //получили текст кнопки
let mainWrapper = document.querySelector('.navigation-brends__hidden-wrapper'); //получили весь блок чтобы изменить его высоту
let buttonImg = button.querySelector('.navigation-brends__img-button'); //получили картинку кнопки чтобы перевернуть ее

button.addEventListener('click', function () {
  if (mainWrapper.classList.contains('navigation-brends__hidden-wrapper--change-height')) {
    mainWrapper.classList.remove('navigation-brends__hidden-wrapper--change-height') //удалить класс для изменения высоты основного блока
    buttonImg.classList.remove('navigation-brends__img-button--rotate-img')
    buttonTxt.textContent = "Показать все";

  } else {
    mainWrapper.classList.add('navigation-brends__hidden-wrapper--change-height');
    buttonImg.classList.add('navigation-brends__img-button--rotate-img');
    buttonTxt.textContent = "Скрыть";
  }
});

let mainInfoListNav = document.querySelector('.navigation-brends__list-nav'); //получили главное меню для того чтобы туда потом добавлять новые элементы
let newItem = document.querySelector('#navigation-brends__main-menu').content; //получили шаблон template
let nemItemLi = newItem.querySelector('.navigation-brends__list-item'); // получили сам лист списка из шаблона

let mainInfoDivSwiper = document.querySelector('.swiper-wrapper'); //получил блок swiper куда буду добавлять новые элементы
let mainMenuSwiper = document.querySelector('#navigation-brends__swiper-menu').content; //получил шаблон template для swiper
let newItemSwiper = mainMenuSwiper.querySelector('.swiper1 .swiper-slide'); // получил сам блок  div из шаблона

function createNewCardSwiper (imgsrc) {
  let ClonednewItemDiv = mainMenuSwiper.cloneNode(true);
  let imgElement = ClonednewItemDiv.querySelector('.navigation-brends__img');
  imgElement.src = imgsrc;
  mainInfoDivSwiper.appendChild(ClonednewItemDiv); 
}



function createNewCard (imgsrc) {
  let ClonednemItemLi = nemItemLi.cloneNode(true);
  let imgElement = ClonednemItemLi.querySelector('.navigation-brends__img');
  imgElement.src = imgsrc;
  mainInfoListNav.appendChild(ClonednemItemLi); 
}

let key;
for (key in brandImages) {
  createNewCard(brandImages[key]);
  createNewCardSwiper(brandImages[key]);
}


  

  



