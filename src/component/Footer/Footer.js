import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className=" bg-dark text-white py-2">
            <div className="container py-4">
                <Row >
                    <Col lg="4" className="text-start d-flex align-items-center">
                        <h5>This is High Quality Healthcare. The Hospital of the Future, Today. The hospital you trust to care for those you love. The Power to Heal</h5>

                    </Col>
                    <Col xs lg="4">
                        <h3>Useful Links</h3>
                        <p> Doctor List</p>
                        <p>View Report </p>
                        <p>Payment Method</p>
                        <p>Help Line</p>

                    </Col>
                    <Col xs lg="4" className="text-start">
                        <h3>Contact</h3>
                        <p><i class="fas fa-clinic-medical"></i> :  75/7,Gulshan-2,Dhaka-1212, Bangladesh </p>
                        <p><i class="fas fa-envelope-open-text"></i> :  info@brothers.com</p>
                        <p><i class="fas fa-mobile-alt"></i> :  +88017485745</p>
                        <p><i class="fas fa-phone-volume"></i> Hot Line:  6665599</p>
                    </Col>
                </Row>
            </div>
            <hr></hr>
            <footer className="text-center">BROTHERS HOSPITAL</footer>
        </div>
    );
};
export default Footer;
