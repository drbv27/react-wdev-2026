import { useEffect, useState } from "react"

const ListaPokemons = () => {
    const[datos,setDatos] = useState([])
    const[cargando,setCargando] = useState(true)
    const[error,setError] = useState(null)

    useEffect(()=>{
        setCargando(true)
        setError(null)

        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.json()
            })
            .then((data) => setDatos(data))
            .catch((err) => setError(err.message))
            .finally(() => setCargando(false))
    },[])

    if(cargando) return <p>Cargando...</p>
    if(error) return <p>Error:{error}</p>

  return (
    <div>
        {datos.results.map((pokemon)=>(
            <h2>{pokemon.name}</h2>
        ))}
    </div>
  )
}

export default ListaPokemons