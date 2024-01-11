import '../components/Astros.css'
import { useEffect, useState } from 'react';
import Astro from './Astro';
//Función para crear cards (tarjetas)  donde vivirá la información de la API

//Mandar a llamar la API, utilizando Hooks (useState y useEffect)


//Función para agregar información de la API Astros dentro de las cards
const Astros = () => {
// Definir URL de la variable
const AstrosURL ='http://api.open-notify.org/astros.json';

//Implementar useState
const [astros, setAstros] = useState([]);
//Implementar useEffect 
useEffect(() =>{
    fetchAstros();  //Hoisting de una función que voy a definir
}, []);

const fetchAstros= () => {
    fetch(AstrosURL)
    .then(response => response.json())
    .then(data => setAstros(data.people)) //Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de people
    .catch(error => console.log(error))

    console.log(astros); //Vive en consola
}


//Enviar la información de la API 
//Crear función fetch para conectarse a la API usando .map sobre el Array
    return (
        <>
        {
            astros.map((astro, index) => 
            <Astro key= {index} {...astro}  />)
        }
        </>
    )
}
export default Astros