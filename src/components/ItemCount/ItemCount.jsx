import { useState } from "react"

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
        <button onClick = { handleClickLess } >-</button>
        <p>{ count }</p>
        <button onClick = { handleClickAdd } >+</button>
        <button onClick = { () => includeProductsCart( count ) }>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount