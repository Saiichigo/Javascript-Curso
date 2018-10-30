'use strict'

//DOM document objet model
// https://platzi.com/blog/sublime-text-setui/

// var prueba = document.getElementById("contenedor_master")
// prueba.innerHTML ="CAMBIO DE NOMBRE, PRUEBA"
// prueba.style.background = 'green'

// console.log(prueba)

// CONSEGUIR ELEMENTO POR EL ID
var prueba = document.querySelector("#contenedor_master")
var todoslosdiv
var contendo_div
prueba.innerHTML ="CAMBIO DE NOMBRE, PRUEBA"
prueba.style.background = 'green'
prueba.style.padding = '20px'
prueba.style.color = 'white'
prueba.style.className = 'hola hola2'

// console.log(prueba)

//CONSEGUI ELEMENTO POR ETIQUETA
todoslosdiv = document.getElementsByTagName('div')
contendo_div = todoslosdiv[2].textContent	;
console.log(contendo_div)

//continuar segundo video min 6 exacto
//CONSEGUIR ELEMENTO POR SU CLASE CSS