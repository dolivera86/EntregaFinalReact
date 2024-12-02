import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer welcome={'Bienvenido a Estilo Sin Fronteras!!!'}/>
    </div>
  )
}

export default App
