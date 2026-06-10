import { useState } from "react"

const App = () => {
  const [pokemons,setPokemons] = useState([])

  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res)=> res.json())
    .then((data)=> setPokemons(data.results))


  return (
    <div>Cantidad de pokemones {pokemons.length}</div>
  )
}

export default App