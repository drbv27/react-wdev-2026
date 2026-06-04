const ListaCanciones = ({canciones}) => {

    //Caso vacio: salimos temprano con otro jsx - nos adelantamos
    if(canciones.length ===0){
        return <p>Cargando...</p>
    }

  return (
    <ul>
        {
            canciones.map((cancion)=>(
                <li key={cancion.id}>{cancion.titulo}</li>
            ))
        }
    </ul>
  )
}

export default ListaCanciones