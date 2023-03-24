import Cookies from "universal-cookie"
const cookies = new Cookies()
function useUserId() {
  return cookies.get("userId")
}

export default useUserId