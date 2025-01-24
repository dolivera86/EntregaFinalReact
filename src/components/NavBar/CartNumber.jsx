import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartNumber = () => {
    const { totalQuantity } = useContext(CartContext)

    let quantity = totalQuantity()

    return (
        <div className={`cart-number ${quantity === 0 ? 'hidden' : ''}`}>
            { quantity === 0 ? '' : quantity }
        </div>
    )
}

export default CartNumber