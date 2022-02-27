const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay_order');
const order = overlayOrder.querySelector('.modal__order');

buttonsOrder.forEach(buttonOrder => {
	buttonOrder.addEventListener('click', () => {
		overlayOrder.classList.add('overlay_active');
		order.value = buttonOrder.dataset.order;
	})
});

overlayOrder.addEventListener('click', event => {
	const target = event.target;
	if (target === overlayOrder || target.closest('.modal__close')) {
		overlayOrder.classList.remove('overlay_active');
	}
})