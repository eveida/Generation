import './Button.css'

/**
 * Props: propiedades qe se pueden asignar a los componentes para modificar el text, la información desde la renderización del mismo.
 * Se asignan como parámetro de la función con el nombre del prop y debe ir entre llaves.
 * Se manda a llamar en el bloque de código donde se debe implementar utilizando llaves
 */
const Button = ({label}) => {
    return(
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button