// Seleccionamos los elementos del HTML
let campoInput = document.getElementById("campoInput");
let mensajeInput = document.getElementById("mensajeInput");


//Creamos un addEventListener que se activa cada vez que interactuamos con el input
campoInput.addEventListener("input", () => {
  // Declaramos lo que metemos por teclado
  let valor = campoInput.value;
  // Lo vamos añadiendo al párrafo
  mensajeInput.textContent = valor;


  // Añadimos o quitamos la clase "error" dependiendo de los caracteres
  if (valor.length < 3) {
    mensajeInput.classList.add("error");
  } else {
    mensajeInput.classList.remove("error");
  }
});
