import Badge from "./Badge"

const CancionCard = ({cancion}) => {
  return (
    <div className="card">
        <div className="card-header">
            <h3>{cancion.titulo}</h3>
            {cancion.favorita && <span className="fav">⭐</span>}
        </div>

        <p className="banda">{cancion.banda}</p>

        <div className="meta">
            <Badge texto={cancion.genero} variante={cancion.genero}/>
            <span className="anio">{cancion.anio < 1990 ? "Clasico" : cancion.anio}</span>
            <span className="duracion">{cancion.duracion}</span>
        </div>
    </div>
  )
}

export default CancionCard