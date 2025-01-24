import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Styles/ItemDetail.css';

const ItemDetail = ({ article }) => {
    const [showIntenCount, setShowIntenCount] = useState(true);
    const [currentImage, setCurrentImage] = useState(null); // Inicializa como null
    const { includeProduct } = useContext(CartContext);

    // Asegúrate de que `article` y `article.image` existen
    useEffect(() => {
        if (article && article.image && article.image.length > 0) {
            setCurrentImage(article.image[0]); // Establece la primera imagen si existe
        }
    }, [article]);

    // Verifica si las imágenes secundarias están disponibles
    const secondaryImages = Array.isArray(article?.image)
        ? article.image.filter((imageNext) => imageNext !== currentImage)
        : [];

    const includeProductsCart = (count) => {
        const productContainer = { ...article, quantity: count };
        includeProduct(productContainer);
        setShowIntenCount(false);
    };

    return (
        <div className="item-detail">
            <div className="images-detail-container">
                <div className="main-image">
                    {/* Verifica si `currentImage` está definido y es una URL válida */}
                    {currentImage ? (
                        <img src={currentImage} alt="Imagen del artículo" />
                    ) : (
                        <p>No hay imagen disponible</p>
                    )}
                </div>

                <div className="secondary-images">
                    {secondaryImages.map((image) => (
                        <img
                            src={image}
                            key={image}
                            className="secondary-image"
                            onClick={() => setCurrentImage(image)} // Cambia la imagen principal
                            alt="Imagen secundaria"
                        />
                    ))}
                </div>
            </div>

            <div className="item-info">
                <h2>{article?.name}</h2>
                <p>{article?.description}</p>
                <p><strong>Precio:</strong> ${article?.price}</p>
                {showIntenCount ? (
                    <ItemCount stock={article?.stock} includeProductsCart={includeProductsCart} />
                ) : (
                    <Link to='/cart'>Finalizar mi compra</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
