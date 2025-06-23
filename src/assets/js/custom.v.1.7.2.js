// Pedimos una palabra al usuario
let palabra = prompt("Introduce una palabra:");

let contadorVocales = 0;

// Convertimos la palabra a minúsculas 
let palabraMinuscula = palabra.toLowerCase();

// Recorremos cada carácter de la palabra y sumamos cada vez que haya una vocal
[...palabraMinuscula].forEach(caracter => {
  if ("aeiou".includes(caracter)) {
    contadorVocales++;
  }
});

// Mostramos el resultado
console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocal(es).`);
