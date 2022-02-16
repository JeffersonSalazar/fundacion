/* 
	$tabHeader: alamacena el elemento html al cual le 
  	vamos a aplicar clases con javascript
*/
let $tabHeader = document.querySelectorAll('.tab_content_header');

/* 
	$tabBody: alamacena el elemento html al cual le 
  	vamos a aplicar clases con javascript
*/
let $tabBody = document.querySelectorAll('.tab_content_body');

/* 
	$tabImg: alamacena el elemento html al cual le 
  	vamos a aplicar clases con javascript
*/
let $tabImg = document.querySelectorAll('.tab_content_img');

/* 
  realizamos un forEach en la variable $tabLi,
  tomamos el parametro i que nos arroja la posicion
  de un elemento dentro del arreglo
*/
$tabHeader.forEach((element, i) => {
	/*
		pasamos a $tabHeader el parametro i y le añadimos
		a cada elemento un evento click o podemos 
		reemplazarlo por un evento mouseover
	*/
	$tabHeader[i].addEventListener('click', () => {
		/* 
			realizamos un forEach en la variable $tabHeader,
			y le agregamos a cada elemento la clase
			js_header_active definida en la hoja de estilos
		*/
		$tabHeader.forEach((header) => {
			header.classList.remove('js_header_active');
		});

		/* 
			realizamos un forEach en la variable $tabImg,
			y le agregamos a cada elemento la clase
			js_img_hidden definida en la hoja de estilos
		*/
		$tabImg.forEach((img) => {
			img.classList.add('js_img_hidden');
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
		$tabHeader[i].classList.add('js_header_active');

		/* 
			pasamos a la variable $tabImg el parametro i 
			definido en el forEach inicial y le removemos la clase
			js_img_active definida en la hoja de estilos
		*/
		$tabImg[i].classList.remove('js_img_hidden');

		/* 
			pasamos a la variable $tabBody el parametro i 
			definido en el forEach inicial y le removemos la clase
			js_body_active definida en la hoja de estilos
		*/
		$tabBody[i].classList.remove('js_body_hidden');
	});
});
