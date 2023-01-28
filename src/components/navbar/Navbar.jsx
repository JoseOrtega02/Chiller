import img from "../../assets/logo.png"
import "./navbar.scss"
function Navbar() {
  return (
    <div className="navbar-container">
      <img src={img} alt="" />
      <div className="navbar-buttons">
        <button>Register</button>
        <button>Log In</button>
      </div>
    </div>
  )
}

export default Navbar