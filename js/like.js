/*               Funcion de INDEX.html del BOTON ME GUSTA                */

"use strict";

const btnLike = document.getElementById("btnLike");
const spanLikes = document.getElementById("contadorLikes");

// Cargar contador desde localStorage (o empezar en 0 si no existe)
let contadorLikes = parseInt(localStorage.getItem("contadorLikes")) || 0;

// Mostrar el contador al cargar la página
spanLikes.textContent = contadorLikes;

// Función para incrementar y mostrar el contador
function sumarLike() {
    contadorLikes++;
    localStorage.setItem("contadorLikes", contadorLikes); // Guardar en localStorage
    spanLikes.textContent = contadorLikes; // Actualizar en pantalla
    alert(`¡Gracias por tu Me Gusta! ❤️\n Llevamos ${contadorLikes} Me Gusta.`);
}

// Escuchar evento de click en el botón
btnLike.addEventListener("click", sumarLike);
