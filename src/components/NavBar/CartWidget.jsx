import CartNumber from './CartNumber'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return (
        <Link to="/cart" className="cart">
            <TiShoppingCart />
            <CartNumber />
        </Link>
    )
}

export default CartWidget;