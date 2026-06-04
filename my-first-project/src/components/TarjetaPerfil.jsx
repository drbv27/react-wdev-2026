function TarjetaPerfil({ nombre, rol, avatar, bio }) {
  return (
    <div className="tarjeta">
      <div className="avatar">{avatar}</div>
      <h3>{nombre}</h3>
      <p className="rol">{rol}</p>
      <p className="bio">{bio}</p>
    </div>
  )
}

export default TarjetaPerfil