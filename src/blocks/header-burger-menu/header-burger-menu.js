
import {searchButtonCall, inputVisibleOff, inputVisibleOn, inputForm} from '../modal-window/modal-window';


let buttonBurger = document.querySelector('.header-wrapper__button-burger'); //получили кнопку бургер для обработки клика
let parentBlock = document.querySelector('.header-burger-menu'); //получили блок родитель пустой, куда будем перекидывать нужные Элементы

let menuWrapper = document.querySelector('.header-burger-menu-wrapper'); // получили обертку меню для скрытия всего элемента плюс заблюривания фона

let flag = 1;

function updateStaticMenu () {
  let staticMenu = document.querySelector('.header-wrapper'); //получили все меню, которое сейчас в шапке
  let staticMenuClone = staticMenu.cloneNode(true);
  parentBlock.appendChild(staticMenuClone);
  return staticMenu, staticMenuClone, parentBlock

}

updateStaticMenu();




function removeClassListTimeOut() {
  
  menuWrapper.classList.remove('header-burger-menu-wrapper--visible');
  parentBlock.classList.remove('header-burger-menu--hidden'); 


}


addBurgerListener(buttonBurger);




/*function closeMenu(NameItem) {
  NameItem.removeEventListener('click', function(){});

  // Удаление обработчиков событий с кнопок callButton и messageButton
}*/



function addBurgerListener(buttonBurger){
  buttonBurger.addEventListener('click', function () {
  
    if (menuWrapper.classList.contains('header-burger-menu-wrapper--visible')) {
   
      

      parentBlock.classList.add('header-burger-menu--hidden'); // для анимации скрытия
      setTimeout(removeClassListTimeOut, 1000);
      
      
      
      
      

      
      

    } else {

      
      menuWrapper.classList.add('header-burger-menu-wrapper--visible'); //добавляем класс видимости чтобы добавить блок
      parentBlock.classList.add('header-burger-menu--visible');

      

      


      let callButton = document.querySelector('.header-burger-menu-wrapper .header-wrapper__message-button'); //получили кнопку call
      let messageButton = document.querySelector('.header-burger-menu-wrapper .header-wrapper__call-button'); //получили кнопку message
      
      if (flag) {
        searchButtonCall(callButton, "Обратная связь", 1, inputForm);

        searchButtonCall(messageButton, "Заказать звонок", 0, inputForm);
        flag = 0;


      }
     

      
      

      

      let buttonburgerPopupMenu = document.querySelector('.header-burger-menu .header-wrapper__button-burger')
      let buttonBurgerImg = buttonburgerPopupMenu.querySelector('.left-header__burger-img');
      
      
      buttonBurgerImg.src = 'img/header/left-header/close.svg';
      buttonburgerPopupMenu.addEventListener('click', function () {
          
          
          parentBlock.classList.add('header-burger-menu--hidden'); // для анимации скрытия
          setTimeout(removeClassListTimeOut, 1000);
          

          
          
          
          
          
         

      });



      const popaMenuWrapper = document.querySelector('.header-burger-menu-wrapper')

      
      parentBlock.addEventListener('click', function (event) {
        event.stopPropagation();
        
       
      });

      popaMenuWrapper.addEventListener('click', function () {
        
          
        parentBlock.classList.add('header-burger-menu--hidden'); // для анимации скрытия 
        setTimeout(removeClassListTimeOut, 1000);
        
        
        

        

      });

    }
    
  });
}
