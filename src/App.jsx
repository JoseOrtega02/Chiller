import { useEffect } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import { getRequestToken } from './utils/getDataUtils'
import {Routes,Route} from 'react-router-dom'
import Login from './components/login/Login'
import Details from './Pages/Details/Details'
function App() {
    
 const handleLogin = () => {
  getRequestToken()
 }

  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
    </div>
  )
}

export default App
