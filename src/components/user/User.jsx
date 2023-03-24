import {useEffect,useState} from 'react'
import MenuUser from './MenuUser/MenuUser'
import "./user.scss"
import Cookies from "universal-cookie"
const cookies = new Cookies()
function User({handleLogOut,id}) {
    const [user,setUser] = useState()
    
 
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/account?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&session_id=${id}`)
      .then(response => response.json())
      .then(response =>{
        cookies.set("userId",response.id,{path: "/"})
        setUser(response)})
      
    }, [])
    

   

  return (<>
  {console.log(user)}
  <MenuUser user={user} handleLogOut={handleLogOut}/>
   </>
  )
}

export default User