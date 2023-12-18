console.log("hola")
/*
Control de flujo y estructura de control
Las estructuras de control son un componente fundamental dentro de la programación, entre alguna de las facilidades y ventajas que nos proporcionan para escribir y depurar código, podemos mencionar los siguientes:
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/

/*
Declaración de sentencia if-else
Palabra reservada if para comenzar la declaración, se coloca en paréntesis () donde se debe colocar una expresión lógica (true/ false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condición se cumple, 
Después de la {} declarado para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo es necesario colocar más expresiones dentro de un ().
Simplemente colocamos otras llaves {} para indicar el bloque de código que tienen que ser ejecutado en caso de que la condición no se cumpla (false). 
*/

let n = 15;
if (n > 10) {
  console.log(true);
}
else {
  console.log(false);
}

/*if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso. */

//if anidados

let edad = 28;
if (edad <  18) {
  console.log('eres menor de edad pipipipi');
}
else if (edad >= 18 && edad < 65) {
console.log('eres un adulto chiquito')
}
else {
  console.log('Eres un adulto senior')
}

/*Sentencia Switch
La sentencia es otro tipo de estructura de control de flujo que, nuevamente se encuentra en dic¿versos lenguajes de programación. 
Es similar a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcación (partición de caminos) sino que se secciona en múltiples casos (case) que, dependiendo la expresión que cumpla con un caso específico, será la secuencia que se va a ejecutar, dentro de la declaración.  

*Declaración:
Se empieza por la palabra reservada switch, seguido de esto, colocamos paréntesis () donde se debe colocar el valor que va a indicar la sentencia/caso a ejecutar. 
Falta indicar el bloque de código que se limita a esta sentencia, como lo hacíamos en la sentencia if o con las funciones. 
Dentro de este bloque de código, falta colocar los casos para cada valor que se desee establecer según sea el valor indicado dentro del paréntesis ().
Cada uno de estos casos se separa de la siguiente manera:
  - Case valor: instrucción a ejecutar si el valor empata con este caso. 
  - Después, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instrucción break 
  - Cuando terminemos de establecer los casos que necesitamos declara la última sentencia con default. Esta nos permite establecer un valor por defecto. 
  default: mensaje no disponible. 

*/

let dia = "lunes";
switch (dia) {
  case "lunes" :
    console.log("odio los lunes");
    break;
  case "martes" :
    console.log("martes de LMD");
    break;
  case "miercoles" :
    console.log("wednesday wedding day");
    break;
  case "jueves" :
    console.log("Nutrisa 2x1");
    break;
  case "viernes" :
    console.log("Viernes de ahorcar");
    break;
  case "sabado" :
    console.log("sábado de descansito");
    break;
  case "domingo" :
    console.log("domingo de misa");
    break;
  default :
  console.log("Día desaconocido");
}

/*Operador ternario
Es una expresión condicional if-else más simple y legible
Principalmente se usa para simplificar condiciones de una sola expresión. También puede anidar sentencias if-else-if, sin embargo, no es recomendable porque el código se puede volver confuso y poco legible. 
Su declaración es la siguiente:
- Palabra reservada var, let o const:
- Se le asigna un nombre como si se tratar de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un paréntesis (), después hay que colocar un caracter ?que indica el camino a seguir, dependiendo si el camino se cumple.
Para separar el resultado true de flase debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar. 
Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar. 

 */

let verificacion = n >10 ? "Si es mayor" : "No es mayor"
console.log(verificacion);

/*Cuando usar if -else y cuando el switch 
if-else: cuando necesitemos tomar decisiones bajo condiciones más flexibles. 
switch: cuando tenemos un conjunto fijo de valores para comparar una expresión.
*/