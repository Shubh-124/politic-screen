import React from 'react'
import { Container, Nav, Navbar, NavLink } from "react-bootstrap"
import "./Navbar.css"

const TopNavigationBar = () => {
    return (
        <Navbar className='nav-top' bg="dark" variant="dark" height="sm" >
            <Container>
                <Navbar.Brand bg="white"><span className='fname'>RAHUL</span></Navbar.Brand>
                <Nav>
                    <p className='text'>RG on Social</p>
                    <NavLink eventKey="1" to="#">
                        <i className="fa-2x fa-brands fa-square-twitter"></i>
                    </NavLink>
                    <NavLink eventKey="2" to="#">
                        <i className=" fa-2x fa-brands fa-square-facebook"></i>
                    </NavLink>
                    <NavLink eventKey="3" to="#">
                        <i className="fa-2x fa-brands fa-square-google-plus"></i>
                    </NavLink>
                    <NavLink eventKey="4" to="#">
                        <i className="fa-2x fa-brands fa-square-youtube"></i>
                    </NavLink>

                </Nav>
            </Container >
        </Navbar>
    )
}

export default TopNavigationBar