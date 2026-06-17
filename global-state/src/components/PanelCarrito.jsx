import { useContext } from "react"
import { CarritoContext } from "../CarritoContext"
import IconoCarrito from "./IconoCarrito"

const PanelCarrito = () => {
    const{items,quitar,vaciar,precioTotal} = useContext(CarritoContext)

  return (
    <aside className="panel-carrito">
        <h2 className="titulo-panel">Tu carrito</h2>
        <IconoCarrito/>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>
                    {item.nombre} x{item.cantidad} - ${item.precio*item.cantidad}
                    <button onClick={()=>quitar(item.id)}>X</button>
                </li>
            ))}
        </ul>
        <p className="total">Total: ${precioTotal}</p>
        <button onClick={vaciar}>Vaciar</button>
    </aside>
  )
}

export default PanelCarrito