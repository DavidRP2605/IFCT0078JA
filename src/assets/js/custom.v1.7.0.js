// Definir el array con 5 frutas
let frutas = ["manzana", "plátano", "sandía", "melon", "pera"];

// Mostrar todas las frutas usando forEach
console.log("Frutas iniciales:");
frutas.forEach(function(fruta) {
  console.log(fruta);
});

// Añadir una fruta nueva
let nuevaFruta = "kiwi"; 
frutas.push(nuevaFruta);

// Mostrar el array actualizado
console.log("Frutas después de añadir una nueva:");
frutas.forEach(function(fruta) {
  console.log(fruta);
});
