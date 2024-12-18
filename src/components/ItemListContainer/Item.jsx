import { Link } from 'react-router-dom'
import './Styles/Item.css'

const item = ({ product }) => {

    return (
        <Link to={"/detail/" + product.id}>
            <div className="card">
                <img src={product.image} alt={product.name} className="card-image" />
                <div className="card-content">
                    <p className="card-title">{product.name}</p>
                    <p className="card-price">${product.price}</p>
                    <p>{product.category}</p>
                </div>
            </div>
        </Link>
    )
}

export default item