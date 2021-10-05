import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from '../../image/logo-11.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <NavLink to="/"><img src={Image} alt="" /></NavLink>
                    <Nav className="me-auto top-bar">
                        <NavLink className='link' to="/">Home</NavLink>
                        <NavLink className='link' to="/about">About us</NavLink>
                        <NavLink className='link' to="/service">Service</NavLink>
                        <NavLink className='link' to="/contact">Contact us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;