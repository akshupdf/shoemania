import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"
function Navbar () {
    return(
        <div className="text-black text-xl flex cursor-pointer" > 
       
            <Link to="/"> <img src={logo} alt="" className="w-30 h-10 "></img></Link>
            <Link to="/" className=" p-2"> Home</Link>
            <Link to="/nike" className=" p-2">Nike</Link>
            <Link to="/adidas"  className=" p-2">Adidas</Link>
            <Link to="/vans" className=" p-2">Vans</Link>
        </div>
    )
}

export default Navbar;