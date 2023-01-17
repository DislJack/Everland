const menuButtonIcon = document.querySelector('.header__menu-button-icon');
const menuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');


// Открыть(закрыть) меню Header

menuButton.addEventListener('click', () => {
  menuButtonIcon.classList.toggle('is-active');
  headerMenu.classList.toggle('header__menu_opened');
});
