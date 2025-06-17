//Pedimos al usuario los grados Celsius y Fahrenheit
let gradosCelsius = prompt(
  "Introduce los grados Celsius a convertir a Fahrenheit:"
);
let gradosFahrenheit = prompt(
  "Introduce los grados Fahrenheit a convertir a Celsius:"
);

//Funcion que convierte grados Celsius a Fahrenheit
function celsiusAFahrenheit() {
  // Reemplazar coma por punto y convertir a número
  const valorCelsius = parseFloat(gradosCelsius.replace(",", "."));
  if (isNaN(valorCelsius) || valorCelsius === null || valorCelsius === "") {
    alert("Por favor, introduce un número válido.");ñ
    return; // Salimos de la función si el input no es válido
  }
  let gradosFahrenheit = (valorCelsius * 9) / 5 + 32;
  console.log(`${valorCelsius}°C son ${gradosFahrenheit}°F`);
}

//Funcion que convierte grados Fahrenheit a Celsius
function fahrenheitACelsius() {
  // Reemplazar coma por punto y convertir a número
  const valorFahrenheit = parseFloat(gradosFahrenheit.replace(",", "."));
  if (
    isNaN(valorFahrenheit) ||
    valorFahrenheit === null ||
    valorFahrenheit === ""
  ) {
    alert("Por favor, introduce un número válido.");
    return; // Salimos de la función si el input no es válido
  }
  let gradosCelsius = ((valorFahrenheit - 32) * 5) / 9;
  console.log(`${valorFahrenheit}°F son ${gradosCelsius}°C`);
}

celsiusAFahrenheit();
fahrenheitACelsius();
