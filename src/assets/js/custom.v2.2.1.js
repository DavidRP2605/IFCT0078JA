//Creamos un boton para aumentar el contador
let botonFibonacci = document.createElement("button");
botonFibonacci.id = "fibonacciContador"; //Le ponemos un ID al botón
botonFibonacci.textContent = "Contador Fibonacci "; //Le añadimos contenido al botón

//Añadimos estos botónes al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonFibonacci);

//Seleccionamos el texto del parrafo (y le añadimo un espacio al final)
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
