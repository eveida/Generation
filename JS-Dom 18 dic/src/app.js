const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Generar una función que genere un numero random, tomando un parámetro number
const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//Crear evento de click para que cuando presiones pase algo 

//Crear eventos de click para que al presionar un botón pase algo
botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});


// --botón de resets
botonReset.addEventListener("click", ()=> {
    document.body.style.background = colorFondo;
});