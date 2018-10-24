'use strict '

/*
programa que pida que dos numeros y que nos diga cual es el mayor y el menor y si son iguales
PLUS: si los numeors no son un numero o son menores o iguales a cero, nos qlos vuelva a pedir.
*/
// tipico caso
/*
var numero1 = parseInt(prompt("Ingrese el primer valor1: "));
var numero2 = parseInt(prompt("Ingrese el primer valor2: "));

if (numero1 == numero2) {
	document.write("Los numeros son iguales")
}else if (numero1 > numero2) {
	document.write("El primer valor es mayor que el segundo")
}else if (numero1 < numero2){
	document.write("El segundo valor es mayor que el primero")
}
*/
//como deberia hacerse

var numero1 = parseInt(prompt("Ingrese el primer valor1: ",0));
var numero2 = parseInt(prompt("Ingrese el primer valor2: ",0));


while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
		numero1 = parseInt(prompt("Ingrese el primer valor1: ",0));
		numero2 = parseInt(prompt("Ingrese el primer valor2: ",0));
}
if (numero1 == numero2) {
alert("Los numeros son iguales")

}else if (numero1 > numero2) {
	alert("EL NUMERO MAYOR ES: "+numero1)
	alert("EL NUMERO MENOR ES: "+numero2)
}else if (numero1 < numero2){
	alert("EL NUMERO MENOR ES: "+numero1)
	alert("EL NUMERO MAYOR ES: "+numero2)

}else {
alert("Introduce numeros correctos")
}