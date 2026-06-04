import TarjetaPerfil from "./components/TarjetaPerfil"

const App = () => {
  const equipo = [
    { id: 1, nombre: "Ana Martinez",  rol: "Frontend Dev", avatar: "👩‍💻", bio: "Le encanta React y el cafe." },
    { id: 2, nombre: "Luis Gomez",    rol: "Backend Dev",  avatar: "👨‍💻", bio: "Domina las APIs y los gatos." },
    { id: 3, nombre: "Marta Pena",    rol: "UI Designer",  avatar: "🎨", bio: "Pixel perfect siempre." },
  ]

  return (
    <>
      <h1>Nuestro equipo.</h1>
      {
        equipo.map((persona)=>(
          <TarjetaPerfil
            key={persona.id}
            nombre={persona.nombre}
            rol={persona.rol}
            avatar={persona.avatar}
            bio={persona.bio}
          />
        ))
      }
    </>
  )
}

export default App



