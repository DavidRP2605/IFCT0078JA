//Creamos un div para ocultar o enseñar el contenido
let divVisibilidad = document.createElement("div");
divVisibilidad.id = "divVisibilidad"; //Le ponemos un ID al botón

//Añadimos este botón al final de la sección
const parrafoVisibilidad = document.getElementById("parrafoPrincipal");
const contenedor = parrafoVisibilidad.parentNode;
contenedor.replaceChild(divVisibilidad, parrafoVisibilidad);
divVisibilidad.appendChild(parrafoVisibilidad);
// document.getElementById("seccionParrafos")?.appendChild(divVisibilidad);

//Creamos un boton para ocultar o enseñar el contenido
let botonVisibilidad = document.createElement("button");
botonVisibilidad.id = "botonVisibilidad"; //Le ponemos un ID al botón
botonVisibilidad.textContent = "Ocultar/Mostar párrafo "; //Le añadimos contenido al botón

//Añadimos este botón al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonVisibilidad);

function ocultarParrafo() {
  let visibilidad = document.getElementById("divVisibilidad").style.display;
  //Si la visibilidad está en oculta, la enseña (en el primer caso no esta ni mostrando ni ocultando, por lo que entra en el else y se oculta)
  if (visibilidad == "none") {
    document.getElementById("divVisibilidad").style.display = "block";
  } else {
    document.getElementById("divVisibilidad").style.display = "none";
  }
}

botonVisibilidad.onclick = ocultarParrafo;
