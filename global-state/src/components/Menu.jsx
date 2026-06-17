import BotonTema from "./BotonTema"
import ProfileButton from "./ProfileButton"


const Menu = ({usuario}) => {
  return (
    <ul>
        <ProfileButton usuario={usuario}/>
        <BotonTema/>
    </ul>
  )
}

export default Menu