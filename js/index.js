/*               Funcion de INDEX.html del MENU DE OPCIONES                */

"uses estrict"

const menu = document.querySelector(".menu");
const barra = document.querySelector(".barra");

// Función para mostrar las opciones del menú
function mostrarMenu() {
    barra.classList.toggle("show");
}

// Escuchar evento de click en el botón
menu.addEventListener("click", mostrarMenu);
