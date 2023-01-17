// Переменные

const accordeons = document.querySelectorAll('.accordeon');

// Функции



// Код

accordeons.forEach((accordeon) => {
  const button = accordeon.querySelector('.button_type_accordeon');
  const content = accordeon.querySelector('.accordeon__text');
  button.addEventListener('click', () => {
    accordeon.toggleAttribute('open');
    content.toggleAttribute('open');
  });
});