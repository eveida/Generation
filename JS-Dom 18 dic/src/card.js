/* Para manipular la información de un usuarion necesito crear un perfil mediante un objeto de js.
 */

const user = {
    username: 'eveida',
    age: 23,
    email: 'eveida.palos@gmail.com', 
    favfilms: ['Mean Girls', 'Buscando a Dory', 'Shrek']
}

//Crear una función que me permita ingresar el objeto del perfil en el nodo padre

const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Mostrando lista en forma de lista
    /* Para mostrar el array en forma de lista utilizaremos un ciclo for each para recorrrer el array y traer el elemento
     */
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);

    });
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#fa9dec"
}

//Mostrando elementos de lista en fila
    // document.getElementById("fav-films").textContent = user.favfilms;

//Invocando la función
createUser(user);

/*Event para actualizar el user name mediante el input y botón

*/

//eventos para actualizar el username mediante el input boton
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
})

const inputEmail = document.getElementById("email-input");
const emailBtn = document.getElementById("btn-email");
const correoVerif = document.getElementById("email");

emailBtn.addEventListener("click", () => {
    correoVerif.textContent = inputEmail.value;
})
