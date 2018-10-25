'use stric'

// var se usa pa variables globales 
// let se usa para bloques por ejemplo dentro de un if

var numero = 40;
console.log(numero)

if (true) {
	var numero = 50;
	console.log(numero)
}
console.log(numero)


var nombre = "guillermo"
console.log(nombre);

if (true) {
	let nombre = "bulo"
	console.log(nombre)
}

console.log(nombre);
