import CartWidget from './CartWidget'
import fondotienda from '../../assets/img/fondotienda.jpg'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <div className="brand">
                    <img src={fondotienda} alt="Imagen de la tienda" className='brandimg' />
                    <h1>Estilo Sin Fronteras</h1>
                </div>
            </Link>
            <ul className="categorias">
                <li>
                    <Link to='/'>Todo</Link>
                </li>
                <li>
                    <Link to='/category/casual'>Casual</Link>
                </li>
                <li>
                    <Link to='/category/urbano'>Urbano</Link>
                </li>
                <li>
                    <Link to='/category/formal'>Formal</Link>
                </li>
                <li>
                    <Link to='/category/deportivo'>Deportivo</Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    );
};

export default NavBar;