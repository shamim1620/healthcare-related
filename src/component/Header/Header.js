import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (

        <div className="header">
            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/home"><i class="fas fa-file-medical-alt"></i><span className="">BROTHERS HOSPITAL</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavLink} to="/home" activeStyle={activeStyle}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" activeStyle={activeStyle}>Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/doctors" activeStyle={activeStyle}>Doctors List</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeStyle={activeStyle}>About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/career" activeStyle={activeStyle}>Career</Nav.Link>
                            <Nav.Link as={NavLink} to="/appointment" activeStyle={activeStyle}>Appointment</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" activeStyle={activeStyle}>Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;