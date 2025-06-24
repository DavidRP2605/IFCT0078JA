//Creamos un div para ocultar o enseñar el contenido
let divVisibilidad = document.createElement("div");
divVisibilidad.id = "divVisibilidad"; //Le ponemos un ID al botón

//Añadimos este botón al final de la sección
const parrafoVisibilidad = document.getElementById("parrafoPrincipal");
const contenedor = parrafoVisibilidad.parentNode;
contenedor.replaceChild(divVisibilidad, parrafoVisibilidad);
divVisibilidad.appendChild(parrafoVisibilidad);

//Creamos un boton para ocultar o enseñar el contenido 
let botonVisibilidad = document.createElement("button");
botonVisibilidad.id = "botonVisibilidad"; //Le ponemos un ID al botón
botonVisibilidad.textContent = "Ocultar/Mostar párrafo "; //Le añadimos contenido al botón

//Creamos un boton para ocultar o enseñar el contenido en modo acordeon
let botonAcordeon = document.createElement("button");
botonAcordeon.id = "botonAcordeon"; //Le ponemos un ID al botón
botonAcordeon.textContent = "Ocultar/Mostar párrafo acordeon "; //Le añadimos contenido al botón

//Añadimos estos botónes al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonVisibilidad);
document.getElementById("seccionBotones")?.appendChild(botonAcordeon);

let visibilidad = document.getElementById("divVisibilidad");

function ocultarParrafo() {
  //Si la visibilidad está en oculta, la enseña (en el primer caso no esta ni mostrando ni ocultando, por lo que entra en el else y se oculta)
  if (visibilidad.style.display == "none") {
    document.getElementById("divVisibilidad").style.display = "block";
  } else {
    document.getElementById("divVisibilidad").style.display = "none";
  }
}

function ocultarAcordeon() {
  if (visibilidad.style.visibility == "hidden") {
    document.getElementById("divVisibilidad").style.visibility = "visible";
  } else {
    document.getElementById("divVisibilidad").style.visibility = "hidden";
  }
}

botonVisibilidad.onclick = ocultarParrafo;
botonAcordeon.onclick = ocultarAcordeon;