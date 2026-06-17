import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

const BotonTema = () => {
    const { alternarTema } = useContext(ThemeContext)



  return (
    <li>
        <button onClick={alternarTema}>Cambiar tema</button>
    </li>
  )
}

export default BotonTema