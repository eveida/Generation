/* Manipulación del DOM 
- Leer y traer nodos del árbol del DOM
    document.getElementByID (traer elementos por ID)
    document.getElementsByClassName (traer elementos por clase)
    document.getElementByTagName (traer elementos por etiquetas)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //Trae un string (texto que vive en el ID)

//getElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la longitud de elementos de la clase
console.log(typeof titulos); //Muestra que es un objeto

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*Métodos para llamar elementosmediante selectores de CSS.
Se usa para procesos más específicos y la sintaxis querySelector
 - document.querySelector("Selector") #, ., <>; 
 - document.querySelectorAll Selecciona los elementos que se especifiquen
    Siempre van a traer el primer elemento con el selector indicado. */

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);

//querySekectorAll
const queryClassAll = document.querySelectorAll(".title")
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#94EB6E";

//Manipular el texto de un elemento
const subtitulo = document.querySelector("#title2");
subtitulo.innerText = "Sesión de manipulación del DOM";
subtitulo.style.color = "#4A2FEB";

/*
Métodos para crear y agregar elementos en el DOM. Se divide en dos partes. 
a) Crear nodo 
    - document.createElement("element") --> Crea elementos a partir de etiquetas. 
    - document.createTextNode("text") --> Crea texto dentro de las etiquetas. 
b) Agregar nodo */

const nodo1 = document.createElement("h3");
const imgNodo = document.createElement("img");

/*
b) Agregar nodos: mandamos a llamar el elemento padre y le pasamos la propiedad
    parent.Element.appendChild(const)
    parent.Element.append(conts)
    parent.Element.insertBefore(const)
    parent.Element.inserAdjacentElement(const)
*/

//Obtengo ele elemento padre por tag, class o id
const parentElement = document.getElementById("dif");

//Crear texto del nodo1
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");

//Insertar texto en el nodo1
nodo1.appendChild(textNodo1);

//Insertar nodos en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#6C7FEA"
//Agregando imagen
//Inserto el imgNodo en el elemento pdre, patra definirlo posteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src = "../src/assets/2629db6c-4b39-443f-b52e-75638b12b5b1.jpg";
imgNodo.alt = "Octocat"
imgNodo.width= "300"


/* Otra forma de leer y modificar nodos 
 - document.outerHTML (leer)
 - mode.innerHTML (escribir sobre el nodo)
*/

const elementOuter = subtitulo.outerHTML;
console.log(elementOuter);
subtitulo.innerHTML = "Manipualción del DOM"
