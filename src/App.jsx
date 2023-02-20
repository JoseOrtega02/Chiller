import { useEffect } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import { getRequestToken, getSessionId } from './utils/getDataUtils'
import {Routes,Route, useLocation} from 'react-router-dom'
import Login from './components/login/Login'
import Details from './Pages/Details/Details'
import Footer from './components/footer/Footer'
import Search from './Pages/search/Search'
import Cookies from "universal-cookie"
const key = import.meta.env.VITE_REACT_APP_API_KEY
const cookies = new Cookies()

function App() {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("request_token");
  useEffect(() => {
    console.log(token);
    Promise.resolve(getSessionId(key,"https://api.themoviedb.org/3/authentication/session/new",token))
    .then(res => {
        res.session_id?cookies.set("sessionId",res.session_id,{path: "/"}):(console.log(res))
      console.log(cookies.get("sessionId"))
    } )
    
    
  },[])

  return (
    <div className="App">
      <Navbar session={cookies.get("sessionId")}/>
      
      <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path="/search" element={<Search/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
