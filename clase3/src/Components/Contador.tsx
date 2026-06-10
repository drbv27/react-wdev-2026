import { useState } from "react"


interface ContadorProps {
    valorInicial:number
    titulo:string
}

const Contador = ( { titulo,valorInicial=0 }:ContadorProps ) => {
    const [contador,setContador] = useState<number>(valorInicial)

    //tipar con interface....describir las FORMA de las props (un contrato)

  return (
    <div>
        <h1>{titulo}</h1>
        <div className="text-4xl font-bold">
            {contador}
        </div>
        <div>
            <button className="boton" onClick={()=>setContador(contador+1)}>+</button>
            <button className="boton" onClick={()=>setContador(0)}>reset</button>
            <button className="boton" onClick={()=>setContador(contador-1)}>-</button>
        </div>
    </div>
  )
}

export default Contador