import { useContext } from "react"
import { CarritoContext } from "../CarritoContext"

const IconoCarrito = () => {
    const {cantidadTotal} = useContext(CarritoContext)


  return (
    <div className="icono-carrito">
        🛒 <span className="badge">{cantidadTotal}</span>
    </div>
  )
}

export default IconoCarrito