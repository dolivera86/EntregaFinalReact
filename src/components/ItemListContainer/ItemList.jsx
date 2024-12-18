import Item from "./Item"
import './Styles/ItemList.css'

const ItemList = ({ products }) => (
    <div className="card-container">
        {
            products.map(({ id, ...product }) => (

                <Item product={product} key={id} />
            ))
        }
    </div>
)

export default ItemList
