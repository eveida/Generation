import { Link } from "react-router-dom"
const Nosotros = () => {
    return (
        <>
        <div>
            <h1>Esta es la página de nosotros</h1>
            <Link to = '/'>
                Regresar a la página de inicio
            </Link>
            <br></br>
            <Link to = '/contacto'>
                Ir a la página de contacto
            </Link>
        </div>
        
        </>
    )
}

export default Nosotros