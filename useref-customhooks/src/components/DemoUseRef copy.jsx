import { useEffect, useRef } from "react"

const DemoUseRef = () => {
    const inputRef = useRef(null) //1. crear la referencia

    useEffect(()=>{
      inputRef.current.focus() //3.usar la referencia de alguna manera
    },[])

  return (
    <div>
        <input type="text"  ref={inputRef}/> {/*2. Conectar la referencia al elemento*/}
        <button>Enviar</button>
    </div>
  )
}

export default DemoUseRef