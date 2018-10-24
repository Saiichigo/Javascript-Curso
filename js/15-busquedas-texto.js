'use strict'

var numero = 444;
var texto1 = "  Bienvenido al curso de Javascript curso Guillermo Bulo fasfsdf  curso  ";
var texto3 = "     Bienvenido al curso de Javascript curso Guillermo Bulo        ";
var texto2 = "es muy buen curso";


//asi como esta solo encontrare el primer valor que encuentre
var busqueda = texto1.match("curso")

var busqueda = texto1.match(/curso/gi)
// pero asi se buscara todas las palabras.

console.log(busqueda)

// otro metodo que permite sacar algo de una cadena de texto es substr
var busqueda2 = texto1.substr(14,5)
// el 14 es la posicion y el 5 es el largo que tomara
console.log(busqueda2)

// para sacar una letra en concrepto es charAT
console.log(texto1.charAt(15))

//para buscar texto del inicio
console.log(texto1.startsWith("Bienvenido al curso"))
// si lo encontre arroja true y sino False

//para buscar texto del final
console.log(texto3.endsWith("Guillermo Bulo"))
// si lo encontre arroja true y sino False

// para buscar cualquier palabra (debe ser exacta la palabra)
console.log(texto3.includes("Guillermo Bulo"))
// si lo encontre arroja true y sino False

//funcion para reeplazar texto
console.log(texto3.replace("Javascript", "PHP"))
// el primer parametro es el texto origen y el segundo es el parametro que usaras para el cambio


//funcion para corta el texto desde una posicion
console.log(texto3.slice(14,22))
//si se deja solo un valor lo corta hasta el valor de la posicion
//si se coloca un segundo valor se corta antes del valor1 y despues del valor2


//funcion para dividir el texto en array
console.log(texto3.split(" "))	
//si se  deja vacio toma el valor que de la variable y convierte todo en un array
// pero si coloca un valor como espacio o coma; se dividira por el valor que se le coloco para dividir

//funcion para elimar los espacios de un texto o valor en concrepto como correos nombre de usuarios etc...
console.log(texto3.trim())	







