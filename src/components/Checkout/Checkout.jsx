import { useState, useContext } from "react"
import FormCheckout from "../../components/Checkout/FormCheckout.jsx";
import { CartContext } from "../../Context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import db from "../../db/db.js";
import validateForm from "../../utils/validateForm.js";
import Loading from "../Loading/Loading.jsx";
import './Style/checkout.css'

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const { cart, totalPrice } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    setLoading(true)
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
      date: Timestamp.fromDate(new Date())
    }

    //validamos el formulario
    const response = await validateForm(dataForm)
    if (response.status === "success") {
      await uploadOrder(order)
    } else {
      setErrors(response.message)
      setLoading(false)

    }
  }

  const uploadOrder = async (newOrder) => {
    try {
      const ordersRef = collection(db, "orders")
      const response = await addDoc(ordersRef, newOrder)
      setOrderId(response.id)
      setLoading(false)
      setDataForm({
        fullname: "",
        phone: "",
        email: ""
      })
    } catch (error) {
      setLoading(false) // Desactiva el estado de carga
      setErrors("Hubo un error al procesar la orden, por favor intente nuevamente.")
    }
  }

  return (
    <div className="checkoutPri">
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
      {errors && <p className="error-message">{errors}</p>}
      {loading && <Loading />}
    </div>
  )
}
export default Checkout