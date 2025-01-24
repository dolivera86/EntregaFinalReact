import { Link } from 'react-router-dom';
import './Style/Mistake.css'

function Mistake() {
    return (
        <div className='mistakeContainer'>
            <div className='mistakeMessage'>
                <h2>Error 404</h2>
                <p>La ruta solicitada no corresponde a ninguna categoría válida.</p>
                <Link to='/'>Ir a la página principal.</Link>
            </div>
        </div>
    )
}

export default Mistake