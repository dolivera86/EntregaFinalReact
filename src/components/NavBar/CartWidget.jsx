import CartNumber from './CartNumber'
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {

    return (
        <div className="cart">
            <TiShoppingCart />
            <div className="cart-number">
                <CartNumber/>
            </div>
        </div>
    )
}

export default CartWidget;