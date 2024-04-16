import '../scss/style.scss';
import '../blocks/navigation-brends/navigation-brends.js';
import '../blocks/equipment-repair/equipment-repair.js';
import '../blocks/prices-nav/prices-nav.js';
import '../blocks/main-info/main-info.js';
import '../blocks/header-burger-menu/header-burger-menu.js';
import '../blocks/modal-window/modal-window.js';





let body = document.querySelector('.body-content');
let leftMenu = document.querySelector('.header');

window.addEventListener('resize', executeScript);
window.addEventListener('load', executeScript);

/*console.log(leftMenu.style.height);*/


function executeScript() {
  
  // Проверяем, превышает ли текущая ширина экрана значение 1426px
  if (window.innerWidth >= 1426) {
     
      
      leftMenu.style.height = `${body.offsetHeight}px`
      console.log(`${leftMenu.offsetHeight}`)
      
      
      
      
      
  } else {
    leftMenu.style.height = '88px';
  }
}











