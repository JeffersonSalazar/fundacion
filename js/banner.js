/* 
	swipper: variable que almacena el contenedor con la
	clase myswiper
*/
let swiper = new Swiper('.mySwiper', {
	/* 
		navigation: implementa la funcionalidad de ir atras
		o adelante de los iconos del slider
	*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
