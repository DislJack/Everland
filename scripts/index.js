// Переменные

const accordeons = document.querySelectorAll('.accordeon');

// Функции



// Код

accordeons.forEach((accordeon) => {
  const content = accordeon.querySelector('.accordeon__text');
  accordeon.addEventListener('click', () => {
    accordeon.toggleAttribute('open');
    content.toggleAttribute('open');
  });
});