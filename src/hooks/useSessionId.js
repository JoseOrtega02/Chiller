import { useState,useEffect } from "react"
import Cookies from "universal-cookie"
const cookies = new Cookies()
function useSessionId() {
    const [sessionID,setSession] = useState()
    useEffect(() => {
      setSession(cookies.get("sessionId"))
    
      
    }, [])
  return sessionID
}

export default useSessionId