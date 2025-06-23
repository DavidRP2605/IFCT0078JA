let numero = prompt("Introduce un número para sumar sus dígitos:");


function sumaDigitos() {
  // Convertimos el número a string para poder acceder a cada dígito
  let numeroStr = numero.toString();

  let suma = 0;

  // Recorremos cada carácter del string 
  for (let i = 0; i < numeroStr.length; i++) {
    // Convertimos el carácter de nuevo a número y lo sumamos
    suma += parseInt(numeroStr[i]);
  }

  return suma;
}

alert("La suma de los dígitos de ese número es igual a " + sumaDigitos());
console.log("La suma de los dígitos de ese número es igual a " + sumaDigitos());

