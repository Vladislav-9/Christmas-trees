const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay_order');
const btnConsultation = document.querySelector('.header__consultation');
const overlayConsultation = document.querySelector('.overlay_consultation');

buttonsOrder.forEach(buttonOrder => {
	buttonOrder.addEventListener('click', () => {
		overlayOrder.classList.add('overlay_active');
		const order = overlayOrder.querySelector('.modal__order');
		order.value = buttonOrder.dataset.order;
	})
});

overlayOrder.addEventListener('click', event => {
	const target = event.target;
	if (target === overlayOrder || target.closest('.modal__close')) {
		overlayOrder.classList.remove('overlay_active');
	}
});

btnConsultation.addEventListener('click', () => {
	overlayConsultation.classList.add('overlay_active');
	const order = overlayConsultation.querySelector('.modal__order');
	order.value = btnConsultation.dataset.order;
});

overlayConsultation.addEventListener('click', event => {
	const target = event.target;
	if (target === overlayConsultation || target.closest('.modal__close')) {
		overlayConsultation.classList.remove('overlay_active');
	}
});