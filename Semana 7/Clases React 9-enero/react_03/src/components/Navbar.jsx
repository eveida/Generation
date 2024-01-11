import './Navbar.css' //Importación de CSS

//Crear función que contiene el marcado para que viva nuestro código
const Navbar = () => {
    return (
        <> {/*Fragmento (el comentario debe ser multilínea y estar encerrado entre llaves)*/}
        <div className='navbar--container'> {/*Las clases en react son className en lugar de sólo class */}
            <div className='navbar--title'>
                <h1>GenMex-35</h1>
            </div>
            <div className='navbar--links'>
                <div className='navbar--link'>
                    <a href='#'>Home</a>
                </div>
                <div className='navbar--link'>
                    <a href='#'>About</a>
                </div>
                <div className='navbar--link'>
                    <a href='#'>Astros</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;