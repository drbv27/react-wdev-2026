import { useState } from "react"

const App = () => {
  const[contador,setContador] = useState(0)

  console.log("🔴 El cuerpo del componente se ejecutO")

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={()=>setContador(contador+1)}>+1</button>
    </div>
  )
}

export default App