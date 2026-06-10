import { useState } from "react"

const App = () => {
  const[contador,setContador] = useState(0)

  setContador(contador+1)

  return (
    <h1>{contador}</h1>
  )
}

export default App