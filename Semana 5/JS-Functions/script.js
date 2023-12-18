
/* Funciones. Son bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias. 
Algunas reciben parámetros. 
Las funciones 'normales' se llaman funciones por declaración
*/

//Función que permite saludar
function saludar() {
  console.log("Hola desde una función");
}

//Ejecutar la función con el nombre de la función y los parámetros
saludar();

//Hoisting. Característica de una función que nos permite invocalra desde antes de su inicialiazción, es decir, se puede invocar antes del bloque de código o después. 
//Se involucra en la línea 7 y 16
function saludar() {
  console.log("Hola desde una función usando hoisting")
}
saludar();

//Funciones que retornan algo 
//Para que una función retorne algo (str, operación, var, etc.) necesitamos indicarle al código de la función que vamos a retornar mediante la palabra reservara return

function greeting() {
  return 'Hola desde una función que retorna';
}

console.log(greeting());

//Función que retorna y recibe parámetros
function sumar(x, y) {
  return x + y;
}

let result =sumar(255, 245);
console.log(`El resultado de sumar x+y es ${result}`); 

//Calcular el cuadrado de un número
function calcSquare(numero) {
  return numero * numero
}

let resultadoSquare = calcSquare(5);
console.log(resultadoSquare);

//Funciones flecha (Arrow funcion). 
//Es una manera de declarar una función por declaración, sintetizando y haciéndolo más legible

//Función flecha para calcular el cubo de un número 
const calcCube = (number) => {
  return number * number * number
}

let resultCube = calcCube(3);
console.log(resultCube);

//Funciones anónimas. Son un tipo de funciones que se declara sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada que una vez las utilicemos. 
//Las funciones anónimas no permiten el Hoisting (no se pueden invocar antes de inicializarlas)
const mensaje = function() {
  return "Este es un mensaje desde una función anónima";
}
console.log(mensaje());

//Callbacks. Es pasar una función B por parámetros a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código. 
const functionB = function () {
  console.log('Ejecutando función B');
}

//Función A que mandará a llamar la función B
const functionA = function (callback) {
  callback();
}

functionA(functionB);


