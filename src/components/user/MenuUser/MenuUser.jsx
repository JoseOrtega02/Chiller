import {useState} from 'react'
import { Link } from 'react-router-dom'


function MenuUser({user,handleLogOut}) {
    const [btn,setBtn] = useState(false)
  return (
    <>
    <div className="button-user" onClick={()=>setBtn(!btn)} >
    <img src={`https://www.gravatar.com/avatar/${user?.avatar.gravatar.hash}`} alt="" />
    <h3>{btn? (<i class="fi fi-rr-caret-up"></i>):(<i class="fi fi-rr-caret-down"></i>)}
        </h3>
  </div>
  
    { btn ? ( <div class="side-bar-activate">
        <h3>{user?.username}</h3> 
        <Link to="/favourites">Favourites</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/watchlist" state={user}>Watchlist</Link>

        <button onClick={handleLogOut} >Log Out</button>
    </div>):(<></>)}
    </>
  )
}

export default MenuUser