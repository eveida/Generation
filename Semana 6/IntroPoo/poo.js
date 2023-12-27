/*Paradigmas de programación 
 >- Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada. 
 >- Porgramación basada en eventos: se basa en la gestión  yrespuesta de eventos. 
 >- Programación declarativa: Explicar lo que queremos obtener. 
 >- Programación orientada a objetos: toma cierta información o esctructura del mundo real (objeto) para explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (métodos). 

 */
//Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto. 
class persona{
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //objetos
    //Para inicializar un objeto es necesario definir un constructor que toman los atributos. 
    //Clases = molde ---> Consrtuctor ---> gomitas
    constructor (nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer (){
        console.log("Bon apetit");
    } //metodo comer
    bailar () {
        console.log("baile improvisadooo");
    } //metodo bailar

    mostrarInfo (){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Correo electronico: ", this.email);
        console.log("Teléfono: ", this.telefono);
    }
}

let usuario1 = new persona ("Jenni", "Rivera", 54, "mariposadebarrio@gmail.com", "+1 917 xx xx");
let usuario2 = new persona("Harry", "Styles", 29, "larry@stylinson.com", "+1 213 xx xx");
let usuario3 = new persona("Niall", "Horan", 30, "niallhoran@gmail.com", "+1 213 xx xx");
let usuario4 = new persona("Taylor", "Swift", 34, "taylorswift@ts.com", "+1 213 xx xx");
let usuario5 = new persona("One", "Direction", 10, "onedirection@1d.com", "+44 xx xx xx");
console.log(usuario1);
console.log(usuario2.email);
console.log(usuario1.email, usuario2.email, usuario3.email);

usuario4.comer(); //Invocando el método
usuario2.mostrarInfo(); //Invocando el método
usuario1.mostrarInfo();
console.log(usuario5.email);

//Pilares de la programación orientada a objetos
/* 
>- Herencia
>- Poliformismo 
>- Encapsulamiento
>- Abstracción */

//Herencia nos permite heredar clases inferiores para pooder optimizar el programa

class arrendador extends persona { //Subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar){
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }

    mostrarInfo() {
        console.log("Capacidad", this.capacidad)
        console.log("Costo", this.costo)
        console.log("Nombre del lugar", this.nombreLugar)
    }
}

let arrendador1 = new arrendador("Ivy", "Willow", 8, "folklore@tseras.com", "+1 213 XX XX", 300, 10000, "Tenis Court");

console.log(arrendador1);

console.log(arrendador1.costo);

arrendador1.mostrarInfo();


//>>>> polimorfismo <<<<<
//Tener objetos de diferentes tipos que pueden ser manipulados en común 
class producto {
    marca = "";
    precio = 0;

    constructor(marca, precio){
        this.marca = marca;
        this.precio = precio;
    }


    mostrarDescripcion() {
        console.log("Marca ");
        console.log("Precio ");
    }
}

let producto1 = new producto ("ZARA", 400);
//>>>>> Encapsulamiento <<<<<<<<<
//Ocultar la implementación de un objeto y solo mostrar los datos necesarios

class userr{
    #contraseña;

    constructor(userName, correo, contraseña){
    this.userName = userName;
    this.correo = correo;
    this.#contraseña = contraseña  
    }
}
// verificarContraseña(contraseña){
//     return this.#contraseña === contraseña;
// }

//Abstracción no es nada más que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos. 
/*
Los objetos tipo JSNO en un formato de intercambio de datos ligreo, accesible, estructurado, manipulable (DOM) y que brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch. 
 */

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);


//Principios Solid
/* 
>>> Principio de responsabilidad unica (Single Responsability Principle) <<< 
    Una clase de tener asignada una tarea o responsabilidad específica y esta no debería cambiar.
>>> Principio abiert/cerrado (open/closed principle OCP)
    Una clase puede estar abierta a extendiones y agregar nuevas funciones, pero sin generar cambios en la misma
>>> Principio dde sustitución de Liskov (Liskov Sustitution)
    Una clase hijo puede sustituir objetos de una clase padre
>>> Principio de segregación de interfaces (interface Segregation Principle ISP)
    Delimitar los métodos que necesito y dejar fuera los innecesarios
>>> Principio de inversión de dependencias (Dependecy Inversion Principle DIP)

*/
/*Programa que conste de una clase llamada alumno que contenga como atributos nombre y calificaciones. Definir los métodos para inicializar sus atributos (cosntructor), imprimirlos y mostrar un mensaje si la calificación es aprobtoria 
Atributos
    Nombre
    Calificación

Métodos
    Imprimir
    Evaluación
    la calificación aprobatoria es de 6 
    if para evaluar */


class evaluaciones {
    alumno = "";
    calificacion = 0;

    constructor (alumno, calificacion){
        this.alumno = alumno;
        this.calificacion = calificacion;

    }

    evaluacion (){
        if (this.calificacion <= 6) {
            console.log("Reprobado", this.alumno);
        } else {
            console.log("Aprobado", this.alumno);
        }
    }
}

let alumno1 = new evaluaciones ("Juan", 8)
alumno1.evaluacion();