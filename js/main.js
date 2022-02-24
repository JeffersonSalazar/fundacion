// ------------------ start show and close menu ----------- //

/* 
    almacenamos en varaibles a icon-burger-menu, icon-close-menu
    y a la caja contenedora del menu de navegacion box-navbar
*/
let iconBurgerMenu = document.querySelector('#icon-burger-menu');
let iconCloseMenu = document.querySelector('#icon-close-menu');
let boxNavbar = document.querySelector('#box-navbar');

/* 
    generamos un evento click en el iconBurgerMenu que
    añade a boxNavbar una clase js_show_menu definida 
    en la hoja de estilos header.scss
*/
iconBurgerMenu.addEventListener('click', () => {
	boxNavbar.classList.add('js_show_menu');
});

/* 
    generamos un evento click en el iconCloseMenu que
    remueve de boxNavbar la clase js_show_menu definida 
    en la hoja de estilos header.scss
*/
iconCloseMenu.addEventListener('click', () => {
	boxNavbar.classList.remove('js_show_menu');
});

// ------------------ end show and close menu ----------- //

// ------------------ start header scroll ----------- //

/* 
	headerScroll: alamacena la caja a la cual le vamos a
    aplicar el efecto scroll en este caso a section_header
*/
let sectionScroll = document.querySelector('#header-scroll');
let ulDropdown = document.querySelector('#ul-dropdown');

/* 
    generamos un evento scroll al objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 102
        añadimos a headerScroll una clase definida en 
        la hoja de estilos
    */
	if (window.pageYOffset > 102) {
		sectionScroll.classList.add('js_header_scroll');
		ulDropdown.classList.add('js_scroll_dropdown');
	} else {
		/* 
            de lo contrario removemos de headerScroll la clase
        */
		sectionScroll.classList.remove('js_header_scroll');
		ulDropdown.classList.remove('js_scroll_dropdown');
	}
});

// ------------------ end header scroll ----------- //

// ------------------ start show dropdown --------- //

/*
    liDropdown: alamacena la tag-li del dropdown
*/
let liDropdown = document.querySelector('#li-dropdown');

/* 
    generamos un evento click en el liDropdown luego 
    añadimos o removemos de liDropdown la clase 
    js_show_dropdown definida en la hoja de estilos header.scss
*/
liDropdown.addEventListener('click', (e) => {
	e.preventDefault();
	liDropdown.classList.toggle('js_show_dropdown');
});

// ------------------ end show dropdown ----------- //

// ------------------ start li-active --------- //

/*
    aLink: alamacena todas las tags-a
*/
let aLink = document.querySelectorAll('a');

function linkActive() {
	aLink.forEach((e) => e.classList.remove('js_link_active'));
	this.classList.add('js_link_active');
}

/*
 */
aLink.forEach((link) => link.addEventListener('click', linkActive));

// ------------------ end li-active ----------- //
