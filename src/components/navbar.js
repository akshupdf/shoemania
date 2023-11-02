import { Link } from "react-router-dom";

function Navbar () {
    return(
        <div className="text-white">
            <Link to="/">Home</Link>
            <Link to="/nike">Nike</Link>
            <Link to="/adidas">Adidas</Link>
            <Link to="/vans">Vans</Link>
        </div>
    )
}

export default Navbar;