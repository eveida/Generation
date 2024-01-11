import { Link } from "react-router-dom"
const Contacto = () => {
    return (
        <>
        <div>
            <h1>Esta es la página de contacto</h1>
            <Link to = '/'>
                Presiona para regresar al inicio
            </Link>
            <br></br>
            <Link to = '/nosotros'>
                Ir a la página de nosotros
            </Link>
        </div>
        
        </>
    )
}

export default Contacto