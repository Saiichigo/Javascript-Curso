'use strict'

var series = ["naruto","dragon ball","Sao",'Bleach',"Fate Stay, Night"]
var peliculas = ["el origen","meteoro","maze run","batman","infinity war"]
var indice
var cine = [series,peliculas]
var peliculas_string
var nombres = "guillermo, bulo, torres, stefan, helena, gatito, ale"
var nombre_array

// console.log(cine[0][1]);
// console.log(cine[1][4].length);

// en php si se puede hacer pero Javascript no
// peliculas[] = "superman";
// console.log(peliculas)

/* 
var elemento = "";

do{
	prompt("Introduce tu pelicula")
	elemento = prompt("Introduce tu pelicula")
	peliculas.push(elemento);
	
} while (elemento != "ACABAR")

*/


// asi se hace en javascript
// peliculas.pop()
 
 //peliculas[0] = undefined;

indice = series.indexOf('Bleach')
// console.log(indice)
if (indice > -1) {
	series.splice(indice)	
}		

//array a texto
//nota:  en si .join no hace el cambio a menos que se le asigne 
//una variable
peliculas_string = series.join()


nombre_array = nombres.split(", ");


console.log(peliculas_string)

console.log(nombre_array)


