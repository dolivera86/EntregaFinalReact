import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>

      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path = '/' element = {<ItemListContainer welcome = {'Bienvenido a Estilo Sin Fronteras!!!'} />}/>
          <Route path = '/category/:categoryKey' element = {<ItemListContainer />}/>
          <Route path='/detail/:idProduct' element = {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

// Crear y agregar Footer

export default App
