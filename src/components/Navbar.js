import {Link} from 'react-router-dom';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                
                <Navbar.Brand ><Link className="active" to="/">Home</Link></Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link ><Link className="active" to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/blog">Laptop</Link></Nav.Link>
                    <Nav.Link ><Link to="/staff">Staff</Link></Nav.Link>
                    <Nav.Link ><Link to="/cars">Cars</Link></Nav.Link>
                    <Nav.Link ><Link to="/newdevice">New Device</Link></Nav.Link>
                    </Nav>
               
            </Navbar>
        </div>
    );
}

export default Navbars;
