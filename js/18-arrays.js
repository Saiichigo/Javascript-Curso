'use strict'
//arrays o arrelos o matriz xD 
//colecion de datos de una variable
var nombre = "Guillermo Bulo";
var nombres = ["guillermo bulo", "juan lopez", "perez gonzales", 52, true]


var lenguajes = new Array("PHP", "GO", "JS","JAVA","Vue Js","Firebase");


// var elemento  = parseInt(prompt("Que elemento del array quieres?'", 0));
// if (elemento >= nombres.length) {
// 	alert("Introduce el numero correcto "+nombres.length)
// }else

// alert("El usuario seleccionado es: "+nombres[elemento]);

document.write("<h1>Lenguajes de programacion del 2018</h1>")
document.write("<ul>")
// for (var i = 0; i < lenguajes.length; i++) {
// 	document.write("<li>"+lenguajes[i]+"</li>");
	
// }
document.write("</ul>")

//forEach
lenguajes.forEach((elemento, valor, arr )=>{
	document.write("<li>"+valor+" - "+elemento+"</li>");
	console.log(arr)
	// statements
});


/* esto no es practico
document.write(lenguajes[0]);
document.write(lenguajes[1]);
document.write(lenguajes[2]);
*/



