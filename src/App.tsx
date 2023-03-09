import Nav from './components/Nav';
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import PlantDetail from './components/PlantDetail';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<PlantDetail/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;