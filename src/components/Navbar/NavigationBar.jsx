import React from 'react'
import { Container, Nav, Navbar, NavLink } from "react-bootstrap"

function NavigationBar() {

    return (

        <Navbar className='nav' collapseOnSelect expand="sm" bg="dark" variant="dark" >
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Navbar.Brand bg="white"><span className='sname'>GANDHI</span></Navbar.Brand>
                    <Nav>
                        <NavLink eventKey="1" to="#">Home</NavLink>
                        <NavLink eventKey="2" to="#">About</NavLink>
                        <NavLink eventKey="3" to="#">Issues</NavLink>
                        <NavLink eventKey="4" to="#">Events</NavLink>
                        <NavLink eventKey="5" to="#">Media</NavLink>
                        <NavLink eventKey="6" to="#">Gallery</NavLink>
                        <NavLink eventKey="7" to="#">Video</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar>

    )
}

export default NavigationBar;