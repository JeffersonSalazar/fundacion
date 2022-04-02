/* 
	_swiper: variable que almacena el contenedor con la
	_clase mySwiper
*/
let swiper = new Swiper('.mySwiper', {
	/* 
		navigation: implementa la funcionalidad de ir atrás
		o adelante con los iconos del slider
	*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
