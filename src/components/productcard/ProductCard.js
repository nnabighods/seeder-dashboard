import React from "react";

import Card from 'react-bootstrap/Card';

import seedpacket from '../../img/seedpacket.jpg';

function ProductCard(props) {
 
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={seedpacket} alt="Seed Packet" />
        <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Product Price</Card.Subtitle>
            <Card.Text>
            Product Description goes here.
            </Card.Text>
        </Card.Body>
        </Card>
    );
  }
  
  export default ProductCard;