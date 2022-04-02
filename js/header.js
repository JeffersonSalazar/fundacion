// _ _ _ _ _ _ _ _ _ _ start code show and close menu _ _ _ _ _ _ _ _ _ _ //

/* 
    $iconBurger y $iconClose: almacenan los elementos html
    con ID icon-burger, icon-close y content-nav
*/
let $iconBurger = document.querySelector('#icon-burger');
let $iconClose = document.querySelector('#icon-close');

/* 
    $body y $contentNav: almacenan los elementos html
    con ID body y content-nav
*/
let $body = document.querySelector('#body');
let $contentNav = document.querySelector('#content-nav');

/* 
    generamos un evento click en $iconBurger y definimos
    una función
*/
$iconBurger.addEventListener('click', () => {
    /* 
        añadimos a $body la clase js_bg_body  
        definida en la hoja de estilos style.scss
    */
        $body.classList.add('js_bg_body');

    /* 
        añadimos a $contentNav la clase js_show_nav  
        definida en la hoja de estilos header.scss
    */
	$contentNav.classList.add('js_show_nav');
});

/* 
    generamos un evento click en $iconClose y definimos
    una función
*/
$iconClose.addEventListener('click', () => {
    /* 
        removemos de $body la clase js_bg_body 
        definida en la hoja de estilos style.scss
    */
        $body.classList.remove('js_bg_body');

    /* 
        removemos de $contentNav la clase js_show_nav 
        definida en la hoja de estilos header.scss
    */
	$contentNav.classList.remove('js_show_nav');
});

// _ _ _ _ _ _ _ _ _ _ end code show and close menu _ _ _ _ _ _ _ _ _ _ //

// _ _ _ _ _ _ _ _ _ _  start code header and dropdown scroll _ _ _ _ _ _ _ _ _ _  //

/* 
    $headerScroll y $ulDropdown: almacenan los elementos html
    con ID header-scroll y ul-dropdown
*/
let $headerScroll = document.querySelector('#header-scroll');
let $ulDropdown = document.querySelector('#ul-dropdown');

/* 
    generamos un evento scroll al objeto window
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura de window en el eje (Y) es mayor a 102 
    */
	if (window.pageYOffset > 102) {
        /* 
            añadimos a $headerScroll la clase js_header_scroll
            definida en la hoja de estilos header.scss
        */
		$headerScroll.classList.add('js_header_scroll');

        /* 
            añadimos a $ulDropdown la clase js_dropdown_scroll
            definida en la hoja de estilos header.scss
        */
		$ulDropdown.classList.add('js_dropdown_scroll');
	} else {
		/* 
            de lo contrario removemos las clases $headerScroll 
            y $ulDropdown
        */
		$headerScroll.classList.remove('js_header_scroll');
		$ulDropdown.classList.remove('js_dropdown_scroll');
	}
});

// _ _ _ _ _ _ _ _ _ _  end code header and dropdown scroll _ _ _ _ _ _ _ _ _ _  //

// _ _ _ _ _ _ _ _ _ _ start code show dropdown _ _ _ _ _ _ _ _ _ _ //

/*
    $liDropdown: almacena el elemento html con ID li-dropdown
*/
let $liDropdown = document.querySelector('#li-dropdown');

/* 
    generamos un evento click en $liDropdown y definimos una 
    función
*/
$liDropdown.addEventListener('click', () => {
    /* 
        añadimos o removemos de $liDropdown la clase 
        js_show_dropdown definida en la hoja de estilos header.scss
    */
	$liDropdown.classList.toggle('js_show_dropdown');
});

// _ _ _ _ _ _ _ _ _ _ end code show dropdown _ _ _ _ _ _ _ _ _ _ //

// _ _ _ _ _ _ _ _ _ _ start code links active _ _ _ _ _ _ _ _ _ _ //

/*
    $aLink: almacena los elementos html tags-a que se
    encuentren dentro de una tag-li
*/
let $aLink = document.querySelectorAll('li a');

/*
    ejecutamos la función linkActive definida en la parte de abajo
*/
function linkActive() {
    /* 
        realizamos un recorrido forEach en $aLink y definimos una 
        función a la cual pasamos el parámetro (e)

        finalmente removemos de todos los enlaces la clase
        js_link_active definida en la hoja de estilos header.scss
    */
	$aLink.forEach((e) => e.classList.remove('js_link_active'));

    /* 
        ahora añadimos al enlace seleccionado la clase
        js_link_active definida en la hoja de estilos header.scss
    */
	this.classList.add('js_link_active');
}

/*
    realizamos un recorrido forEach en $aLink y definimos una 
    función a la cual pasamos el parámetro (link)

    definimos un evento click en link declaramos una funcion que 
    ejecutamos en la parte de arriba
*/
$aLink.forEach((link) => link.addEventListener('click', linkActive));

// _ _ _ _ _ _ _ _ _ _ end code links active _ _ _ _ _ _ _ _ _ _ //
