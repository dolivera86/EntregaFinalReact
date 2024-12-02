import CartNumber from './CartNumber'
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
    /*const numberCart = 5;*/

    return (
        <div className="cart">
            <TiShoppingCart />
            <div className="cart-number">
                <p><CartNumber/></p>
            </div>
        </div>
    )
}

export default CartWidget;