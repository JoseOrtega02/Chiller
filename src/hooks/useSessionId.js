
import Cookies from "universal-cookie"
const cookies = new Cookies()
function useSessionId() {
  return cookies.get("sessionId")
}

export default useSessionId