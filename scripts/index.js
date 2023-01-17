// Переменные

const accordeons = document.querySelectorAll('.accordeon');

// Функции



// Код

accordeons.forEach((accordeon) => {
  const button = accordeon.querySelector('.button_type_accordeon');
  const content = accordeon.querySelector('.accordeon__text');
  if (accordeon.hasAttribute('open') === false) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = null;
  }
  button.addEventListener('click', () => {
    if (accordeon.hasAttribute('open') === false) {
      accordeon.setAttribute('open', true);
    } else {
      accordeon.removeAttribute('open');
    }
  });
});