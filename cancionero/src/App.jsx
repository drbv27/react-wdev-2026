import CancionCard from "./Components/CancionCard"
import CardGenerica from "./Components/CardGenerica.jsx"
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
      <div>
        <CardGenerica>
          <h2>Soy parte del hijo</h2>
          <p>Yo tambien soy parte</p>
        </CardGenerica>
        <CardGenerica>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </CardGenerica>
      </div>
    </div>
  )
}

export default App