import React from "react";
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-feather';

function SideBar(props) {
 
  return (
    <Nav defaultActiveKey="/home" className="sidebar flex-column col-md-3 d-md-block bg-primary d-none vh-100 pt-3">
        <Nav.Link href="/dashboard" className="text-white d-flex gap-2"><Icon.Home/>Home</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.File/>Reports</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.Clipboard/>Orders</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.ShoppingCart/>Products</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.Users/>Customers</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.TrendingUp/>Overview</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.BookOpen/>Sale History</Nav.Link>
        <h6 className="px-3 mt-4 mb-1 text-white-50 h6">Product Info</h6>
        {/* <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.Plus/>Add Product</Nav.Link> */}
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.Smile/>Brands</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.Star/>Reviews</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.Grid/>Categories</Nav.Link>
        <h6 className="px-3 mt-4 mb-1 text-white-50 h6">Account</h6>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.CheckCircle/>Authentication</Nav.Link>
        <Nav.Link eventKey="#" className="text-white d-flex gap-2"><Icon.User/>Users</Nav.Link>
    </Nav>
  );
}

export default SideBar;

 
 