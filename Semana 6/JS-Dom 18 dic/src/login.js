const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");

//Regex determina patrones que se deben cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Disable el botón
submitButton.disabled = true;

/*
Evento para input, el cual evaluará el patrón de experesión regular y en caso de cumplir el patrón, habilitará el botón y podremos ser redirigidos a la página index.html
- Se obtiene el valor actual del campo email (input) usando e.target
- Se evalúa la REGEX */

emailInput.addEventListener("input", (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text) == true) {
        submitButton.disabled = false;
    }
})