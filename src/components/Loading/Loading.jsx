import "./Style/Loading.css"
import { BounceLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-text">Cargando...</div>
      <p><BounceLoader /></p>
    </div>
  )
}

export default Loading