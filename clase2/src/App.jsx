import Cancion from "./Componets/Cancion"
import EstadoSesion from "./Componets/EstadoSesion"
import ListaCanciones from "./Componets/ListaCanciones"

const App = () => {
const canciones = [
  { id: 1, titulo: "Bohemian Rhapsody", banda: "Queen",      anio: 1975, genero: "rock",     favorita: false },
  { id: 2, titulo: "Smells Like Teen Spirit", banda: "Nirvana", anio: 1991, genero: "grunge", favorita: true },
  { id: 3, titulo: "Billie Jean",      banda: "Michael Jackson", anio: 1983, genero: "pop",   favorita: true },
  { id: 4, titulo: "Sweet Child O' Mina", banda: "Guns N' Roses", anio: 1987, genero: "rock", favorita: false },
]
const stock = 0
const canciones1=[]
  return (
    <>
      <ul>
        {
          canciones1.map((cancion)=>(
            <Cancion 
              titulo={cancion.titulo} 
              favorita={cancion.favorita}
              anio={cancion.anio}
            />
          ))
        }
      </ul>
      <EstadoSesion logueado={false}/>
      <p>{stock>0 ? "Disponible":"agotado"}</p>
      <hr />
      <ListaCanciones canciones={canciones}/>
    </>
  )
}

export default App