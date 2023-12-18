//EJERCICIOS MARIANA
  // Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * Debe recibir como parametro la edad
 * Consideraciones: utilizar la estructura if-else
 */
let edad = 18;
if (edad <  18) {
  console.log('no puedes votar');
}
else {
  console.log('Puedes votar ')
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let numero = 56
if (numero % 7 === 0 && numero % 8 === 0) {
  console.log(true);
}

else {
  console.log(false);
}


/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

// Función que verifica si un número es divisible entre 7 o 8
function divisible(numero) {
    
    if (numero % 7 === 0 || numero % 8 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divisible(14));
console.log(divisible(16)); 
console.log(divisible(25));


/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let pelicula = 'terror';
switch (pelicula) {
    case 'accion' :
        console.log('Barbie Marmaid Power');
        break;
    case 'drama' :
        console.log('La más draga');
        break;
    case 'comedia' :
        console.log('Shrek 2');
        break;
    case 'romance' :
        console.log('Barbie el lago de los cisnes');
        break;
    case 'suspenso' :
        console.log('Black Swan');
        break;
    case 'terror' :
        console.log('Cañitas');
        break;
    default:
        console.log('Opción no disponible');
}


/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

// Ejemplo de estructura if-else con 4 casos
let accionCaja = 'Retirar';

if (accionCaja = 'Retirar') {
    console.log("Seleccionaste la opción 1");
} else if (accionCaja = 'Tranferencia') {
    console.log("Seleccionaste la opción 2");
} else if (accionCaja = 'Deposito') {
    console.log("Seleccionaste la opción 3");
} else if (accionCaja = 'Pago de servicios') {
    console.log("Seleccionaste la opción 4");
} else {
    console.log("Opción no válida");
}


/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function convertirDivisas(cantidad, tipoMoneda) {
    let resultado;

    switch (tipoMoneda) {
        case "dolar":
            resultado = cantidad * 0.058; 
            console.log(`${cantidad} MXN son aproximadamente ${resultado} euros.`);
            break;
        case "euro":
            resultado = cantidad * 0.054;
            console.log(`${cantidad} MXN son aproximadamente ${resultado} euros.`);
            break;
        case "yen":
            resultado = cantidad * 8.41;
            console.log(`${cantidad} MXN son aproximadamente ${resultado} yenes japoneses.`);
            break;
        case "libra":
            resultado = cantidad * 0.046;
            console.log(`${cantidad} MXN son aproximadamente ${resultado} libras esterlinas.`);
            break;

        case "franco":
            resultado = cantidad * 0.051;
            console.log(`${cantidad} MXN son aproximadamente ${resultado} franco suizo.`);
            break;
        default:
            console.log("Tipo de moneda no válido. Se admiten: dólares,euro, libra, yen o franco.");
    }
}

// Ejemplo de uso
convertirDivisas(100, "euro");
convertirDivisas(50, "libra");
convertirDivisas(75, "yen");
convertirDivisas(120, "dolar canadiense"); // Prueba de un tipo de moneda no válido



let operacion = prompt("Ingresa el número de tu operación 1. Retirar dinero ; 2. Transferencia ; 3. Depósito ; 4. Pago de servicios");

if (operacion == 1) {
    prompt("Ingresa el monto a retirar")
    console.log("Recoge tu dinero")
} else if (operacion == 2) {
    prompt("Ingresa la cuenta para transferir")
    let monto =  prompt("Ingresa el monto")
    console.log("ransferencia realizada por `${monto}`")
}
if (operacion == 3) {
    prompt("Ingresa la cuenta para depositar")
    prompt("Ingresa el monto a depositar")
    console.log("Depósito realizado")
}
if (operacion == 4) {
    let servicio = prompt("Ingresa el servicio deseas pagar?")
    let pago = prompt("Ingresa el monto que deseas pagar")
    console.log("Se han abonado ${pago} pesos a tu servicio de `${servicio}`")
}
