//Operador:
/*
Es un signi que especifica que debe efectuar una determinada operación.  

Operadores aritméticos: +, -, *, /, %, ++, --
Operadores de asignación (=)
Operadores lógicos (&& || !)
Operadores de comparación (==, ===, <, >)
Operadores de cadena (+, toLowerCasae, toUpperCase, trim, toString, concat)
*/

/*Operadores aritmeticos 
(+): suma se utiliza para sumar dos números
(*): multiplicación
(-): resta
(/): división
(%): residuo, se utiliza para calcular el residuo de una división
(++): incremento 
*/

let numero1 = 10;
let numero2 = 8;
suma = numero1 + numero2;
console.log(suma);

resta = numero1 - numero2;
console.log(resta);

multiplicacion = numero1 * numero2;
console.log(multiplicacion);

division = numero1/numero2;
console.log(division);

residuo = numero1 % numero2;
console.log(residuo);

incremento = numero1;
incremento ++;
decremento = numero2;
decremento --;
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let descuento = 20;
let nuevoPrecio = precioReal*(100-descuento)/100;
console.log(`Precio real $ ${precioReal}`);
console.log(`Descuento del ${descuento} %`)
console.log(`Nuevo precio $ ${nuevoPrecio}`);

//OPERADORES DE ASIGNACIÓN
/*
=: Este operador no compara, lo que hace es asignar. 

*/

// let Taylor = Swift;
/*Operadores de comparación
(==): Igualdad compara si nuestros valores son iguales*/

let numero3 = 10;
let texto = "10";
console.log(numero3 == texto);

/*(===): Igualdad estricta, compara si los  valores son iguales y si el tip de dato  */

let  numero4 = 10;
let texto1 = "10";
console.log(numero4 === texto1);

/*(!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión. */

let precioCaja = 1499;
let precioMax = 1500;
if (precioCaja != precioMax){
    console.log("El precio del producto no es igual al precio máximo")
}
else {
    console.log("El precio del producto es igual al precio máximo permitido")
}

let numero5 = 10;
let numero6 = "10";
if (numero5 !== Number(numero6)) {
    console.log("Son diferentes");
} 
else { 
    console.log("los valores son iguales")
}

/*(!==)Desigualdad estricta: este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor.  */

let numero7 = 41;
let numero8 = "59";
if (numero7 !== numero8) {
    console.log("los valores son diferentes")
}
else {
    console.log("los valores son iguales")
}

//(>) Mayor que: indica si un valor es mayor a otro

let puntuacionFinal = 85;
let puntuacionReq = 102;
console.log(puntuacionFinal > puntuacionReq);

//(<) Menor que: indica si un valor es menor que otro

let edadUser = 20;
let edadLimite = 30;
console.log(edadUser<edadLimite);

//(>=) Mayor igual que nos dice si un valor es igual o mayor que otro. 
let edadMin = 18;
let edadPersona = 18;
console.log(edadPersona >= edadMin);

//(<=) Menor o igual que
let temperatura = 21;
let temperaturaMax = 32; 
console.log(temperatura<=temperaturaMax);

//Un programa que solicite al usuario 2 num y ver si son iguales
// let numeroIngresado = prompt("Ingrese un número:");
// let numeroDos= prompt("Imgresa el segundo número:");
// if (numeroIngresado < numeroDos){
//     console.log("El numero ingresado es menor");
// }
// else if (numeroIngresado = numeroDos) {
//     console.log("Son iguales");
// }
// else {
//     console.log("Es mayor")
// }



//Un programa que le pida al usuario 2 palabras y determina si son iguales. 
// var palabra1= prompt("Ingresa la primera palabra");
// var palabra2= prompt("Ingresa tu segunda palabra");
// if (palabra1 === palabra2) {
//     console.log("son iguales");
// }
// else {
//     console.log("Son diferentes")
// }

/*Operadores lógicos
(&&) and se utiliza cuando las dos condiciones deben cumplilrse
*/

let edadSuf = 18 ;
let tieneID = true;
if (edadSuf >=18 && tieneID) {
    console.log("Puede rentar");
} else {
    console.log("no puedes rentar");
}

// (||) or cuando una de las dos condiciones se debe cumplir

let esPrime = false;
let envioGratis = true;

if (esPrime || envioGratis) {
    console.log("Califica para descuento");
} else {
    console.log("No califica para descuento");
}


// (!) NOT se utiliza pra negar el valor de una condición
let diaLibre = false;
if (!diaLibre) {
    console.log("se trabaja");
}
else {
    console.log("descansito");
}

//Operadores de cadena

//toLowerCase cambia a minúsculas. 
let mensajeUser = "Noche de PAZ";
let cambioMinusc = mensajeUser.toLocaleLowerCase();
console.log(cambioMinusc);

//toUpperCase hace el cambio de string a mayúsculas
let saludo = "ayuda";
let cambioMayus = saludo.toUpperCase();
console.log(cambioMayus);

//trim quita los espacios al principio y al finals
let aviso = "   P A O L A S U A R E Z    "
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//toString 
let datoNum = 31;
let datoStr = datoNum.toString();
console.log(datoStr);

//concat 
let nombreIcon = "Jenni";
let apellido = "Rivera";
let nombreCompleto = nombreIcon.concat (" ", apellido);
console.log(nombreCompleto)

//EXPRESIONES

/*
Expresión aritmética
let operación = 14 * 7 + 9=; combina la suma y multiplicación

expresion de cadena 
let notificacion = "Casi" + "Año nuevo"

expresión lógica
let esMayorEdad = (23 > 18) && (23 < 65); tiene operadores  logicos

expresion de asignación
let frasco = mermelada; asigna el valor de la variable. 
*/

//RECETA HOTCAKES
function verificarIngredientes(huevos, harina, leche, azucar) {
    if (huevos >= 2 && harina >= 200 && leche >= 250 && azucar >= 50) {
        return "Tienes suficientes ingredientes para hacer hotcakes.";
    } else {
        return "No tienes la cantidad suficiente de ingredientes.";
    }
}

// Ejemplo de uso:
let cantidadHuevos = 3;
let cantidadHarina = 300;
let cantidadLeche = 300;
let cantidadAzucar = 60;

let resultado = verificarIngredientes(cantidadHuevos, cantidadHarina, cantidadLeche, cantidadAzucar);
console.log(resultado);

