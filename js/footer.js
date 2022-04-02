// _ _ _ _ _ _ _ _ _ _ start code show accordion _ _ _ _ _ _ _ _ _ _ //

/* 
	.$boxAccordion: almacena todos los elementos html que tengan la 
	.clase box_accordion
*/
let $boxAccordion = document.querySelectorAll('.box_accordion');

/* 
	realizamos un recorrido forEach en $boxAccordion
	y pasamos 1 parámetro y una función de flecha
*/
$boxAccordion.forEach((accordion1) =>
	/* 
		pasamos a cada parámetro accordion1 un evento click
		y declaramos una función
	*/
	accordion1.addEventListener('click', () => {
		/* 
			si en el recorrido $boxAccordion tiene la clase 
			js_show_accordion definida en la hoja de estilos,
			footer.scss entonces la removemos...
		*/
		if (accordion1.classList.contains('js_show_accordion')) {
			accordion1.classList.remove('js_show_accordion');
		} else {
			/* 
				de lo contrario hacemos un segundo recorrido forEach
				en $boxAccordion para remover de este la clase 
				js_show_accordion y añadir al primer recorrido la
				misma clase
			*/
			$boxAccordion.forEach((accordion2) =>
				accordion2.classList.remove('js_show_accordion')
			);

			/* 
				finalmente añadimos a accordion la clase js_show_accordion
				definida en la hoja de estilos footer.scss
			*/
			accordion1.classList.add('js_show_accordion');
		}
	})
);

// _ _ _ _ _ _ _ _ _ _ end code show accordion _ _ _ _ _ _ _ _ _ _ //

// _ _ _ _ _ _ _ _ _ _ start code go top _ _ _ _ _ _ _ _ _ _ //

/* 
	.$goTop: almacena el elemento html que tengan el ID go-top
*/
let $goTop = document.querySelector('#go-top');

/* 
    generamos un evento scroll para el objeto windows y definimos
	una función
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 50 
		al momento de hacer scroll, añadimos a 
		$goTop la clase js_show_go_top definida 
		en la hoja de estilos footer.scss
    */
	if (window.pageYOffset > 50) {
		$goTop.classList.add('js_show_go_top');
	} else {
		/* 
			de lo contrario removemos de $goTop 
			la clase js_show_go_top
		*/
		$goTop.classList.remove('js_show_go_top');
	}
});

/* 
    ahora generamos un evento click en $goTop y definimos
	una función
*/
$goTop.addEventListener('click', () => {
	/* 
        implementamos la propiedad scrollTo del objeto window 
		que recibe las propiedades top y left que nos 
        redirige a la parte inicial de la pagina y
        behavior para suavizar la subida
    */
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});

// _ _ _ _ _ _ _ _ _ _ start code go top _ _ _ _ _ _ _ _ _ _ //

// _ _ _ _ _ _ _ _ _ _ start code current year _ _ _ _ _ _ _ _ _ _ //

/* 
	.$copyRight: almacena el elemento html que tengan el ID copy_right
*/
let $copyRight = document.querySelector('#copy-right');

/* 
	.currentYear: hacemos uso de la propiedad new Date().getFullYear()
	.para almacenar en la variable el año actual 
*/
let currentYear = new Date().getFullYear();

/* 
	haciendo uso de la propiedad innerHtml agregamos a $copyRight el año actual
*/
$copyRight.innerHTML = `Copyright - Fundación Bolivar Davivienda ${currentYear}`;

// _ _ _ _ _ _ _ _ _ _ start code current year _ _ _ _ _ _ _ _ _ _ //
