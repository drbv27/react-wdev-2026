import { useContext } from "react"
import { productos } from "../productos.js"
import { CarritoContext } from "../CarritoContext.jsx"

const ListaProductos = () => {
    const {agregar} =useContext(CarritoContext)

  return (
    <div className="lista-productos">
        <h2>Productos:</h2>
        <div className="grid">
            {productos.map((producto)=>(
                <div className="producto" key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p className="precio">{producto.precio}</p>
                    <button onClick={()=>agregar(producto)}>Agregar</button>
                </div>

            ))}
        </div>
    </div>
  )
}

export default ListaProductos