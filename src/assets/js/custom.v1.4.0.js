//Pedir al usuario el año de nacimiento
let yearOfBirth = prompt("Introduce tu año de nacimiento:");
// Comprobar que el año de nacimiento es un número válido
while (
  isNaN(yearOfBirth) ||
  yearOfBirth === null ||
  yearOfBirth === "" ||
  yearOfBirth < 1900 ||
  yearOfBirth > new Date().getFullYear()
) {
  alert("Por favor, introduce un año de nacimiento válido.");
  yearOfBirth = prompt("Introduce tu año de nacimiento:");
}
// Calcular la edad
let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;
// Mostrar la edad al usuario
console.log("Tu edad es: " + age);
alert("Tu edad es: " + age);