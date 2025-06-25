//Seleccionamos los elementos del HTML
let botonCambiarEstilo = document.getElementById("botonCambiarEstilo");
let parrafoPrincipal = document.getElementById("parrafoPrincipal");
let h1 = document.querySelector("h1");

//Creamos un boton
let botonH1 = document.createElement("button");
botonH1.id = "botonH1"; //Le ponemos un ID al botón
botonH1.textContent = "Cambiar estilo H1 "; //Le añadimos contenido al botón

//Lo añadimos al final de la sección
document.getElementById("seccionBotones")?.appendChild(botonH1);

botonCambiarEstilo.onclick = () => {
  parrafoPrincipal.classList.toggle("destacado");
};

botonH1.onclick = () => {
  //Creamos 3 digitos aleatorios entre 0 y 255 para el color RGB
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);

  //Seleccionamos el body y cambiamos su color de fondo
  h1.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
};
