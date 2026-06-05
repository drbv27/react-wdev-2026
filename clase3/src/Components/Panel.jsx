import { useState } from "react"

const Panel = () => {
    const[abierto,setAbierto] = useState(false)

  return (
    <div>
        <button onClick={()=>setAbierto(!abierto)}>
            {abierto ? "Ocultar" : "Mostrar"} detalles
        </button>
        {abierto && <p>Aqui estan los detalles secretos...</p>}
    </div>
  )
}

export default Panel