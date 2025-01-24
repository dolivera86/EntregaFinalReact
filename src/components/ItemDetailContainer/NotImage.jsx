import './Styles/NotImage.css'

const NotImage = () => {


  return (
    <div className = "no-image-container">
      <img src = "/img/noimage.jpg" alt = "Imagen no disponible" className = "no-image" />
      <p>La imagen no está disponible en este momento.</p>
    </div>
  );
}

export default NotImage