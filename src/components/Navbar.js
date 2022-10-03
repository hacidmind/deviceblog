import {Link} from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <ul className="navbar-ul">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/blog">Laptop</Link></li>
                <li><Link to="/staff">Staff</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/newdevice">New Device</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
