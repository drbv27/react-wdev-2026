
const Saludo = (props) => {

/* console.log(props) */


  return (
    <div>Hola {props.nombre} desde el componente externo, edad:{props.edad}</div>
  )
}

export default Saludo