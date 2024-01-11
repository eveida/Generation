import './Navbar.css' //Importación de CSS
import logo_nasa from '../assets/logo_nasa.jpg'

//Crear función que contiene el marcado para que viva nuestro código
const Navbar = () => {
    const url1 = 'https://www.nasa.gov/international-space-station/';
    const url2 = 'http://open-notify.org/Open-Notify-API/People-In-Space/';
    return (
        <> {/*Fragmento (el comentario debe ser multilínea y estar encerrado entre llaves)*/}
        <div className='navbar--container'> {/*Las clases en react son className en lugar de sólo class */}
            <div className='navbar--title'>
                <a href={ url1 } id = 'link--logo'>
                    <img src={logo_nasa} alt='logo de ISS' />
                </a>

            </div>
            <div className='navbar--links'>
                <div className='navbar--link'>
                    <a href={url1}>Home</a>
                </div>
                <div className='navbar--link'>
                    <a href={url2}>About</a>
                </div>
                <div className='navbar--link'>
                    <a href={url2}>Astros</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;