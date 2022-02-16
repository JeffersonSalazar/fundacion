// -------------------- start code show accordeon -------------- //

/* 
	$boxAccordeon: alamacena todas las cajas con la clase
	box_accordeon definida en html
*/
let $boxAccordeon = document.querySelectorAll('.box_accordeon');

/* 
	realizamos un recorrido forEach por cada caja
*/
$boxAccordeon.forEach((accordeon1) =>
	/* 
		a cada caja agregamos un evento click 
	*/
	accordeon1.addEventListener('click', () => {
		/* 
			si en el recorrido $boxAccordeon tiene la clase 
			js_show_accordeon definida en la hoja de estilos,
			entonces la removemos...
		*/
		if (accordeon1.classList.contains('js_show_accordeon')) {
			accordeon1.classList.remove('js_show_accordeon');
		} else {
			/* 
				de lo contrario hacemos un segundo recorrido forEach
				en $boxAccordeon para remover de este la clase 
				js_show_accordeon y añadir al primer recorrido la
				misma clase
			*/
			$boxAccordeon.forEach((accordeon2) =>
				accordeon2.classList.remove('js_show_accordeon')
			);
			accordeon1.classList.add('js_show_accordeon');
		}
	})
);

// -------------------- end code show accordeon -------------- //

// -------------------- start code gotop --------------------- //

/* 
	$goTop: alamacena la caja con el ID
	box_gotop definido en html 
*/
let $goTop = document.querySelector('#go-top');

/* 
    generamos un evento scroll para el objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 50 
		al momento de ahcer scroll le añadimos a 
		$arrowUp la clase js_show_gotop definida 
		en la hoja de estilos
    */
	if (window.pageYOffset > 50) {
		$goTop.classList.add('js_show_gotop');
	} else {
		/* 
			de lo contrario removemos de $arrowUp 
			la clase js_show_gotop
		*/
		$goTop.classList.remove('js_show_gotop');
	}
});

/* 
    ahora generamos un evento click para $arrowUp
*/
$goTop.addEventListener('click', () => {
	/* 
        implementamos scrollTo del objeto window 
		que recibe la propiedades top y left que nos 
        redirige a la parte inicial de la pagina y
        behavior que suavisa la subida
    */
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});

// -------------------- end code gotop ----------------------- //

// -------------------- start code current year -------------- //

/* 
	$copyRight: alamacena la caja con el ID
	copy-right definido en html 
*/
let $copyRight = document.querySelector('#copy-right');

/* 
	currentYear: alamacena el año actual
*/
let currentYear = new Date().getFullYear();

/* 
	haciendo uso de la propiedad innerHtml almacenamos en la variable
	$copyRight el año actual
*/
$copyRight.innerHTML = `Copyright - Fundacion Bolivar Davivienda ${currentYear}`;

// -------------------- end code current year -------------- //
