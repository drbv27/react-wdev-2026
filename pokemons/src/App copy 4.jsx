import { useEffect, useState } from "react"

const App = () => {
  const[pokemons,setPokemons] = useState([])
  const[id,setId] = useState(1)

  useEffect(()=>{
    //codigo del efcto para controlar re renders
    console.log("El componente se monto una vez")
  },[id])


  return (
    <div>
      <button onClick={()=>setId(id+1)}>Cambiar id</button>
    </div>
  )
}

export default App