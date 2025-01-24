import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from "../db/db.js"

const useConstructionProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryKey } = useParams()

    const collectionName = collection(db, 'products')

    // Función general para obtener productos con o sin filtro
    const fetchProducts = async (category = null) => {
        try {
            setLoading(true)
            let q = collectionName
            if (category) {
                q = query(collectionName, where('category', '==', category))
            }
            const dataDb = await getDocs(q)
            const data = dataDb.docs.map((inputsDb) => {
                return { id: inputsDb.id, ...inputsDb.data() }
            })
            setProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts(categoryKey)
    }, [categoryKey])

    return { products, loading }
}

export default useConstructionProducts
