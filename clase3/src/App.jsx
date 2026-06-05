import { useState } from "react"
import Panel from "./Components/Panel"

const App = () => {
  const[contador, setContador] = useState(0)

  return (
    <div>
      <h1 className="text-2xl">Contador: <span className="text-4xl font-bold text-blue-800">{contador}</span></h1>
      <button onClick={ ()=>setContador(contador-1) }>-</button>
      <button onClick={ ()=>setContador(0) }>reset</button>
      <button onClick={ ()=>setContador(contador+1) }>+</button>
      <hr />
      <Panel/>
    </div>
  )
}

export default App