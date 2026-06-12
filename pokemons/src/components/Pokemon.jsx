import '../App.css'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'

const Pokemon = ({pokemon}) => {
    const {data,loading,error} = useFetch(pokemon.url)

    if(loading) return <Loader/>
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