import { useEffect, useState } from "react"


const App = () => {
  const[pokemons,setPokemons] = useState([])

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res)=> res.json())
    .then((data)=> setPokemons(data.results))
  },[])

  console.log(pokemons)
  return (
    <div>
      <h1>Cantidad de pokemones {pokemons.length}</h1>
    </div>
  )
}

export default App