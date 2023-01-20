// Переменные

const accordeons = document.querySelectorAll('.accordeon');
const menuButtonIcon = document.querySelector('.header__menu-button-icon');
const menuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');
const supportButtons = document.querySelectorAll('.support__button');
const supportButtonsSum = document.querySelectorAll('.support__button-sum');
const supportButtonsPayment = document.querySelectorAll('.support__button-payment');


// Функции

// Выбор способ оплаты, суммы и тд
function buttonActive(button) {
	button.forEach(el => {
		el.addEventListener('click', (e) => {
			button.forEach(item => { item.classList.remove('support__button_active'); });
			el.classList.add('support__button_active')
		})
	});
};


// Код
// Открыть(закрыть) меню Header

menuButton.addEventListener('click', () => {
  menuButtonIcon.classList.toggle('is-active');
  headerMenu.classList.toggle('header__menu_opened');
});

accordeons.forEach((accordeon) => {
  accordeon.addEventListener('click', () => accordeon.toggleAttribute('open'));
});




// Выбор способ оплаты, суммы и тд
buttonActive(supportButtons);
buttonActive(supportButtonsSum);
buttonActive(supportButtonsPayment);