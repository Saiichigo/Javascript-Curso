'use strict'

// plantilla de texto

var nombre = prompt("Mete tu nombre")
var apellido = prompt("mete tu apellido")

// var texto = "Mi nombre es: "+nombre+" Mis apellidos son: "+apellido
// document.write(texto);


//Esto se puede hace ya que al tener la comillas invertidas
// funciona para ECMAScript 6 en adelante..
var texto = `
	<h1>Hola mi nombre</h1>
	<h3>Mi nombre es : ${nombre}</h3>
	<h3>Mi apellido es : ${apellido}</h3>
`;
//y para meter el valor de una variable previa interpolarla con ${variable}
document.write(texto)