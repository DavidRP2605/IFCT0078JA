//Pedir al usuario que introduzca un número
      let numero = prompt("Introduce un número:");

      //Comprobamos que sea un número
      while (isNaN(numero) || numero === null || numero === "") {
        alert("Por favor, introduce un número válido.");
        numero = prompt("Introduce un número:");
      }

      //Comprobar si el número es par o impar
      if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
        alert("El número " + numero + " es par.");
      } else {
        console.log("El número " + numero + " es impar.");
        alert("El número " + numero + " es impar.");
      }
