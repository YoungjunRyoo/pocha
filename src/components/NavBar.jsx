import {Link} from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"><strong>POCHA IS BACK</strong></Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/menu" className="navbar-link">Menu</Link>
                <Link to="/favorites" className="navbar-link">Favorites</Link>
                <Link to="/location" className="navbar-link">Location</Link>

                <a 
                href="https://www.instagram.com/pochaisback_atx/?hl=en" 
                className="navbar-link"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img className="insta-link" src="/pocha/images/icon1.png" alt="Instagram" />
                </a>
                <a 
                href="https://www.google.com/maps/place/Pocha+is+Back/@30.335885,-97.7230802,17z/data=!4m16!1m9!3m8!1s0x8644cb680b7b5063:0xba4e09a1744ba7d1!2sPocha+is+Back!8m2!3d30.3358804!4d-97.7205053!9m1!1b1!16s%2Fg%2F11s8_v4x4g!3m5!1s0x8644cb680b7b5063:0xba4e09a1744ba7d1!8m2!3d30.3358804!4d-97.7205053!16s%2Fg%2F11s8_v4x4g?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
                className="navbar-link"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img className="insta-link" src="/pocha/images/icon2.png" alt="Instagram" />
                </a>                
            </div>

        </nav>
    );
}

export default NavBar 