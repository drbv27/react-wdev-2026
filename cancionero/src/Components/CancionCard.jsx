import Badge from "./Badge"

const CancionCard = ({cancion}) => {
  return (
    <div className="card">
        <h3>{cancion.titulo}</h3>
        <p className="banda">{cancion.banda}</p>
        <div className="meta">
            <span className="genero">{cancion.genero}</span>
            <span className="anio">{cancion.anio < 1990 ? "Clasico" : cancion.anio}</span>
            {cancion.favorita && <span className="fav">⭐</span>}
            <Badge texto={cancion.genero}/>
        </div>
    </div>
  )
}

export default CancionCard