import { useState, useEffect } from 'react'
import { productsFuture } from '../data/data.js'
import { useParams } from 'react-router-dom'


const useConstructionProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryKey } = useParams()

    useEffect(() => {
        setLoading(true)

        productsFuture()
            .then((answer) => {
                const productFilter = categoryKey
                ? answer.filter(products => products.category === categoryKey ) 
                : answer
                setProducts(productFilter)
            })
            .catch((mistake) => {
                console.error(mistake)
            })

            .finally(() => {
                setLoading(false)
            })

    }, [categoryKey])

    return { products, loading }
}

export default useConstructionProducts