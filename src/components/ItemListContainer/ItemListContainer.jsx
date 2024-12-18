import useConstructionProducts from '../../hooks/useConstructionProducts'
import ItemList from './ItemList.jsx'
import Loading from '../Loading/Loading.jsx'
import './Styles/ItemListContainer.css'

const ItemListContainer = ({ welcome }) => {

    
    const { products, loading } = useConstructionProducts()


    return (
        <div>
            <h2 className = "greeting" > {welcome} </h2>
            {
                loading === true ? (
                    <Loading />
                ) : (
                    <ItemList products = {products}/>
                )
            }
        </div>
    )
}

export default ItemListContainer