import React from 'react'
import useSessionId from '../../../hooks/useSessionId'
import useUserId from '../../../hooks/useUserId'
import { addWatch } from '../../../utils/getDataUtils'

function AddWatch({id}) {
    const handleAdd = (id) => {
        const userId = useUserId()
        const sessionId = useSessionId()
        const data = {
          "media_type": "movie",
          "media_id": id,
          "watchlist": true
        }
        addWatch(userId,data,sessionId)
        console.log(id)
    }
  return (
    <div onClick={() => {handleAdd(id)}}><i class="fi fi-br-bookmark"></i></div>
  )
}

export default AddWatch