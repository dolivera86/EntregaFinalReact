import { Link } from "react-router-dom";
import './Style/EarlyReturn.css'

const EarlyReturn = () => {

        return (
            <div className="empty-cart-message">
                <h2>Opssss... el carrito está vacío.</h2>
                <Link to='/'>Volver al inicio</Link>
            </div>
        )
    
}

export default EarlyReturn