// Переменные

const accordeons = document.querySelectorAll('.accordeon');
const menuButtonIcon = document.querySelector('.header__menu-button-icon');
const menuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

// Функции



// Код
// Открыть(закрыть) меню Header

menuButton.addEventListener('click', () => {
  menuButtonIcon.classList.toggle('is-active');
  headerMenu.classList.toggle('header__menu_opened');
});

accordeons.forEach((accordeon) => {
  accordeon.addEventListener('click', () => accordeon.toggleAttribute('open'));
});