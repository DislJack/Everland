// Переменные

const accordeons = document.querySelectorAll('.accordeon');
// Функции



// Код

accordeons.forEach((accordeon) => {
  accordeon.addEventListener('click', () => accordeon.toggleAttribute('open'));
});