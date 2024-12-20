import Item from "./Item"
import './Styles/ItemList.css'

const ItemList = ({ products }) => (
    <div className="card-container">
        {
            products.map(({...product}) => (

                <Item product={product} key={product.id} />
            ))
        }
    </div>
)

export default ItemList
