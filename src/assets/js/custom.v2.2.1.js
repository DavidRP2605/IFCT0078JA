//Creamos un parrafo donde pongamos fibonacci
let parrFibonacci = document.createElement("p");
parrFibonacci.id = "parrafoFibonacci"; //Le ponemos un ID al parrafo
parrFibonacci.textContent = "Secuencia Fibonacci actual:"; //Le añadimos contenido al parrafo

//Añadimos este parrafo a la seccion de parrafos
document.getElementById("seccionParrafos")?.appendChild(parrFibonacci);

//Creamos un boton para aumentar el contador
let botonFibonacci = document.createElement("button");
botonFibonacci.id = "fibonacciContador"; //Le ponemos un ID al botón
botonFibonacci.textContent = "Contador Fibonacci "; //Le añadimos contenido al botón

//Añadimos este botón al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonFibonacci);

//Seleccionamos el texto del parrafo (y le añadimos un espacio al final)
let textoParrafo =
  document.getElementById("parrafoFibonacci").textContent + " ";

let arrayFibonacci = [0, 1];

function concatenarFibonacci() {
  let siguiente =
    arrayFibonacci[arrayFibonacci.length - 1] +
    arrayFibonacci[arrayFibonacci.length - 2];
  arrayFibonacci.push(siguiente);

  document.getElementById("parrafoFibonacci").innerHTML =
    textoParrafo + arrayFibonacci;
}

botonFibonacci.onclick = concatenarFibonacci;
