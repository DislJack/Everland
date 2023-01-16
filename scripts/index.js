// Переменные

const accordeons = document.querySelectorAll('.accordeon');

// Функции



// Код

accordeons.forEach((accordeon) => {
  const button = accordeon.querySelector('.button_type_accordeon');
  const control = accordeon.querySelector('.accordeon__label');
  const content = accordeon.querySelector('.accordeon__text');
  button.addEventListener('click', () => {
    if (accordeon.hasAttribute('open') === false) {
      accordeon.setAttribute('open', true);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      accordeon.removeAttribute('open');
      content.style.maxHeight = null;
    }
  });
  if (accordeon.hasAttribute('open') === true) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});