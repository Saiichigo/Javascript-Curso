 'use strict'

 /* 
 1. Pida 6 numeros por pantalla y los meta en un array
 2. tiene que mostrar el array con todos su elementos en el cuerpo de la pagina y en la consolo
 3  ordenarlo y mostrarlo
 4. invertir sus orden
 5. cuanto elemento tiene el array
 6. hacer una busqueda introducido por el usuario, que no diga si lo encuentre y si indice.

 */

 //paso1 pedir numeros

// var numeros = new Array(6);
var numeros = [];
var busqueda
var indice
var posicion

 for (var i = 0; i <= 5; i++) {
  numeros.push(parseInt(prompt("Ingrese numeros para crear un array",0)));
 }
//paso2 y 3 mostrar el array en consola y ordenarlo
numeros.sort(function(a,b){return a-b})
//para esta manera se orden de menor a mayor cuando se habla de numeros.
console.log(numeros)



//paso2 mostrar el array en el cuerpo del navegador.
document.write("<hi>Mostrando el Array en pantalla</h1>")
numeros.forEach ((element)=>{
document.write("<li>"+element+"</li>")
});


//paso4 invertir el orden
numeros.reverse()
console.log(numeros)

//paso5 la cantidad de elementos de un array
console.log(numeros.length)

//paso6
busqueda = parseInt(prompt("Ingrese el valor que desea buscar",0));
posicion = numeros.findIndex(numeros => numeros == busqueda);

if (posicion && posicion != -1) {
	document.write("<h1>ENCONTRADO EL NUMERO</h1>")
}else {
	document.write("<h1>NO ENCONTRADO EL NUMERO</h1>")
}
 

