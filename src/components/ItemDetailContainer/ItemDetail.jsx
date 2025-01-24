import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Styles/ItemDetail.css'

const ItemDetail = ({ article }) => {

    const [showIntenCount, setShowIntenCount] = useState(true)

    const [currentImage, setCurrentImage] = useState(article?.image[0]);
    const secondaryImages = article?.image?.filter((imageNext) => imageNext !== currentImage);
    const { includeProduct } = useContext(CartContext)

    const includeProductsCart = (count) => {
        //productos que se añade al carrito

        const productContainer = { ...article, quantity: count }
        includeProduct(productContainer)
        setShowIntenCount(false)
    }

    return (

        <div className="item-detail">
            <div className="images-detail-container">
                <div className="main-image">
                    {currentImage ? (
                        <img src={currentImage} alt="Imagen del artículo" />
                    ) : (
                        <p>No hay imagen disponible</p>
                    )}
                </div>

                <div className="secondary-images">

                    {
                        secondaryImages.map((image) =>(
                            <img src={image} key={image} className="secondary-image" onClick={ () => setCurrentImage(image)}/>
                        )

                        )

                    }
                </div>
            </div>

            <div className="item-info">
                <h2>{article?.name}</h2>
                <p>{article?.description}</p>
                <p><strong>Precio:</strong> ${article?.price}</p>
                {
                    showIntenCount === true ? (
                        <ItemCount stock = { article?.stock } includeProductsCart = { includeProductsCart }/>
                    ) : (
                        <Link to='/cart'>Finalizar mi compra</Link>

                    )
                }
            </div>
        </div>
    );

}

export default ItemDetail
