import {Link} from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap";
import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (

                    <Navbar bg="dark" variant='dark' expand="lg" className='px-5 border-4 border-bottom border-warning'>
                        <Container>
                            <Navbar.Brand>
                                <Link className="navbar-brand" to={`/`}>
                                    <img className="navbar-logo" src="https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640210537/coderhouse-react-tienda/synthesizer-piano-svgrepo-com_xm16qi.svg" alt="" />
                                    <h1 className="ubuntu text-light fs-3">
                                        Tienda<span className="ubuntu text-warning">Dorfman</span>
                                    </h1>
                                </Link>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn btn btn-outline-warning text-warning" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                        <Link className="categoria fs-5 text-center d-flex align-items-center" to={'/categoria/sintetizadores'}>
                                            Teclados y sintetizadores
                                        </Link>

                                        <Link className="categoria fs-5 text-center d-flex align-items-center" to={'/categoria/sonido'}>
                                            Sonido y grabación
                                        </Link>


                                        <Link className="categoria fs-5 text-center d-flex align-items-center" to={'/categoria/efectos'}>
                                            Efectos
                                        </Link>


                                        <Link className="categoria fs-5 text-center d-flex align-items-center" to={'/categoria/accesorios'}>
                                            Accesorios
                                        </Link>

                                </Nav>
                            </Navbar.Collapse>
                             <div className="navbar-nav flex-row">
                            <Link className="cartWidget" to={"/cart"}><CartWidget/></Link>
                            </div>
                        </Container>
                    </Navbar>
    )
}

export default NavBar
