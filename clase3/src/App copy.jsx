import { useState } from "react"

const App = () => {

  /* const [estado,"funcionq ue cambia el estado"]=useState("estado inicial") */
  const[contador, setContador] = useState(0)


  function incrementar(){
    setContador(contador+1)
  }
  function decrementar(){
    setContador(contador-1)
  }
  function reset(){
    setContador(0)
  }

  console.log("me renderize")

  return (
    <div>
      <h1>Contador: {contador}</h1>
      
      <button onClick={decrementar}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={incrementar}>+</button>
      
    </div>
  )
}

export default App