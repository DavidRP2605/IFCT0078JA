// JavaScript

const CelsiusAFahrenheit = (pCel) => (pCel * 9) / 5 + 32;
const FahrenheitACelsius = (pFah) => ((pFah - 32) * 5) / 9;

// Validación de número
const isValidNumber = (value) => !isNaN(value) && typeof value === "number";

// Funcion para mostrar mensajes
function showMessage(type, message) {
  switch (type) {
    case "alert":
      alert(message);
      break;
    case "error":
      console.error(message);
      alert(message);
      break;
    case "log":
    default:
      console.log(message);
      alert(message);
      break;
  }
}

let userMeasure = prompt(
  "Para convertir Centígrados a Fahrenheit, ingrese <F>" +
    "\r\n" +
    "Para convertir Fahrenheit a Centígrados, ingrese <C>"
);

if ("C" !== userMeasure && "F" !== userMeasure) {
  // Creamos un mensaje si no son válidos los grados
  let unableMessage =
    `La Unidad de los grados introducida <${userMeasure}> por el usuario no son válidos.` +
    "\r\n" +
    "Por favor," +
    "\r\n" +
    "  - ingrese <C> para convertir a grados Centígrados" +
    "\r\n" +
    "  - ingrese <F> para convertir a grados Fahrenheit";
  showMessage("error", unableMessage);
} else {
  let userDegree = prompt(
    `Ingrese los grados ${
      userMeasure === "F" ? "Centígrados" : "Fahrenheit"
    } a convertir`
  );

  let initDegree = Number(userDegree);

  if (!!!isValidNumber(initDegree)) {
    let mistakeMessage =
      `Los grados introducidos <${initDegree}>º por el usuario no son válidos.` +
      `Por favor, ingrese un dato numérico.`;
    showMessage("error", mistakeMessage);
  } else {
    let convertedDegree;

    if (userMeasure === "C") {
      convertedDegree = FahrenheitACelsius(initDegree);
      let message = `${userDegree} grados Fahrenheit son ${convertedDegree.toFixed(1)} Centígrados`;
      showMessage("log", message);
    } else {
      convertedDegree = CelsiusAFahrenheit(initDegree);
      let message = ` ${userDegree} grados Centígrados son ${convertedDegree.toFixed(1)} Fahrenheit`;
      showMessage("log", message);
    }
  }
}
