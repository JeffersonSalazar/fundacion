/* 
	_ _ _ _ _ _ _ _ _ _ start code show tabs _ _ _ _ _ _ _ _ _ _
*/

/* 
	.$tabHeader: almacena el elemento html definido
	.con el clase tab_content_header
*/
let $tabHeader = document.querySelectorAll('.tab_content_header');

/* 
	.$tabBody: almacena el elemento html definido
	.con la clase tab_content_body
*/
let $tabBody = document.querySelectorAll('.tab_content_body');

/* 
  realizamos un recorrido forEach en $tabHeader,
  el cual recibe 2 parámetros y una función de flecha
*/
$tabHeader.forEach((element, i) => {
	/*
		pasamos a $tabHeader el parámetro (i), que nos 
		indica la posición del elemento html seleccionado
		dentro del array y generamos un evento click o
		podemos reemplazarlo por un evento mouseover
	*/
	$tabHeader[i].addEventListener('click', () => {
		/* 
			realizamos un recorrido forEach en $tabHeader
			y pasamos 1 parámetro y una función de flecha
		*/
		$tabHeader.forEach((header, i) => {
			/* 
				pasamos el parámetro (header) que nos indica
				el elemento html seleccionado dentro del array
				y removemos la clase js_header_active definida 
				en la hoja de estilos _tabs.scss
			*/
			header.classList.remove('js_header_active');
		});

		/* 
			realizamos un recorrido forEach en $tabBody,
			el cual recibe 1 parámetro y una función de flecha
		*/
		$tabBody.forEach((body, i) => {
			/* 
				pasamos el parámetro (body) que nos indica
				el elemento html seleccionado dentro del array
				y agregamos la clase js_body_hidden definida 
				en la hoja de estilos _tabs.scss
			*/
			body.classList.add('js_body_hidden');
		});

		/* 
			pasamos $tabHeader el parámetro (i) y agregamos 
			la clase js_header_active definida en la 
			hoja de estilos _tab.scss
		*/
		$tabHeader[i].classList.add('js_header_active');

		/* 
			pasamos a $tabBody el parámetro (i) y removemos 
			la clase js_body_hidden definida en la 
			hoja de estilos _tab.scss
		*/
		$tabBody[i].classList.remove('js_body_hidden');
	});
});

/* 
	_ _ _ _ _ _ _ _ _ _ end code show tabs _ _ _ _ _ _ _ _ _ _
*/
