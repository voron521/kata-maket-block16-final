
import Swiper from 'swiper';

new Swiper('.swiper3', {

  spaceBetween: 16, // Расстояние между слайдами
  speed: 1000, // Скорость анимации в миллисекундах
  height: 200,
  width: 260,
  
  direction: 'horizontal',

  navigation: {
      nextEl: '.swiper3-button-next',
      prevEl: '.swiper3-button-prev',
      toggle: '.swiper3-button-toggle'
  },
  pagination: {
      el: '.swiper3-pagination', // class элемента, который будет содержать точки прокрутки
      type: 'bullets', // тип навигации (bullets - точки, fractal - фрактальная навигация)*/
      clickable: true, // позволяет кликать по точкам для переключения слайдов
  }

});


let repairMenuItem = [
  {
    repair_services: 'Диагностика',
    price: 'Бесплатно',
    term: "30 мин",
  },
  {
    repair_services: 'Замена дисплея',
    price: '1 000 ₽',
    term: "30 - 120 мин",
  },
  {
    repair_services: 'Замена полифонического динамика',
    price: '1 000 ₽',
    term: "30 - 120 мин",
  },
  {
    repair_services: 'Тестирование с выдачей технического заключения',
    price: '1 000 ₽',
    term: "30 - 120 мин",
  },
  {
    repair_services: 'Замена программного обеспечения',
    price: '1 000 ₽',
    term: "30 - 120 мин",
  },
]
  

    

let mainInfoListNav = document.querySelector('.price-nav__bottom-wrapper'); //получили главное меню для того чтобы туда потом добавлять новые элементы
let newItem = document.querySelector('#prices-nav__main-menu').content; //получили шаблон template


let mainInfoDivSwiper = document.querySelector('.swiper3 .swiper-wrapper'); //получил блок swiper куда буду добавлять новые элементы
let mainMenuSwiper = document.querySelector('#prices-nav__swiper-menu').content; //получил шаблон template для swiper


function createNewCardSwiper (term, price, repair_services, mainInfoDivSwiper, mainMenuSwiper) {
  let ClonednewItemDiv = mainMenuSwiper.cloneNode(true); // получили клон template
  let paragRepairElement = ClonednewItemDiv.querySelector('.prices-nav__repair-services-p'); //получил поле название услуги
  let paragPriceElement = ClonednewItemDiv.querySelector('.prices-nav__price-p'); // получил поле цена
  let paragTermElement = ClonednewItemDiv.querySelector('.prices-nav__term-p'); // получил поле Срок
  paragRepairElement.textContent = repair_services;
  paragPriceElement.textContent = price;
  paragTermElement.textContent = term;
  /*console.log(ClonednewItemDiv);*/
  mainInfoDivSwiper.appendChild(ClonednewItemDiv); 
}



function createNewCard (term, price, repair_services, mainInfoListNav, newItem) {
  let ClonednemItem = newItem.cloneNode(true); // получили клон template
  let paragRepairElement =  ClonednemItem.querySelector('.prices-nav__templ-parag-repair'); // получил поле название услуги
  let paragPriceElement = ClonednemItem.querySelector('.prices-nav__templ-parag-price'); // получил поле цена
  let paragTermElement = ClonednemItem.querySelector('.prices-nav__templ-parag-term'); // получил поле цена
  let liElem = ClonednemItem.querySelector('.prices-nav__list-item'); // получил сам элемент li чтобы добавить туда класс
  paragRepairElement.textContent = repair_services;
  paragPriceElement.textContent = price;
  paragTermElement.textContent = term;
  liElem.classList.add('prices-nav__list-item--bgcolor');  
  mainInfoListNav.appendChild(ClonednemItem); 
}

let key;
for (key in repairMenuItem) {
  createNewCardSwiper(repairMenuItem[key].term, repairMenuItem[key].price, repairMenuItem[key].repair_services, mainInfoDivSwiper, mainMenuSwiper);
  createNewCard(repairMenuItem[key].term, repairMenuItem[key].price, repairMenuItem[key].repair_services, mainInfoListNav, newItem);

}


