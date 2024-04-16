let modalWindow = document.querySelector('.modal-window'); //получили главный блок модального окна

let closeModalWindow = document.querySelector('.modal-window__button-close'); //получили кнопку закрыть модального окна

let  modalWindowCall  = modalWindow.querySelector('.modal-window__call');   //получили модальное окно внутри обертки

let callButton = document.querySelector('.header-wrapper__message-button'); //получили кнопку call

let messageButton = document.querySelector('.header-wrapper__call-button'); //получили кнопку message

let modalWindowH1 = document.querySelector('.modal-window__h1'); //получили поле заголовка модалки для его замены

let inputForm = document.querySelectorAll('.modal-window__input--visible-flex'); //получили поле заголовка модалки для его замены


function removeClassListTimeOut() {
  
  modalWindow.classList.remove('modal-window--visible');
  modalWindowCall.classList.remove('modal-window__call--unvisible');
}


function inputVisibleOff(className){
  for (const item of inputForm) {
    if(!item.classList.contains('modal-window__input--visible-none')) {
      item.classList.add(`${className}`)
    }
  }
}

function inputVisibleOn(className){
  for (const item of inputForm) {
    if(item.classList.contains('modal-window__input--visible-none')) {
      item.classList.remove(`${className}`)
    }
  }
}


searchButtonCall(callButton, "Обратная связь", 1, inputForm);
searchButtonCall(messageButton, "Заказать звонок", 0, inputForm);


function searchButtonCall(callButton, txtChange = 0, inputVisible = 0, inputForm) {


  callButton.addEventListener('click', function () {
    if (txtChange) {
    
      modalWindowH1.textContent = txtChange;
    }
    if (!inputVisible){
      inputVisibleOff('modal-window__input--visible-none');


    } else {
      inputVisibleOn('modal-window__input--visible-none');

    } 

    

      
   
    if (modalWindow.classList.contains('modal-window--visible')) {


      modalWindowCall.classList.add('modal-window__call--unvisible');
      setTimeout(removeClassListTimeOut, 1000); //удалить класс видимости

    } else {
      modalWindow.classList.add('modal-window--visible') //добавить класс видимости
      
      
      closeModalWindow.addEventListener('click', function () {
        if (modalWindow.classList.contains('modal-window--visible')) {

          modalWindowCall.classList.add('modal-window__call--unvisible');
          setTimeout(removeClassListTimeOut, 1000); 
        } 


      });

      modalWindowCall  = modalWindow.querySelector('.modal-window__call');

      modalWindowCall.addEventListener('click', function (event) {
        event.stopPropagation();


      });

      modalWindow.addEventListener('click', function () {
          
        modalWindowCall.classList.add('modal-window__call--unvisible');
          setTimeout(removeClassListTimeOut, 1000); 
      });
    }
  });
  
}



export {searchButtonCall, inputVisibleOff, inputVisibleOn, inputForm};