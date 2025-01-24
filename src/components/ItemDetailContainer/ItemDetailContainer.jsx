import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useConstructionProducts from "../../hooks/useConstructionProducts"
import ItemDetail from "./ItemDetail"
import Loading from "../Loading/Loading.jsx"

const ItemDetailContainer = () => {
    const [article, setArticle] = useState(null)
    const { idProduct } = useParams()

    const { products, loading } = useConstructionProducts()

    useEffect(() => {
        const foundProduct = products.find(product => product.id === idProduct)
        if (foundProduct) {
            setArticle(foundProduct)
        }
    }, [idProduct, products]);

    return loading ? <Loading /> : <ItemDetail article={article} />
}

export default ItemDetailContainer
