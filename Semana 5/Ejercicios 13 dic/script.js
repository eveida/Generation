// Función para convertir minutos a segundos
function minutosASegundos(minutos) {
    return minutos * 60;
  }
  
  // Ejemplos de uso
  var minutos = 5;
  var segundos = minutosASegundos(minutos);
  
  console.log(minutos + " minutos es igual a " + segundos + " segundos.");
  
  var minutos = 3;
  var segundos = minutosASegundos(minutos);
  
  console.log(minutos + " minutos es igual a " + segundos + " segundos.");

  var minutos = 2;
  var segundos = minutosASegundos(minutos);
  
  console.log(minutos + " minutos es igual a " + segundos + " segundos.");


  //Función para incremento de 1
function enteroSiguiente(integer) {
    return integer + 1
}

//Ejemplos de uso
var integer = 0
var nextInteger = enteroSiguiente(integer);

console.log("El entero siguiente de " + integer + " es " + nextInteger);

var integer = 9
var nextInteger = enteroSiguiente(integer);

console.log("El entero siguiente de " + integer + " es " + nextInteger);

var integer = -3
var nextInteger = enteroSiguiente(integer);

console.log("El entero siguiente de " + integer + " es " + nextInteger);

//Función área de un triangulo 
function areaTriangulo(base, altura) {
    return base * altura
}

//Ejemplo de uso 
var base = 3;
var altura = 2;
var area = areaTriangulo(base, altura); 
console.log("El área del triángulo es " + area)

//Conversión de edad a días
function edadDias(edad) {
    return edad * 365;
}
 var edad = 65
 var totalDias = edadDias(edad);

 console.log("Tu edad en días es " + totalDias)

 //Calculadora de multiplicaciones
 function multiply(numUNO, numDOS) {
    return numUNO * numDOS;
 }

 let result =multiply(230, 10);

 console.log(`El resultado de multiplicar es ${result}`)

 //Retrurn something _blank__
 function textoSometing(textO) {
    return "something " + textO;
  }
  
  // Ejemplo:
  var frase = textoSometing("cambiar esto");
  console.log(frase); 


  function poligSum(lados, grados) {
    return lados * grados;
  }
  let totalPolig =poligSum(6, 30);
  console.log(`Los grados totales del polígono son ${totalPolig}`)


  