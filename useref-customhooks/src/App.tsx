import useFetch from './hooks/useFetch.js'
import Loader from './components/Loader'

const App = () => {
  const {data, loading, error} = useFetch("https://pokeapi.co/api/v2/pokemon")

  if(loading) return <Loader/>
  if(error) return <p>Hubo un error...</p>
  return (
    <div>
      <ul>
        {data.results.map((pok)=> <li>{pok.name}</li>)}
      </ul>
    </div>
  )
}

export default App