import { useState } from "react"

const FormBusqueda = () => {
    const[texto,setTexto] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("Buscar:",texto)
        setTexto("")
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={texto} 
                onChange={(e)=>setTexto(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    </div>
  )
}

export default FormBusqueda