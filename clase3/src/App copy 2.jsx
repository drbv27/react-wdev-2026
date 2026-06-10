import { useState } from "react"
import Panel from "./Components/Panel"
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import FomNombre from "./Components/FomNombre";
import FormBusqueda from "./Components/FormBusqueda";
import FormPerfil from "./Components/FormPerfil";

const App = () => {
  const[contador, setContador] = useState(0)

  return (
    <div className="bg-blue-100 text-center">
      <div>
        <h1 className="text-2xl font-semibold text-blue-950">Contador: </h1>
        <h2 className="text-4xl font-bold text-blue-800">{contador}</h2>
      </div>
      <div className="mb-2">
        <button 
          className="p-2 border border-blue-900 mx-1 text-blue-800 cursor-pointer"
          onClick={ ()=>setContador(contador-1) }>
          <FaMinusCircle />
        </button>
        <button 
          className="p-2 border border-blue-900 mx-1 text-blue-800 cursor-pointer"
          onClick={ ()=>setContador(0) }>
          <GrPowerReset />
        </button>
        <button 
          className="p-2 border border-blue-900 mx-1 text-blue-800 cursor-pointer"
          onClick={ ()=>setContador(contador+1) }>
          <FaPlusCircle />
        </button>
      </div>
      <hr />
      <Panel/>
      <br />
      <FomNombre/>
      <br />
      <FormBusqueda/>
      <br />
      <FormPerfil/>
    </div>
  )
}

export default App