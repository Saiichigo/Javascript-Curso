'use strict'

//DOM document objet model
// https://platzi.com/blog/sublime-text-setui/

// var prueba = document.getElementById("contenedor_master")
// prueba.innerHTML ="CAMBIO DE NOMBRE, PRUEBA"
// prueba.style.background = 'green'

// console.log(prueba)

// CONSEGUIR ELEMENTO POR EL ID
var prueba = document.querySelector("#contenedor_master")
var contendo_div
var parrafo, texto, seccion;
prueba.innerHTML ="CAMBIO DE NOMBRE, PRUEBA"
prueba.style.background = 'green'
prueba.style.padding = '20px'
prueba.style.color = 'white'
prueba.style.className = 'hola hola2'

// console.log(prueba)

//CONSEGUI ELEMENTO POR ETIQUETA
var todoslosdiv = document.getElementsByTagName('div');
	seccion = document.querySelector("#miseccion")

// todoslosdiv.forEach((valor, indice) => { 
for (var valor in todoslosdiv) {
if (typeof todoslosdiv[valor].textContent == 'string') {
	parrafo = document.createElement("p");
	texto =  document.createTextNode(todoslosdiv[valor].textContent);
	parrafo.appendChild(texto);
	seccion.append(parrafo);
	}
}
// });

// contenido_div = todoslosdiv[2].textContent;
// console.log(contendo_div)

//continuar segundo video min 6 exacto
//CONSEGUIR ELEMENTO POR SU CLASE CSS

//DATO = forEach se usa con valores que nsotros hayamos agregado
// no dentrol de un array de html
