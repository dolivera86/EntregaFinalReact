import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../Context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import db from "../../db/db"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({ fullname: "", phone: "", email: "" });
    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (e) => setDataForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate(new Date()),
        };

        const { status, message } = await validateForm(dataForm);
        status === "success"
            ? await uploadOrder(order)
            : toast.warn(message);
    };

    const uploadOrder = async (newOrder) => {
        try {
            const ordersRef = collection(db, "orders");
            const response = await addDoc(ordersRef, newOrder);
            setOrderId(response.id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="checkout">
            {orderId ? (
                <div>
                    <h2>Orden enviada correctamente 😁</h2>
                    <p>Guarde su número de seguimiento: {orderId}</p>
                    <Link to="/" className="button-to-home">Volver al inicio</Link>
                </div>
            ) : (
                <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
            )}
        </div>
    );
};

export default Checkout;