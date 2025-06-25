//Creamos un botón
let botonImagen = document.createElement("button");
botonImagen.id = "botonImagen"; //Le ponemos un ID al botón
botonImagen.textContent = "Mostrar imagen"; //Le añadimos contenido al botón

//Añadimos este botón al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonImagen);

function crearImagen() {
  let contenedor = document.getElementById("contenedorImagen");
  let imagenExistente = document.getElementById("imagenMono");

  if (imagenExistente) {
    // Si la imagen ya está, la eliminamos
    contenedor.removeChild(imagenExistente);
    //Le cambiamos el texto al botón
    botonImagen.textContent = "Mostrar imagen";
  } else {
    // Creamos el elemento imagen
    let imagen = document.createElement("img");
    imagen.id = "imagenMono"; // Le damos un ID para poder referenciarla después
    imagen.height = 100; //Le ponemos una altura
    imagen.width = 200; //Le ponemos una anchura
    imagen.src =
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/126AC/production/_87563457_231fe8a0-020e-4b60-84b7-0fca26a1623c.jpg.webp"; //Le ponemos la direccion de la imagen
    imagen.alt = "Mono"; //Le ponemos un alt
    imagen.title = "Primer plano de un Macaco negro crestado"; //Título de la imagen
    //Añadimos la imagen al contenedor
    contenedor.appendChild(imagen);
    //Le cambiamos el texto al botón
    botonImagen.textContent = "Ocultar imagen";
  }
}

//Al hacer click en el botón se ejecuta la función
botonImagen.onclick = crearImagen;
