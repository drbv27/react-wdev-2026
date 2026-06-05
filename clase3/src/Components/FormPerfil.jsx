import { useState } from "react"

const FormPerfil = () => {
    const[perfil,setPerfil] = useState({
                                        nombre:"",
                                        email:""
                                    })

  return (
    <div>
        <form>
            <input 
                placeholder="nombre"
                className="border-b-blue-900 border-2 rounded-full px-2"
                type="text"
                value={perfil.nombre} 
                onChange={(e)=>setPerfil({...perfil,nombre:e.target.value})}
            />
            <input 
                placeholder="email"
                className="border-b-blue-900 border-2 rounded-full px-2"
                type="email" 
                value={perfil.email}
                onChange={(e)=>setPerfil({...perfil,email:e.target.value})}
            />
            <button>Enviar</button>
            <p>{perfil.nombre} - {perfil.email}</p>
        </form>
    </div>
  )
}

export default FormPerfil