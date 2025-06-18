// Creamos el array de números
const arrayNumeros = [10, 5, 25, 8, 15];

// Función que recibe un array de números y devuelve el número más alto
function EncontrarMayor(arrayNumeros) {
  arrayNumeros.sort((a, b) => b - a); // Ordenamos el array de mayor a menor
  console.log(arrayNumeros[0] + " es el número más alto del array"); // Mostramos el primer elemento del array ordenado
}

EncontrarMayor(arrayNumeros);
