import Saludo from "./components/Saludo"

const App = () => {
  const personas = ["David","Alberto","Juan","Karina","Luis"]

  return (
    <>
      {personas.map( persona=> (
        <Saludo nombre={persona}/>
        ))}
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
