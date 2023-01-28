import { useEffect } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import { getRequestToken } from './utils/getDataUtils'
import {Routes,Route} from 'react-router-dom'
import Login from './components/login/Login'
function App() {
    
 const handleLogin = () => {
  getRequestToken()
 }

  return (
    <div className="App">
      <button onClick={()=>handleLogin()}>Login</button>
      
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      
    </Routes>
    </div>
  )
}

export default App
