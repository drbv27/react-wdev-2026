import { useRef, useState } from "react"

const DemoUseRef = () => {
  const [estado,setEstado] = useState(0)
  const inputRef = useRef(null) //1. crear la referencia
  










  function enfocar(){
    inputRef.current.focus() //3.usar la referencia de alguna manera
  }
  
  function componente({mostrar}){
    if(mostrar){

      }
    }


  return (
    <div>
        <input type="text"  ref={inputRef}/> {/*2. Conectar la referencia al elemento*/}
        <button onClick={enfocar}>Enfocar el input</button>
    </div>
  )
}

export default DemoUseRef