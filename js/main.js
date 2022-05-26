//VÍNCULO CON LA ETIQUETA

var menu_icon = document.getElementById('icon_menu');
var menu = document.getElementById('menu');

var folder_icon = document.getElementById('folder');
var folder = document.getElementById('carpeta');

//FUNCIONES
function activar(){
    menu.classList.add("activo");
}

function activar2(){
    folder.classList.add("activo");
}


//EVENTO
menu_icon.addEventListener('click', activar);
folder_icon.addEventListener('click', activar2);