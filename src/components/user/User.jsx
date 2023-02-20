import {useEffect,useState} from 'react'
import "./user.scss"


function User({handleLogOut,id}) {
    const [user,setUser] = useState()
    const [btn,setBtn] = useState(false)
 
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/account?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&session_id=${id}`)
      .then(response => response.json())
      .then(response =>setUser(response))
      
    }, [])
    

   

  return (<>
  {console.log(user)}
  <div className="button-user" onClick={()=>setBtn(!btn)} >
    <img src={`https://www.gravatar.com/avatar/${user?.avatar.gravatar.hash}`} alt="" />
    <h3>{btn? (<i class="fi fi-rr-caret-up"></i>):(<i class="fi fi-rr-caret-down"></i>)}
        </h3>
  </div>
  
    { btn ? ( <div class="side-bar-activate">
        <h3>{user?.username}</h3> 
        <a href="#">Favourites</a>
        <a href="#">Lists</a>
        <a href="#">Wachtlist</a>

        <button onClick={handleLogOut} >Log Out</button>
    </div>):(<></>)}
   </>
  )
}

export default User