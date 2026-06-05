import { useState } from "react"

const FomNombre = () => {
    const[nombre,setNombre] = useState("")

  return (
    <div>
        <input 
            type="text" 
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
        />
        <p>Hola, {nombre}</p>
    </div>
  )
}

export default FomNombre