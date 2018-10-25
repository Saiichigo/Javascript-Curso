
'use strict'

var comidas = new Array("Pasta", "Pasticho", "Caraotas","Aperas","Reina pepiada","empanadas","pabellon","bistec");

// var elemento = parseInt(prompt("Elija el valor del array que desee??",0));
// if (elemento >= comidas.length || elemento <= 0 ) {
// 	alert("ingrese un valor valido")
// 	parseInt(prompt("Elija el valor del array que desee??",0));
// 	alert(comidas[elemento]);
// } else {
// 	alert(comidas[elemento]);
// }





comidas.forEach((elemento, valor, arr)=>{
	document.write("<li>"+"la camida "+valor+" y su nombre es:"+elemento+"</li>")
	console.log(arr)
});
document.write("<br>")


for (var i = 0; i < comidas.length; i++) {
	document.write("<br>"+comidas[i])
}


