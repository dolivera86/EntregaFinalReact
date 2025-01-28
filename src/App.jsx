import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Mistake from './components/Mistake/Mistake'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'

function App() {

  return (
    <div>

      <BrowserRouter>
        <CartProvider>

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer welcome={'Bienvenido a Estilo Sin Fronteras!!!'} />} />
            <Route path='/category/:categoryKey' element={<ItemListContainer />} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />

            <Route path='*' element={<Mistake />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
