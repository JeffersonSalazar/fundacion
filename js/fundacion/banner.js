/* 
    almacenamos en varaibles a icon-burger-menu, icon-close-menu
    y a la caja contenedora del menu de navegacion box-navbar
*/
let $itemGalery = document.querySelectorAll('.item_galery');

$itemGalery.forEach((item, i) => {
    $itemGalery[i].addEventListener('mouseenter', () => {

        $itemGalery.forEach( (date) => {
            date.classList.add('js_close_img');
        })

        $itemGalery[i].classList.remove('js_close_img');
    })

    $itemGalery[i].addEventListener('mouseleave', () => {

        $itemGalery.forEach( (date) => {
            date.classList.remove('js_close_img');
        })
    })
});