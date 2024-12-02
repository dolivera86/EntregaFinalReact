import CartWidget from './CartWidget'
import fondotienda from '../../assets/img/fondotienda.jpg'
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                
            </div>
            <img src={fondotienda} alt="Imagen de la tienda" className='brandimg'/>
                <h1>Estilo Sin Fronteras</h1>
            <ul className="categorias">
                <li>Todo</li>
                <li>Casual</li>
                <li>Urbano</li>
                <li>Formal</li>
                <li>Deportivo</li>
            </ul>

            <CartWidget/>
        </nav>
    );
};

export default NavBar;