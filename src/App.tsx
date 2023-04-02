import { useState } from 'react';
import Nav from './components/Nav';
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import PlantDetail from './components/PlantDetail';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className='App'>
        <Nav items={cartItems}/>
        <Routes>
          <Route path='/shopping-cart' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<PlantDetail
          items={cartItems} setItems={setCartItems}/>}/>
          <Route path='/cart' element={<Cart
          items={cartItems} setItems={setCartItems}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;