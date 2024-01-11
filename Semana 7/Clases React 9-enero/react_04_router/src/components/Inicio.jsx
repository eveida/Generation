import { Link } from "react-router-dom"
const Inicio = () => {
    return (
        <>
            <div>
                <h1>Esta es la página de inicio</h1>
                <Link to = 'nosotros'>
                    Presiona aquí para ir a la página de nosotros
                </Link>
                <br></br>
                <Link to ='contacto'>
                    Presiona aquí para ir a la página de contacto
                </Link>
            </div>
        </>
    )
}

export default Inicio