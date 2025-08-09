/*               Funcion de INDEX.html del BOTON MODO                */

"use strict";

const btnModo = document.getElementById("btnModo");

// Función para mostrar alert al cambiar modo
function mostrarAlertaModo() {
    alert("Aquí podrás cambiar el color del Fondo \n y de las Letras de la Página");
}

// Escuchar evento de click en el botón
btnModo.addEventListener("click", mostrarAlertaModo);
