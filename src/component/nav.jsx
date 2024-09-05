import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HouseContext } from '../page/Housecontext';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import navicon from '../data/assete/assete/icon-luxury.png';
import './nav.css';

export function Navaar() {
    const { houseItems } = useContext(HouseContext);
    const { insuranceItems } = useContext(HouseContext);
    const itemCount = (houseItems || []).reduce((prev, current) => prev + current.count, 0);
    const cartcount = (insuranceItems || []).reduce((prev, current) => prev + current.count, 0);

    return (
        <div className="container-fluid nav-bar bg-transparent">
            <Navbar expand="lg" className="bg-white navbar-light py-0 px-4">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-center">
                    <div className="icon p-2">
                        <img className="img-fluid" src={navicon} alt="Icon" style={{ width: '30px', height: '30px' }} />
                    </div>
                    <h1 className="m-2 text-success main-name">Real Estate</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarCollapse" />
                <Navbar.Collapse id="navbarCollapse">
                    <Nav className="me-auto"> 
                        <Nav.Link as={Link} to="/Home">search</Nav.Link>
                        <Nav.Link as={Link} to="/insurance">Insurance</Nav.Link>
                        <NavDropdown title="Pages" id="pages-dropdown">
  
                            <NavDropdown.Item as={Link} className='navname' to="/test">404 Error</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav.Link as={Link} to="/wishlist" className='callicon'>
                        <FontAwesomeIcon icon={faHeart} />
                        {<span className="cart-items-count navman counter">{itemCount}</span>}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Cart" className='callicon'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        {<span className="cart-items-count navman counter">{cartcount}</span>}
                    </Nav.Link>
                    <button className='callicon'><FontAwesomeIcon icon={faHouseUser} /></button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navaar;
