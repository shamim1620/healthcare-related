import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div>
            <Card className="item-cart">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/detail/${id}`}>
                        <small className="text-muted"> <button className="btn-primary detail-btn">detail</button></small>
                    </Link>

                </Card.Footer>
            </Card>

        </div>
    );
};

export default Cart;