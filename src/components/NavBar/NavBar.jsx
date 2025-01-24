import CartWidget from './CartWidget'
import fondotienda from '../../assets/img/fondotienda.jpg'
import ClassNavbar from './ClassNavbar';
import { Link, NavLink } from 'react-router-dom';
import './Style/navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to = '/' className = 'linkHome'>
                <div className="brand">
                    <img src={fondotienda} alt="Imagen de la tienda" className='brandimg' />
                    <h1 className = 'titleHome'>Estilo Sin Fronteras</h1>
                </div>
            </Link>
            <ul className="categorias">
                    <NavLink to = '/' className = { ( { isActive } ) => ClassNavbar(isActive) } >Todo</NavLink>
                    <NavLink to = '/category/casual' className = { ( { isActive } ) => ClassNavbar(isActive) } >Casual</NavLink>
                    <NavLink to = '/category/urbano' className = { ( { isActive } ) => ClassNavbar(isActive) } >Urbano</NavLink>
                    <NavLink to = '/category/formal' className = { ( { isActive } ) => ClassNavbar(isActive) } >Formal</NavLink>
                    <NavLink to = '/category/deportivo' className = { ( { isActive } ) => ClassNavbar(isActive) } >Deportivo</NavLink>
                    <NavLink to = '/category/verano' className = { ( { isActive } ) => ClassNavbar(isActive) } >Verano</NavLink>
            </ul>

            <CartWidget />
        </nav>
    );
};

export default NavBar;