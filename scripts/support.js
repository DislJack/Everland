const supportButtons = document.querySelectorAll('.support__button');
const supportButtonsSum = document.querySelectorAll('.support__button-sum');
const supportButtonsPayment = document.querySelectorAll('.support__button-payment');


function buttonActive(button) {
	button.forEach(el => {
		el.addEventListener('click', (e) => {
			button.forEach(item => { item.classList.remove('support__button_active'); });
			el.classList.add('support__button_active')
		})
	});
};


buttonActive(supportButtons);
buttonActive(supportButtonsSum);
buttonActive(supportButtonsPayment);