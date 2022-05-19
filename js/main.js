//VÍNCULO CON LA ETIQUETA

var menu_icon = document.getElementById('icon_menu');
var menu = document.getElementById('menu');

//FUNCIONES
function activar(){
    menu.classList.add("activo");
}

//EVENTO
menu_icon.addEventListener('click', activar);