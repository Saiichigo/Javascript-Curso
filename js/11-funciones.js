'use strict'
//funciones
//una funcion es un agrupacion reutilizable de un conjunto de instrucciones

//definir la funcion


function porConsola(numero1,numero2){

	//conjunto de instrucciones  a ejecutar
	console.log('Suma: '+(numero1+numero2))
	console.log('Resta: '+(numero1-numero2))
	console.log('Multiplicacion: '+(numero1*numero2))
	console.log('division: '+(numero1/numero2))
	console.log('*************************************')
   	return "hola yo soy la calculadora"
}

function porPantalla(numero1,numero2){
	document.write('Suma: '+(numero1+numero2)+"<br>");
	document.write('Resta: '+(numero1-numero2)+"<br>");
	document.write('Multiplicacion: '+(numero1*numero2)+"<br>");
	document.write('division: '+(numero1/numero2)+"<br>");
	document.write('*************************************'+"<br>");
   	return "hola yo soy la calculadora"

}

function calculadora(numero1,numero2, mostrar = false){	
if (mostrar == false) {
	porConsola(numero1, numero2);
   }else{
   	porPantalla(numero1, numero2);
   }
}




//invocar o llamar a la funcion
calculadora(10,8,true);
calculadora(30,8,true);


/*
for (var i=1: i <= 10; i++) {
	console.log(i);
	calculadora(i,8);
}	
*/

