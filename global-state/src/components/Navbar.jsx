import Menu from "./Menu"

const Navbar = ({usuario}) => {
  return (
    <div className="navbar">
        <Menu usuario={usuario}/>
    </div>
  )
}

export default Navbar