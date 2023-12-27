//Creando función para determinar si un número es par o impar
//Necesitamos exportar esta función para que pueda ser utlizada en cualquier parte del proyecto solamente llamando al script. Para ello debemos usar las palabras reservadas
//Nota: no puede ser función flecha, si no que por declaración, por commonJS

export default function determinarParImpar(numero) {
    (numero%2 === 0) ? console.log(`El número${numero} es par`) : console.log(`El numero ${numero} es impar`);
};