import React from "react";
import { Link } from "react-router-dom";

import { auth } from "libs/firebase";
import { signOut } from "firebase/auth";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import * as Icon from 'react-feather';

function AppBar(props) {
  function onLogoutRequest(e) {
    signOut(auth);
  };
 
  return (
    <Navbar bg="light" expand={false} className="p-0 pe-3 pe-md-0">
    <Container fluid className="p-0 d-flex flex-row flex-nowrap">
        <Navbar.Brand href="/dashboard" className="branding col-md-3 px-3 py-3 py-md-2 text-black d-flex justify-content-start">
          <svg id="logo-38" width="50" viewBox="0 0 78 32" class="me-2" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#FFBC7D"></path></svg>
          <span className="d-none d-md-block">Seeder</span>
        </Navbar.Brand>
        
        <div className="icons d-flex flex-row align-items-center gap-2 pe-md-3">
          <Link to="#"><Icon.MessageCircle className="text-primary"/></Link>
          <Link to="#"><Icon.Bell className="text-primary"/></Link>
          <Link to="#"><Icon.DollarSign className="text-primary"/></Link>
          <Link to="#"><Icon.Settings className="text-primary"/></Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-md-none ms-3"/>
          <Link to="#" className="text-muted d-none d-md-block ms-3" onClick={onLogoutRequest}>Logout</Link>
        </div>
        
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end" className="d-md-none"
        >
        <Offcanvas.Header closeButton className="d-flex justify-content-end"/>
        <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/dashboard" className=" d-flex gap-2"><Icon.Home/>Home</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.File/>Reports</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.Clipboard/>Orders</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.ShoppingCart/>Products</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.Users/>Customers</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.TrendingUp/>Overview</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.BookOpen/>Sale History</Nav.Link>
              <h6 className="mt-4 mb-1 text-muted h6">Product Info</h6>
              {/* <Nav.Link eventKey="#" className=" d-flex gap-2"><Icon.Plus/>Add Product</Nav.Link> */}
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.Smile/>Brands</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.Star/>Reviews</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.Grid/>Categories</Nav.Link>
              <h6 className="mt-4 mb-1 text-muted h6">Account</h6>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.CheckCircle/>Authentication</Nav.Link>
              <Nav.Link eventKey="#" className="d-flex gap-2"><Icon.User/>Users</Nav.Link>
              <Link to="/" className="d-flex gap-2 text-muted mt-4"><Icon.LogOut/>Logout</Link>
            </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
    </Navbar>
  );
}

export default AppBar;

 
 