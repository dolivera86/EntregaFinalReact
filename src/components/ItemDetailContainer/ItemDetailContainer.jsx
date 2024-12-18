import { useState, useEffect } from "react"
import { productsFuture } from "../../data/data.js"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [article, setArticle] = useState({})

    useEffect(() => {
      productsFuture()
        .then( (info) => {
            const infoProduct = info.find( (data) => data.id === "CALZA5" )
            setArticle(infoProduct)
        } )
    }, [])

  return (
    <ItemDetail article={article}/>
  )
}

export default ItemDetailContainer