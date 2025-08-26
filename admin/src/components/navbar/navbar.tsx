import { SiAdidas } from "react-icons/si"
import './navbar.css'
import { CgProfile } from "react-icons/cg"
import { RiArrowDropDownLine } from "react-icons/ri"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <SiAdidas className="logo-icon" size={60}/>
            <div className="navbar-header">
                <h2>Adidas</h2>
                <p>Admin Panel</p>
            </div> 
        </div>
        <div className="navbar-profile">
            <CgProfile size={32}/>
            <RiArrowDropDownLine size={32}/>
        </div>
    </div>
  )
}

export default Navbar
