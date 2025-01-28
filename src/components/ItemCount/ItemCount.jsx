import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import './Styles/itemCount.css'

const ItemCount = ( { stock, includeProductsCart } ) => {

    const [count, setCount] = useState(1) //Inicializa con 1

    const handleClickLess = () => {
        count > 1 ? setCount ( count - 1 ) : null;

    }

    const handleClickAdd = () => {
        count < stock ? setCount ( count + 1 ) : null;

    }

  return (

    <div>
        <button onClick = { handleClickLess } className = "itemCount-btn itemCount-btn-less" ><FaMinus /></button>
        <p>{ count }</p>
        <button onClick = { handleClickAdd } className = "itemCount-btn itemCount-btn-add" ><FaPlus /></button>
        <button onClick = { () => includeProductsCart( count ) } className = "itemCount-btn itemCount-btn-cart" >Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount