import {Link} from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <ul className="navbar-ul">
                <li><Link className="active a" to="/">Home</Link></li>
                <li><Link className="" to="/blog">Laptop</Link></li>
                <li><Link to="/staff">Staff</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/newdevice" className="d-none d-xl-block d-xxl-none">New Device</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
