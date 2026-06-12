import Pokemon from "./Pokemon"
import useFetch from "../hooks/useFetch"
import Loader from "./Loader"

const ListaPokemons = () => {
    const {data,loading,error} = useFetch("https://pokeapi.co/api/v2/pokemon")

    if(loading) return <Loader/>
    if(error) return <p>Error:{error}</p>

  return (
    <div>
        {data.results.map((pokemon)=>(
            <Pokemon key={pokemon.url} pokemon={pokemon}/>
        ))}
    </div>
  )
}

export default ListaPokemons