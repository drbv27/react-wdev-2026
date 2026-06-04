
const CancionCard = ({titulo,banda,anio,genero,favorita}) => {
  return (
    <div className="card">
        <h3>{titulo}</h3>
        <p className="banda">{banda}</p>
        <div className="meta">
            <span className="genero">{genero}</span>
            <span className="anio">{anio < 1990 ? "Clasico" : anio}</span>
            {favorita && <span className="fav">⭐</span>}
        </div>
    </div>
  )
}

export default CancionCard