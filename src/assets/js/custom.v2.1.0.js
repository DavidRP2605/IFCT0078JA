//Creamos un boton
let btnChangeBgColor = document.createElement("button");
btnChangeBgColor.id = "botonColorFondo"; //Le ponemos un ID al botón
btnChangeBgColor.textContent = "Cambiar color de fondo";  //Le añadimos contenido al botón

//Añadimos este botón al final de la sección
document.getElementById("seccionBotones")?.appendChild(btnChangeBgColor);

const ColorFondo = () => {
  //Creamos 3 digitos aleatorios entre 0 y 255 para el color RGB
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);

  //Seleccionamos el body y cambiamos su color de fondo
  let body = document.querySelector("body");
  body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
};

//Al hacer click en el botón, cambia el color de fondo
const botonColorFondo = document.getElementById("botonColorFondo");
botonColorFondo.addEventListener("click", ColorFondo);
// btnChangeBgColor.onclick = ColorFondo;
