import React from 'react'
import useSessionId from '../../../hooks/useSessionId'
import useUserId from '../../../hooks/useUserId'
import { addFav } from '../../../utils/getDataUtils'

function AddFav({id}) { 
    const handleAdd = (id) => {
        const userId = useUserId()
        const sessionId = useSessionId()
        const data = {
            "media_type": "movie",
            "media_id": id,
            "favorite": true
        }
        addFav(userId,data,sessionId)
    }
  return (
    <div onClick={()=>{handleAdd(id)}}><i class="fi fi-br-heart"></i></div>
  )
}

export default AddFav