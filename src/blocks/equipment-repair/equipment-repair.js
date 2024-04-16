import Swiper from 'swiper'
new Swiper('.swiper2', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16, // Расстояние между слайдами
  speed: 1000, // Скорость анимации в миллисекундах
  height: 160,
  width: 240,
  
  direction: 'horizontal',

  navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev'
  },
  pagination: {
      el: '.swiper2-pagination',
      type: 'bullets',
      clickable: true,
  }
});


let repairMenuItem = [
    {
      description: "Ремонт ноутбуков",
      imgSrc: "./img/main/notebook.jpg",
      price: 'от 1200р',
    },
    {
      description: "Ремонт планшетов",
      imgSrc: "./img/main/ipad.jpg",
      price: 'от 800р',
    },
    {
      description: "Ремонт ПК",
      imgSrc: "./img/main/pc.jpg",
      price: 'от 1600р',
    },
    {
      description: "Ремонт Мониторов",
      imgSrc: "./img/main/monitor.jpg",
      price: 'от 900р',
    },

]


let button = document.querySelector('.equipment-repair__button'); // получили кнопки
let buttonTxt = button.querySelector('.equipment-repair__batton-txt'); // получили текст кнопки
let mainWrapper = document.querySelector('.equipment-repair__hidden-wrapper'); // получили основной блок чтобы менять его высоту
let buttonImg = button.querySelector('.equipment-repair__img-button'); //получили иконку кнопки чтобы ее перевернуть

button.addEventListener('click', function () {
  if (mainWrapper.classList.contains('equipment-repair__hidden-wrapper--change-height')) {
    mainWrapper.classList.remove('equipment-repair__hidden-wrapper--change-height') //удаляем класс высоты блока
    buttonImg.classList.remove('equipment-repair__img-button--rotate-img') // удаляем класс переворота картинки
    buttonTxt.textContent = "Показать все";

  } else {
    mainWrapper.classList.add('equipment-repair__hidden-wrapper--change-height'); //добавляем класс изменения высоты блока
    buttonImg.classList.add('equipment-repair__img-button--rotate-img'); // добавляем класс переворота картинки
    buttonTxt.textContent = "Скрыть";


  }
});

let mainInfoListNav = document.querySelector('.equipment-repair__list-nav'); //получили главное меню (НЕ СВАЙПЕР) для того чтобы туда потом добавлять новые элементы
let newItem = document.querySelector('#equipment-repair__main-menu').content; //получили шаблон template(НЕ СВАЙПЕР)




let mainInfoDivSwiper = document.querySelector('.swiper2 .swiper-wrapper'); //получил блок swiper куда буду добавлять новые элементы
let mainMenuSwiper = document.querySelector('.swiper2 #equipment-repair__swiper-menu').content; //получил шаблон template для swiper




function createNewCardSwiper (description, imgsrc, price, mainMenuSwiper, mainInfoDivSwiper) {
  let ClonednewItemDiv = mainMenuSwiper.cloneNode(true);
  let descriptionItem = ClonednewItemDiv.querySelector('.equipment-repair__description'); // получил из копии шаблона template поле описание
  let imgElement = ClonednewItemDiv.querySelector('.equipment-repair__img');// получил из копии шаблона template поле картинки
  let priceItem = ClonednewItemDiv.querySelector('.equipment-repair__price'); // получил из копии шаблона template поле цены
  descriptionItem.textContent = description;
  imgElement.src = imgsrc;
  priceItem.textContent = price;
  mainInfoDivSwiper.appendChild(ClonednewItemDiv); 
}



function createNewCard (description, imgsrc, price, newItem, mainInfoListNav) {
  let ClonednemItem = newItem.cloneNode(true);
  let descriptionItem = ClonednemItem.querySelector('.equipment-repair__description'); // получили из копии template элемент описание
  let imgElement = ClonednemItem.querySelector('.equipment-repair__img'); // получили из копии template элемент картинку
  let priceItem = ClonednemItem.querySelector('.equipment-repair__price'); // получили из копии template элемент цена
  descriptionItem.textContent = description;
  imgElement.src = imgsrc;
  priceItem.textContent = price;
  imgElement.src = imgsrc;
  mainInfoListNav.appendChild(ClonednemItem); 
}

let key;
for (key in repairMenuItem) {
  
  
  createNewCardSwiper(repairMenuItem[key].description, repairMenuItem[key].imgSrc, repairMenuItem[key].price, mainMenuSwiper, mainInfoDivSwiper);
  createNewCard(repairMenuItem[key].description, repairMenuItem[key].imgSrc, repairMenuItem[key].price, newItem, mainInfoListNav);
}


  
  
  



