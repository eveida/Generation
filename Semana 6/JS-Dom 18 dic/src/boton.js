const container = document.getElementById("container-div");
const button = document.getElementById("card-btn");

//Agregando estilos al container
container.style.visibility = "visible";

button.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
});