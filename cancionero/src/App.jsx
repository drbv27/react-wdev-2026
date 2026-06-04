import CancionCard from "./Components/CancionCard"
import {canciones} from "./datos.js"

const App = () => {
  
  return (
    <div>
      {
        canciones.map((cancion)=>(
          <CancionCard 
            key={cancion.key}
            cancion={cancion}
          />
        ))
      }
    </div>
  )
}

export default App