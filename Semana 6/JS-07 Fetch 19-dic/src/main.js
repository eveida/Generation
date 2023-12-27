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
//Usando fetch para mostrar en consola
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
//Si se cumple la promesa se traerán los datos de la API y se convertirá en tipo json para poder mostrar en consola. 
    .then(response => response.json())
    .then(response => {
        console.log(response[0].name); //mostrando en consola el usuario con el índice 0 y trayendo solamente su nombre
    })
    .catch(error => console.error("¡Ups, algo ha salido mal!", error));

//Usando fetch para navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");

//Variable para guardar la info 
let post = null;

//Consumiendo API con Fetch (promesas)
botonInfo.addEventListener("click", () =>{
    fetch("https://jsonplaceholder.typicode.com/users/7")
        .then (response => response.json())
        .then (response => {
            post = response; //guardo los datos en la variable post
            //Mandamos a llamar la variable desde la función
            mostrarDatos(post);
        })
        .catch(error => console.error("¡Problemas!", error));
})

//Función que me permita manipular la variable de tipo null
//Quiero traer username, mail, phone
const mostrarDatos = (post) => {
    //Creando nodos (elementos) mediante DOM manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (debe hacer matchj con el API)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//Usando Fetch 

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener ("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response
            //Productos a definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("¡Cuidado!", error))
})
//Función para crear, agreagr y mostrar elementos en el DOM
const mostrarProductos = (productos) => {
    //mostrando title, price, description, category
    productos.map((productos) => {

    
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //Inner HTML
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = document.category;

    //Mostrarlos en navegador al agregarlos a su padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
})
} 

//Método POST utilizando fetch
fetch ("https://jsonplaceholder.typicode.com/posts", {
  //Indicar que es un método de tipo POST
  method: "POST",
  //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userid, title, body)
  body: JSON.stringify ({
    userId: 1986,
    title: "salchipapa",
    body: "Autor: Alan Turing",
  }),  
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }

})
.then(response => response.json())
.then(response => {
  console.log(response)})

// >>>>>>>>>>>Programación asíncrona
//Función flecha de tipo async-await
//Indicar que es una función asíncrona
const getUsers = async () => {
    //Para que se cumpla la promesa, no utilizamos then, si no, utilizamos try y catch. Para errores se usa catch. 
    try {
        //Retardo para que se ejecute. Crear una nueva promesa que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));


        //Mi promesa que se ejecuta
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4")
        const data = await response.json();
        console.log(data);
    } 
    catch(error) {
        console.error("Error inexplicable", error);
    }

}

//Invocar la función
getUsers();

//>>>>>>>>><LocalStorage
// Nos permite crear, modificar, eliminar, guardar objetos de JavaScript de manera local (en el equipo)
//Crear objeto de JS con sus llaves y valores. 
const user = [{
    id: 1, 
    name: "Taylor", 
    apellido: "Swift",
    email: "taylor1989@gmail.com",
    posicion: "Patrona",
    empresa: "Eras Tour"}, 
    {
    id: 2, 
    name: "Jenni", 
    apellido: "Rivera",
    email: "mariposadebarrio@gmail.com",
    posicion: "Patrona",
    empresa: "Jotas"}, 
];
//Convertir el objeto creado a notación JSON y almacenarlo en el local storage. 
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el local storage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].nombre} con posicion ${user[1].posicion}, trabaja en ${user[1].email}`)

//sesionStorage