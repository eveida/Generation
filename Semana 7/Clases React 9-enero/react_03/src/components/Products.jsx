import './Products.css'


/*
-Comenté esta linea de código porque fue la que usé para el ejemplo de promps estructurados
const Products = (props) => {
*/
const Products = ({img, name, description, price}) => {

    return (
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información
        
        <div className="cards">
            <div className="products--card">
                <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneakers' />
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$1958</h4>
            </div>
        </div> 
        
        */}
        {/**Props estructurados: Puedo asingar diferentes porpiedades a un div, sin tener que generar muchos props, solamanete usando la palabra reservada "props" como parámetro de la función,
         * Quiero modificar varias porpiedaes, puedo mandar a llamar las props dentro de cada elemento, como si fueran métodos 
         */}
        {/*<div className="cards">
            <div className="products--card">
                <img src={props.img} alt='sneackers'/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div>*/}


        {/*Props desestructurados. Permite asignar datos de un objeto a una variable separada para que dicha variable pueda contener los datos provenientes del objeto.
         * No utulizamos `props` como parámetro de la función sino que asignamos parámetros a cada elemento y los llamamos directamente en dichos elementos.
         *Los props desestructurados viven como parámetros y se les asigna un nombre específico.
         */}
        <div className="cards">
            <div className="products--card">
                <img src={img} alt='sneackers'/>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div> 
        </>
    )
}

export default Products