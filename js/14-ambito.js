'use strict'
var numero = 12;
var numero2 = 15;

var texto = "hooa mundo soy una variable global"

function holaMundo(texto) {
	console.log(texto)

	console.log(typeof numero.toString());
	console.log(numero2);
//	console.log(typeof numero5.toJSON();
}


holaMundo(texto);