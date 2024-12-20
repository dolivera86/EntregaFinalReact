import { useState, useEffect } from "react"
import { productsFuture } from "../../data/data.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [article, setArticle] = useState({})
    const {idProduct} = useParams()

    useEffect(() => {
      productsFuture()
        .then( (info) => {
            const infoProduct = info.find( (data) => data.id === idProduct )
            setArticle(infoProduct)
        } )
    }, [idProduct])

  return (
    <ItemDetail article={article}/>
  )
}

export default ItemDetailContainer