/*               Funcion de INDEX.html del BOTON ME IDIOMA                */

"use strict";

const btnIdioma = document.getElementById("btnIdioma");

// Función para mostrar alert al cambiar idioma
function mostrarAlertaIdioma() {
    alert("Aquí podrás cambiar el Idioma de la Página");
}

// Escuchar evento de click en el botón
btnIdioma.addEventListener("click", mostrarAlertaIdioma);
