
const Badge = ({texto,variante="default"}) => {
  return (
    <span className={`badge badge-${variante}`}>{texto}</span>
  )
}

export default Badge