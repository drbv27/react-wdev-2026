import { useContext } from "react"
import Navbar from "./components/Navbar"
import { ThemeContext } from "./ThemeContext"
import ListaProductos from "./components/ListaProductos"
import PanelCarrito from "./components/PanelCarrito"

const App = () => {
  const usuario = "Diego"
  const { tema } = useContext(ThemeContext)

  const estilo ={
    minHeight:"100vh",
    padding:"30px",
    color: tema=== "oscuro" ? "#cdd6f4" : "#1e1e2e",
    background: tema === "oscuro" ? "#1e1e2e" : "#cdd6f4"
  }


  return (
    <div style={estilo}>
      <h1>Mi App</h1>
      <p>{tema==="oscuro" ? "🌙" :"☀️"}</p>
      <Navbar usuario={usuario}/>
      <main className="contenido">
        <ListaProductos/>
        <PanelCarrito/>
      </main>
    </div>
  )
}

export default App