import {useState} from 'react'
import AddFav from './expanded-btn/AddFav'
import AddList from './expanded-btn/AddList'
import AddWatch from './expanded-btn/AddWatch'
import "./plus.scss"

function Plus({id}) {
    const [active,setActive] = useState(false)
  return (<>
    {active ? (<>
    <div style={{color:"white"}} className="container-btn-plus">
         <AddFav id={id}/>
    <AddList id={id}/>
    <AddWatch id={id}/>
    </div>
   <button onClick={()=>setActive(!active)}><i class="fi fi-br-cross-circle"></i></button>

    </>):(<button onClick={()=>{
        setActive(!active)}}><i class="fi fi-br-square-plus"></i></button>)}
    
    
    </>
  )
}

export default Plus