// JavaScript

CelsiusAFahrenheit = (pCel) => (pCel * 9) / 5 + 32;
FahrenheitACelsius = (pFah) => ((pFah - 32) * 5) / 9;

const isValidNumber = (value) => !isNaN(value) && typeof value === "number";

let userMeasure = prompt(
  "Para convertir Centígrados a Fahrenheit, ingrese <F>" +
    "\r\n" +
    "Para convertir Fahrenheit a Centígrados, ingrese <C>"
);

if ("C" !== userMeasure && "F" !== userMeasure) {
    let unableMessage = `La Unidad de los grados introducida <${userMeasure}> por el usuario no son válidos.` +
      "\r\n" +
      "Por favor," +
      "\r\n" +
      "  - ingrese <C> para convertir a grados Centígrados" +
      "\r\n" +
      "  - ingrese <F> para convertir a grados Fahrenheit"
  alert(unableMessage);
//   console.error(unableMessage);
} else {
  let userDegree = prompt(
    `Ingrese los grados ${
      userMeasure === "F" ? "Centígrados" : "Fahrenheit"
    } a convertir`
  );
  let initDegree = Number(userDegree);
  let mistakeMessage = "";

  if (!!!isValidNumber(initDegree)) {
    mistakeMessage = `Los grados introducidos <${initDegree}>º por el usuario no son válidos.` +
        `Por favor, ingrese un dato numérico.`
    alert(mistakeMessage);
    console.error(mistakeMessage);
  } else {
    let convertedDegree;
    let message = "";

    if (userMeasure === "C") {
      convertedDegree = FahrenheitACelsius(initDegree);
      message = `${userDegree} grados Fahrenheit son ${convertedDegree.toFixed(1)} Centígrados`;
      console.log(message);
      alert(message);
    } else {
      convertedDegree = CelsiusAFahrenheit(initDegree);
      message = ` ${userDegree} grados Centígrados son ${convertedDegree.toFixed(1)} Fahrenheit`;
      console.log(message);
      alert(message);
    }

    // if(isValidNumber(convertedDegree)) {
    //   console.log(message);
    //   alert(message);
    // }else {
    //   alert(mistakeMessage);
    //   console.error(mistakeMessage);
    // }
  }
}
