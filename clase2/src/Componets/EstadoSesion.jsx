const EstadoSesion = ({logueado}) => {
  return (
    <div>
        {
            logueado
                ? <p>Bienvenido</p>
                : <button>Iniciar sesion</button>
        }
    </div>
  )
}

export default EstadoSesion