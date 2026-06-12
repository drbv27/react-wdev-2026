import { useEffect, useState } from "react"
import '../App.css'

const Pokemon = ({pokemon}) => {
    const[data,setData] = useState({})
    const[cargando,setCargando] = useState(true)
    const[error,setError] = useState(null)

    useEffect(()=>{
        async function cargar(){
            try {
                setCargando(true)
                const res = await fetch(pokemon.url)
                if(!res.ok) throw new Error("Hubo error")
                const data = await res.json()
                console.log(data)
                setData(data)
            } catch (error) {
                setError(error.message)
            } finally{
                setCargando(false)
            }
        }
        cargar()
    },[])

    /* console.log(pokemon.url)
    console.log(data) */

    if(cargando) return <p>Cargando...</p>
    if(error) return <p>Error:{error}</p>

  return (
    <div className="borde">
        <h1>Nombre: {pokemon.name}</h1>
        <img src={data.sprites.front_default}/>
        <img src={data.sprites.back_default}/>
        <h2>Tipos:</h2>
        {data.types.map((tipo)=>(
            <p>{tipo.type.name}</p>
        ))}
        <p>Altura: {data.height}</p>
        <h2>Habilidades:</h2>
        {data.abilities.map((habilidad)=>(
            <p>{habilidad.ability.name}</p>
        ))}
    </div>
  )
}

export default Pokemon