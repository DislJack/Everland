const supportButton = document.querySelectorAll('.support__button')
const supportButtonSum = document.querySelectorAll('.support__button-sum')
const supportButtonPayment = document.querySelectorAll('.support__button-payment')

function buttonActive(button) {
	button.forEach(el => {
		el.addEventListener('click', function() {
			el.classList.toggle('support__button_active')
		})
	});
}

buttonActive(supportButton)
buttonActive(supportButtonSum)
buttonActive(supportButtonPayment)