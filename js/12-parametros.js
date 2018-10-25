'use strict'

// parametros de REST y SPREAD

function listadoFrutas (fruta1, fruta2, ...resto_las_frutas) {

console.log('Fruta 1: ',fruta1)
console.log('Fruta 2: ',fruta2)
console.log(resto_las_frutas);

}

listadoFrutas("Narajanda","Manzana","Sandia","Pera","Melon","Coco");

var frutas = ["Narajanda","Manzana"]
listadoFrutas( ...frutas,"Sandia","Pera","Melon","Coco");