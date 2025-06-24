//Creamos un boton
let botonAgregarElemento = document.createElement("button");
botonAgregarElemento.id = "botonAgregarElemento"; //Le ponemos un ID al botón
botonAgregarElemento.textContent = "Boton para agregar elemento "; //Le añadimos contenido al botón

//Lo añadimos al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonAgregarElemento);

//Seleccionamos el texto del parrafo
let listaDes = document.getElementById("miLista");

//Inicializamos el contador desde 2, porque son los que ya aparecen en el html
let contador = 2;

//Funcion donde añadimos un elemento a la lista
function agregarElemento() {
  contador++;
  //Creamos el elemento li
  const li = document.createElement("li");
  //Le añadimos al contenido del elemento li
  li.textContent = "Nuevo elemento " + contador;
  //Insertamos el elemento li a la lista desordenada
  listaDes.insertAdjacentElement("beforeend", li);
}

//Al hacer click, se ejecuta la función
botonAgregarElemento.onclick = agregarElemento
