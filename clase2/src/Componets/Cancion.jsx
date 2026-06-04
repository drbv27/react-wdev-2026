
const Cancion = ({titulo,favorita,anio}) => {

  return (
    <li>
        { titulo }
        { anio<1990 && <span> - "Clasico"</span> }
        { favorita && <span className="estrella">⭐</span> }
    </li>
  )
}

export default Cancion