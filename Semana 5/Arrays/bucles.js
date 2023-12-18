/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/
console.log("Bucles")

//Ciclo for
/*Se repite hasta que la condición se evalue como false. Crea 3 expresiones opcionales
    Sintaxis
        for(expresioninicial; expresioncondicional; expresionactualizacion) {
            codigo a ejecutar con el bucle. 
        }
    Inicialización: se debe inicializar con una variable que será evaluada en la expresioón a comparar. 
    Condición: es una expresión que debe cumplir la variable inicial (true). si no se cumple (false) el bucle termina. 
    Pasos a realizar: son los intervalos que cambiaran la variable inicial mientras esta sea true. 
        */

//Crear programa para ver cuantos boletos vendemos en una rifa. 
for (let boleto = 1; boleto <= 25; boleto+=5) {
    console.log(`Boleto # ${boleto}`)
}

let bolos = 1;
for (bolos; bolos <= 20 ; bolos++){
    console.log(`Vendí ${bolos}`);
}

//Cuenta regresiva
let countDown = 18;
for (countDown; countDown >=0; countDown--) {
    console.log(`Quedan ${countDown} meses para el regreso de 1D`)
}

//RECORRER ARRAYS CON EL CICLO FOR 
//Debemos usar índices del arreglo para usar el bucle, en índices desde el 0 hasta n y usaremos la propiedad length

const perdidas = ["Kimberly la mas preciosa", "Paolita Suarez", "Wendy Guevara", "Vanesa labios4K", "Karina Torres", "Evelin Marmota"];

for (let i = 0; i< perdidas.length; i++){
    console.log(perdidas[i]);
}

/** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/
// let frutas = new Array("manzana", "naranja", "pera", "uvas", "blueberry");
// for(let fruta of frutas){
//     console.log(frutas + " grupo frutas");
// }
const fruits = ["Apple", "Banana", "Orange"];
for (fruta of fruits) {
  console.log(fruta);
}

//Sumar números
let suma = 0;
for (let i = 1; i <= 20; i++){
    suma += i;
}

console.log(suma);

//Tabla 5
const tablaCinco = 5;
for (let i = 1; i<=10; i++) {
    let resultado = tablaCinco * i;
    console.log(`${tablaCinco} x ${i} = ${resultado} `)
}

//Ciclo while
/* 
Recorrer un bloque de código siempre que una condición específica sea verdadera. 
Sirve para realizar una tarea repetitiva mientras una condición sea verdad. 
*/

let productos = 5;
while (productos > 0) {
    console.log(productos + " productos vendidos");
    productos--;
}

//Imprimir numeros
let num1 = 0;
    while(num1 < 10) {
        num1 ++
        console.log ("El numero es " + num1);
    }