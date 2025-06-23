//Creamos un boton para aumentar el contador
let aumentarContador = document.createElement("button");
aumentarContador.id = "aumentarContador"; //Le ponemos un ID al botón
aumentarContador.textContent = "Aumentar contador Párrafo "; //Le añadimos contenido al botón

//Creamos un boton para disminuir el contador
let disminuirContador = document.createElement("button");
disminuirContador.id = "disminuirContador"; //Le ponemos un ID al botón
disminuirContador.textContent = "Disminuir contador Párrafo "; //Le añadimos contenido al botón

//Añadimos estos botónes al final de la sección
document.getElementById("seccionBotones")?.appendChild(aumentarContador);
document.getElementById("seccionBotones")?.appendChild(disminuirContador);

//Creamos un input donde pondremos el contador
let contador = 0;

//Seleccionamos el texto del parrafo (y le añadimo un espacio al final)
let textoParrafo = document.getElementById("parrafoSecundario").textContent + " ";


//Funcion que suma 1 al hacer click
function funcionAumentar() {
  contador++;
  //Lo metemos al final del parrafo
  document.getElementById("parrafoSecundario").innerHTML = textoParrafo + contador;
}

//Funcion que resta 1 al hacer click
function funcionDisminuir() {
  contador--;
  //Lo metemos al final del parrafo
  document.getElementById("parrafoSecundario").innerHTML = textoParrafo + contador;
}

//Al hacer click en estos botones, se ejecutan las funciones correspondientes
aumentarContador.onclick = funcionAumentar;
disminuirContador.onclick = funcionDisminuir;
