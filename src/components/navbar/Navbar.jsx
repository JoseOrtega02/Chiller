import { Link } from "react-router-dom"
import img from "../../assets/logo.png"
import "./navbar.scss"
import { getRequestToken } from '../../utils/getDataUtils'
import { useState,useEffect } from "react"
import Cookies from "universal-cookie"
import User from "../user/User"
const cookies = new Cookies()


function Navbar(props) {
  
  const [sessionID,setSession] = useState(cookies.get("sessionId"))
  useEffect(() => {
    console.log(sessionID)
    console.log("render")
  },[sessionID])
  
  const handleLogin = () => {

    
    setSession(cookies.get("sessionId"))
    console.log(sessionID)
    getRequestToken()
   
    
   }
   const handleLogOut = () => {
    console.log("log out")
    cookies.remove("sessionId")
    setSession(undefined)
   }
  return (
    <div className="navbar-container">
      <img src={img} alt="" />
      <div style={{display: 'flex',gap: '20px'}}>
        <Link to="/"><i
class=
"fi fi-br-home"
></i><i class="fi fi-sr-house blank"></i></Link>
        <Link to="/search"><i class="fi fi-br-search"></i></Link>
      </div>
      
      <div className="navbar-buttons">
        {sessionID !== undefined?(<>
        <User handleLogOut={handleLogOut} id={sessionID} />
        {/* <button onClick={()=>handleLogOut()} >Log Out</button> */}
        </>):(<button onClick={() =>handleLogin()}>Login</button>) }
        
      </div>
    </div>
  )
}

export default Navbar