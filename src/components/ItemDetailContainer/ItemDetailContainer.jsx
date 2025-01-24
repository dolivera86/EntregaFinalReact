import { useState, useEffect } from "react"
import { productsFuture } from "../../data/data.js"
import ItemDetail from "./ItemDetail"
import Loading from "../Loading/Loading.jsx"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const {idProduct} = useParams()

    useEffect(() => {

      setLoading(true)
      productsFuture()
        .then( (info) => {
            const infoProduct = info.find( (data) => data.id === idProduct )
            setArticle(infoProduct)
        } )

        .finally(() => {
          setLoading(false) /* Una vez que los datos se hayan cargado, terminamos el loading */
        })

    }, [idProduct]);

    /* Al igual que en ItemListContainer, usamos el loading directamente en el return 
    Si estamos cargando, mostramos Loading, si no, mostramos el ItemDetail */
  return (
    loading ? <Loading /> :
    <ItemDetail article = {article}/>
  )
}

export default ItemDetailContainer

