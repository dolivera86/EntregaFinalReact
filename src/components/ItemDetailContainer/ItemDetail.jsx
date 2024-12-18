

const ItemDetail = ({ article }) => {
    const { id, image, name, description } = article

    return (
        <div className="detailItem">
            <img src={image} className="detailImage" alt="" />
            <div className="detailText">
                <h1>{id}</h1>
                <h2>{name}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    )

}

export default ItemDetail