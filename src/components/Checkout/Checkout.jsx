import { useState, useContext } from "react"
import FormCheckout from "../../components/Checkout/FormCheckout.jsx";
import { CartContext } from "../../Context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import db from "../../db/db.js";
import validateForm from "../../utils/validateForm.js";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })
  const [orderId, setOrderId] = useState(null)
  const { cart, totalPrice } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
      date: Timestamp.fromDate(new Date())
    }

    //primeramente validamos el formulario
    const response = await validateForm(dataForm)
    if(response.status === "success"){
      await uploadOrder(order)
    }else{
      console.log(response.message)
      
    }
  }

  const uploadOrder = async (newOrder) => {
    try {
      const ordersRef = collection(db, "orders")
      const response = await addDoc(ordersRef, newOrder)
      setOrderId(response.id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="checkout">
      {
        orderId ? (
          <div>
            <h2>Orden enviada correctamente 😁</h2>
            <p>Guarde su número de seguimiento: {orderId}</p>
            <Link to="/" className="button-to-home">Volver al inicio</Link>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
        )
      }
    </div>
  )
}
export default Checkout