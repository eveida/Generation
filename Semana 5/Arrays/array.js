/*
ARRAYS
Es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array.
Los arrays o arreglos se utlizan para anclar y organizat datos de manera más eficiente. 
*/
//Crear un array
const numeros = [1, 2, 3, 4, 5];
//Crear arrays con cadena de texto 
const taylorS = ["debut", "fearless", "speak now", "red", "1989", "reputation", "lover"];
console.log(taylorS);

//Arry mixto 
const mixto = ["cheetos", 
90,
true,
{ nombre: "Taylor"}
]
console.log(mixto);

//Array vacío
const lista = [];
console.log(lista);
lista[0] = "Leche";
lista[1] = "Cereal";
lista[3] = "Shampoo";
console.log(lista);

//Otra manera de crear arrays
//Esta sintaxis se puede emplear en Arrays porque son objects, e una manera de llamar a un nuevo objeto de tipo Array
 const frutas = new Array("manzana", "naranja", "pera", "uvas", "blueberry");
 console.log(frutas);

 //Longitud de un array
console.log(frutas.length);
//Acceder a elementos del array acorde a su índice
console.log(frutas[3]);
console.log(frutas[5]);

//Modificar un elemento del array por el índice
const albumOD = ["Up All Night", "Take me home", "Midnight memories", "FOUR", "Made in the A. M."];
console.log(albumOD);
albumOD[2] = "Flicker";
console.log(albumOD);

//Arreglo multidimensional 
console.log("Arreglo de arreglos");
//Estados: Edomex, Jalisco, Yucatan, Sonora, Oaxaca, CDMX
//Platillos: Tacos de canasta, Torta ahogada, Marquesitas, Dogos, Tlayuda, Chilaquiles 

const estados = ["Edomex", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["Tacos de canasta", "Torta ahogada", "Marquesitas", "Dogos", "Tlayuda", "Chilaquiles"];

//En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

const menu = [estados, platillos];
console.log(menu[0][2]);

console.log(`En ${menu [0][0]} se come ${menu [1][0]} `)

console.log(menu[0][2] + ' ' + menu[1][2]);

//Métodos de arrays
/*Métodos de colo (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del erray. Sigue al principio de FIFO (first-in-first-out) lo que significa que el primer elemento añadido es el primer eliminado.
    push 
    shift 
    unshift
Método de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (last-in-first-out) que significa el último elemento añadido es el primero en ser eliminado. 
    push 
    pop
 */
console.log("Métodos de Arrays");
const banda = ["Calibre 50", "Banda MS", "Alfredo Olivas", "Jenni Rivera", "La Arrolladora"];
console.log(banda);
//pop() Eliminar el último elemento del array 
let popbanda = banda.pop();
console.log(popbanda); //devuelve el dato eliminado. 
console.log(banda);

//push() Agregar un elemento
let pushbanda = banda.push("Los tigres del norte");
console.log(banda);

//shift() quitar primero del array
let shiftbanda = banda.shift();
console.log(banda);

//unshift agregar al principio del array
let unshiftbanda = banda.unshift("Calibre 50");
console.log(banda);

//reverse() cambia el sentido del ordenamiento del array 
let reversebanda = banda.reverse();
console.log(banda);

/*INVESTIGAR 
sort
forEach
slice
splice
indexOf 
*/ 


