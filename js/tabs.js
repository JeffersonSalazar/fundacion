/* 
	$tabHeader: alamacena el elemento html al cual le 
  	vamos a aplicar clases con javascript
*/
let $tabInfo = document.querySelectorAll('.tab_info');

/* 
	$tabBody: alamacena el elemento html al cual le 
  	vamos a aplicar clases con javascript
*/
let $tabBody = document.querySelectorAll('.tab_content_body');

/* 
  realizamos un forEach en la variable $tabHeader,
  tomamos el parametro i que nos arroja la posicion
  de un elemento dentro del arreglo
*/
$tabInfo.forEach((element, i) => {
	/*
		pasamos a $tabHeader el parametro i y le añadimos
		a cada elemento un evento click o podemos 
		reemplazarlo por un evento mouseover
	*/
	$tabInfo[i].addEventListener('click', () => {
		/* 
			realizamos un forEach en la variable $tabInfo,
			y le agregamos a cada elemento la clase
			js_header_active definida en la hoja de estilos
		*/
		$tabInfo.forEach((info) => {
			info.classList.remove('js_header_active');
		});

		/* 
			realizamos un forEach en la variable $tabBody,
			y le agregamos a cada elemento la clase
			js_body_hidden definida en la hoja de estilos
		*/
		$tabBody.forEach((body) => {
			body.classList.add('js_body_hidden');
		});

		/* 
			pasamos a la variable $tabHeader el parametro i 
			definido forEach inicial y le añadimos la clase
			js_header_active definida en la hoja de estilos
		*/
		$tabInfo[i].classList.add('js_header_active');

		/* 
			pasamos a la variable $tabBody el parametro i 
			definido en el forEach inicial y le removemos la clase
			js_body_active definida en la hoja de estilos
		*/
		$tabBody[i].classList.remove('js_body_hidden');
	});
});
