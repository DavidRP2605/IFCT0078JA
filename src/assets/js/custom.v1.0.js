// JavaScript
// Ámbitos de variables
// let counter = 10; // es 10 de tipo integer
// if (counter > 10) { // ¿es mayor que 10?
// 	console.log(`counter (${counter}) es mayor de 10`);
// }
// if (counter < '10') { // ¿es menor que 10?
// 	console.log(`counter (${counter}) es menor de 10`);
// } else { // Si NO es menor que 10
// 	console.log(`counter (${counter}) NO es menor de 10`);
// }

// Int, Integer
let var_type = 10;
// String
var_type = "culo de mono";
// Float
var_type = 10.31;
// Boolean
var_type = false;
var_type = true;
// Array
var_type = [10, "culo de mono", 10.31, false];
products = [10, "culo de mono", 10.31, false];
// Object
let ape_type = {
	id: 1,
	name: "mandril",
	habitat: "Thailand",
	family: {
		name: "primates",
		genre: ["male", "female"]
	}
};
let ape_type_list = [{
	id: 1,
	name: "mandril",
	habitat: "Thailand",
	// family: {
	// 	name: "primates",
	// 	genre: ["male", "female"]
	// },
	age: "10"
}, {
	id: 2,
	name: "macaco",
	habitat: "Qatar",
	family: {
		name: "primates",
		genre: ["male", "female"]
	},
	age: "2"
}];

var num = 5;
console.log(`Num es mayor que ${num > 1 ? "1" : "0"}`);

if(num > 1) {
	console.log(`Num es mayor que 1`);
} else { 
	console.log(`Num es mayor que 0`);
}

console.log("\r\n");
console.log("\r\n");
// var example = Number("10");
// if (typeof example === "string") {
// 	console.log("example en mayúsculas es: ", example.toUpperCase());
// } else {
// 	console.log("Example es ", typeof example);
// }



// let day_number = 2234567;
// let day_name = "";
// switch (day_number) {
// 	case 1:
// 		day_name = "lunes, meeeeeh";
// 		break;
// 	case 3:
// 		day_name = "miercoles";
// 		break;
// 	case 4:
// 		day_name = "juernes";
// 		break;
// 	case 5:
// 		day_name = "por fin vienes";
// 		break;
// 	case 6:
// 		day_name = "sábado sabadete";
// 		break;
// 	case 7:
// 		day_name = "Davingo (copyright)"
// 		break;
// 	default:
// 		day_name = "martes";
// }
// console.log('¿Qué día es? ', day_name);


// let counter = 0;

ape_type_list.forEach((item) => {
	
	// if(typeof item.family !== "undefined"){
		console.log(`Dentro del bucle FOREACH: Simio del tipo "${item.name}" ${
			typeof item.family !== "undefined" 
				? ` de la familia "${item.family.name}"` 
				: `` 
		} `);
		item.family?.genre?.forEach((el) => {
			console.log(`Dentro del bucle FOREACH: Puede tener los siguientes sexos: "${el}"`);
		});	
	// } else {
	// 	console.log(`Dentro del bucle FOREACH: Simio del tipo "${item.name}"`);
	// }

});

console.log("\r\n");
console.log("\r\n");
for (let i = 0; i < products.length; i++) {
	console.log(`Dentro del bucle FOR: Iteración num. ${i}, Producto "${products[i]}"`);
}

console.log("\r\n");
console.log("\r\n");
let i = 0;
while (i < ape_type_list.length) {
	console.log(`Dentro del bucle WHILE: Iteración num. ${i}, Producto "${ape_type_list[i].name}"`);
	i++;
}