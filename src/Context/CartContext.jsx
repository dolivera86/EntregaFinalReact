import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
    const [cart, setCart] = useState(cartLocalStorage || []);

    useEffect(() => {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
    }, [cart]);

    const includeProduct = (newArticle) => {
        const index = cart.findIndex((product) => product.id === newArticle.id);

        setCart(
            index === -1
                ? [...cart, newArticle]
                : cart.map((item, i) =>
                    i === index
                        ? { ...item, quantity: item.quantity + newArticle.quantity }
                        : item
                )
        );
    };

    const totalQuantity = () =>
        cart.reduce((total, { quantity }) => total + quantity, 0
    );

    const totalPrice = () =>
        cart.reduce(
            (total, { quantity, price }) => total + quantity * price, 0
    );

    const deleteProductById = (id) => setCart(cart.filter(({ id: productId }) => productId !== id));


    const updateQuantity = (id, newQuantity) => {
        const product = cart.find(productShopCart => productShopCart.id === id);

        // Usamos un ternario para verificar condiciones y actualizar el carrito
        product && newQuantity >= 1 && newQuantity <= product.stock
            ? setCart(cart.map(item =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            )) : null;
    };

    const deleteCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, includeProduct, totalQuantity, totalPrice, deleteProductById, updateQuantity, deleteCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
