import {Link} from 'react-router-dom'

import React from 'react'
import './NavBar.css'
import "bootstrap/dist/js/bootstrap.min";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
            <nav className="px-5 navbar navbar-expand-lg bg-dark border-4 border-bottom border-warning">
                <Link className="navbar-brand" to={`/`}>
                    <img className="navbar-logo" src="https://res.cloudinary.com/dxoqq4yvo/image/upload/v1640210537/coderhouse-react-tienda/synthesizer-piano-svgrepo-com_xm16qi.svg" alt="" />
                    <h1 className="ubuntu text-light fs-3">
                     Tienda<span className="ubuntu text-warning">Dorfman</span>
                     </h1>
                </Link>
                <div className="d-flex flex-row order-2 order-lg-3">
                    <div className="navbar-nav flex-row">
                        <Link to={"/cart"}>
                            <span className="nav-item m-auto"><CartWidget/></span>
                        </Link>
                    </div>
                    <button className="navbar-toggler navbar-dark mx-4" data-bs-toggle="collapse" data-bs-target="#menu-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div id="menu-nav" className="collapse navbar-collapse order-3 order-lg-2">
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item mx-4">
                            <button className="btn btn-outline-warning dropdown me-auto my-3">
                                <div className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown">
                                    Categorías
                                </div>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item"><Link className="categoria" to={'/categoria/sintetizadores'}>Teclados y sintetizadores</Link></li>
                                    <li className="dropdown-item"><Link className="categoria" to={'/categoria/sonido'}>Sonido y grabación</Link></li>
                                    <li className="dropdown-item"><Link className="categoria" to={'/categoria/efectos'}>Efectos</Link></li>
                                    <li className="dropdown-item"><Link className="categoria" to={'/categoria/accesorios'}>Accesorios</Link></li>
                                </ul>
                            </button>
                        </li>
                        <li className="nav-item mx-4 text-light">
                            About
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default NavBar
