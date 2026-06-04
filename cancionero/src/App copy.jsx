import CancionCard from "./Components/CancionCard"
import {canciones} from "./datos.js"

const App = () => {
  console.log(canciones)
  return (
    <div>
      {
        canciones.map((cancion)=>(
          <CancionCard 
            key={cancion.id}
            titulo={cancion.titulo}
            banda={cancion.banda}
            anio={cancion.anio}
            genero={cancion.genero}
            favorita={cancion.favorita}
          />
        ))
      }
    </div>
  )
}

export default App