import React, { useState } from 'react'
import ListPopUp from '../../ListPopUp/ListPopUp';

function AddList({id}) {
  const [popUp,setPopup] = useState(false)
  const closePopUp = () => {
    setPopup(!popUp)
  }
  return (<>
    <div onClick={()=>{setPopup(!popUp);}}><i class="fi fi-br-list-check"></i></div>
    
    {popUp ? (<ListPopUp id={id} closePopUp={closePopUp} />):(<></>)}

    </>
  )
}

export default AddList