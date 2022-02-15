const createSnow = n => {
	const style = document.createElement('style');
	style.textContent = `
		body {
			position: relative;
		}
		.snow {
			width: 20px;
			height: 20px;
			position: fixed;
			top: -20px;
			pointer-events: none;
			animation: fall linear;
			background-repeat: no-repeat;
		}
		@keyframes fall {
			100% {
				transform: translate(100vh, 100vw);
			}
		}
	`;
	document.head.append(style);

	let i = 1;
	const count = 4;

	const createSnowFlake = () => {
		const snow = document.createElement('div');
		snow.classList.add('snow');

		i += 1;
		if (i > count) i = 1;

		snow.style.cssText = `
			left: ${Math.random() * window.innerWidth}px;
			opacity: ${Math.random()};
			animation-duration: ${Math.random() * n + 2}s;
			background-image: url('snow/img/snowflake${i}.svg');
		`;
		document.body.append(snow);

		setTimeout(() => {
			snow.remove();
		}, (n + 2) * 1000)
		
	};

	setInterval(createSnowFlake, 300);

};

createSnow(12);