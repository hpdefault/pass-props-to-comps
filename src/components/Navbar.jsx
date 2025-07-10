import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-logo">
                <Link to='/'>Test Logo</Link>
            </div>
            <div className="navbar-items">
                <Link to='/about' className='nav-link'>About Us</Link>
                <Link to='/contact' className='nav-link'>Contact Us</Link>
                <Link to='/gallery' className='nav-link'>Gallery</Link>
                <Link to='/' className='nav-link'>Home</Link>
            </div>

        </nav>

    )

}

export default Navbar;