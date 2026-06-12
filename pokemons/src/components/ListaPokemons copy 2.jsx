import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

const ListaPokemons = () => {
    const[datos,setDatos] = useState([])
    const[cargando,setCargando] = useState(true)
    const[error,setError] = useState(null)

    useEffect(()=>{
        async function cargar(){
            try {
                setCargando(true)
                const res = await fetch("https://pokeapi.co/api/v2/pokemon")
                if(!res.ok) throw new Error("Hubo error")
                const data = await res.json()
                setDatos(data.results)
            } catch (error) {
                setError(error.message)
            } finally{
                setCargando(false)
            }
        }
        cargar()
    },[])

    if(cargando) return <p>Cargando...</p>
    if(error) return <p>Error:{error}</p>

  return (
    <div>
        {datos.map((pokemon)=>(
            <Pokemon key={pokemon.url} pokemon={pokemon}/>
        ))}
    </div>
  )
}

export default ListaPokemons