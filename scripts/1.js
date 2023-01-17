const menuButtonIcon = document.querySelector('.header__menu-button-icon');
const menuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');


// Открыть(закрыть) элемент
function openPopup(popup, modif) {
  popup.classList.add(modif);
}

function closePopup(popup, modif) {
  popup.classList.remove(modif);
}

// Слушатель на открытие (закрытие) header-menu-button
menuButton.addEventListener('click', function(evt){
  evt.preventDefault;
  if (menuButtonIcon.className.includes('is-active')){
    closePopup(menuButtonIcon, 'is-active');
    closePopup(headerMenu, 'header__menu_opened');
    } else{
    openPopup(menuButtonIcon, 'is-active');
    openPopup(headerMenu, 'header__menu_opened');
    }
});
