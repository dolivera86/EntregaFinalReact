import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import EarlyReturn from "./EarlyReturn";
import { Link } from "react-router-dom";
import './Style/cart.css'

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart, updateQuantity } = useContext(CartContext);

    const handleRemove = (id) => {
        deleteProductById(id); // Función para eliminar el producto del carrito
    };

    const handleClearCart = () => {
        deleteCart(); // Llamamos a la función para vaciar todo el carrito
    };

    const handleQuantityChange = (id, quantity) => {
        updateQuantity(id, quantity); // Función para actualizar la cantidad
    };

    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <EarlyReturn />
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((productShopCart) => (
                            <li key={productShopCart.id} className="cart-item">
                                <img
                                    src={productShopCart.image && productShopCart.image[0] ? productShopCart.image[0] : '/path/to/default-image.jpg'}
                                    alt={productShopCart.name || 'Producto sin nombre'}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <p className="cart-item-name">
                                        {productShopCart.name}
                                    </p>
                                    <div className="cart-item-quantity">
                                        <button
                                            onClick={() => handleQuantityChange(productShopCart.id, productShopCart.quantity - 1)}
                                            disabled={productShopCart.quantity <= 1}
                                            className="quantity-button"
                                        >
                                            -
                                        </button>
                                        <span>{productShopCart.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(productShopCart.id, productShopCart.quantity + 1)}
                                            disabled={productShopCart.quantity >= productShopCart.stock}
                                            className="quantity-button"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="cart-item-price">Precio c/u: ${productShopCart.price}</p>
                                </div>
                                <button onClick={() => handleRemove(productShopCart.id)} className="remove-button">Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <div className="total-section">
                        <h3 className="total-price">Precio total: ${totalPrice()}</h3>
                        <Link to='/checkout' className="checkout-button">Continuar con mi compra</Link>
                    </div>
                    <div className="clear-cart">
                        <button onClick={handleClearCart} className="clear-cart-button">Vaciar carrito</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
