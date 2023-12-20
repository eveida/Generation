//Programación sincrónica
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two ();
    console.log("tres")
}

one();
console.log("*****************")

//Programación asíncrona
/*setTimeout que recibe una función anónima y establece un tiempo en milisegundos de ejecución para cumplir con la condición de asincronismo.  */
// const twoAsync = () => {
//     setTimeout( () => {
//         console.log("dos Async");
//     }, 5000)
// }

// const oneAsync = () => {
//     setTimeout(function() {
//         console.log("uno Async")
//     }, 2000);
//     twoAsync();
//     console.log("tres Async");
// }

// oneAsync();

//PROMESAS Mediante en Fech API
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
//Si se cumple la promesa se traerán los datos de la API y se convertirá en tipo json para poder mostrar en consola. 
    .then(response => response.json())
    .then(response => {
        console.log(response[0].name); //mostrando en consola el usuario con el índice 0 y trayendo solamente su nombre
    })
    .catch(error => console.error("¡Ups, algo ha salido mal!", error));