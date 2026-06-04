import { Despedida } from "./components/Despedida"
import Saludo from "./components/Saludo"

const App = () => {
/*   const nombre = "Diego"
  const anio = 2026 */

  return (
    <>
    <Saludo nombre={"David"} edad={35}/>
    <Saludo nombre={"Luis"}/>
    <Saludo nombre={"Alberto"}/>
    <Despedida apellido={"bonilla"} hobbie={"Programar"}/>

{/*       <h1>Hola, { nombre }</h1>
      <p>Estamos en el anio { anio }</p>
      <p>El proximo anio es: { anio+1 }</p>
      <button>Presioname</button>
      <p>En mayusculas: { nombre.toUpperCase() }</p> */}
    </>
  )
}

export default App


/* export const App = () => {

  return (
    <div>Mi componete con Arrow Function</div>
  )
} */


/* function App() {

  return (
    <div>Mi componente con React FC con export aparte</div>
  )
}

export default App */

/* export default function App() {
  return (
    <div>Mi componente con React Functional Componet</div>
  )
} */
