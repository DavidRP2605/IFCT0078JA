//Creamos un boton
let botonCambiarTexto = document.createElement("button");
botonCambiarTexto.id = "botonCambiarTexto"; //Le ponemos un ID al botón
botonCambiarTexto.textContent = "Boton para cambiar el texto "; //Le añadimos contenido al botón

//Lo añadimos al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonCambiarTexto);

//Funcion donde cambiamos el texto de ese parrafo
function cambiarTexto() {
  document.getElementById("parrafoPrincipal").innerHTML =
    "¡El texto ha cambiado con JavaScript!";
}

//Al hacer click, se ejecuta la función
botonCambiarTexto.onclick = cambiarTexto;
