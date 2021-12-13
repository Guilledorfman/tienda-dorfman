import {Link} from 'react-router-dom'

import React from 'react'
import './NavBar.css'
import "bootstrap/dist/js/bootstrap.min";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
            <nav className="px-5 navbar navbar-expand-lg bg-dark border-4 border-bottom border-warning">
                <Link to={`/`}>
                    <h1 className="navbar-brand ubuntu text-light fs-3">Tienda<span className="ubuntu text-warning">Dorfman</span></h1>
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
                                <a href="#" className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown">
                                    Categorías
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="dropdown-item">Rojos</a></li>
                                    <li><a href="#" className="dropdown-item">Amarillos</a></li>
                                    <li><a href="#" className="dropdown-item">Verdes</a></li>
                                    <li><a href="#" className="dropdown-item">Azules</a></li>
                                </ul>
                            </button>
                        </li>
                        <li className="nav-item">
                            <form className="d-flex me-auto">
                                <input className="search form-control me-2" type="search" placeholder="Buscar productos..." aria-label="Search"/>
                                <button className="btn btn-outline-warning" type="submit">Buscar</button>
                            </form>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link text-light" href="#">Ayuda</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                        <i className="fas fa-user-circle fs-1 text-warning mr-2"></i>
                    </a>
                    <ul className="dropdown-menu">
                        <li role='presentation'><a href="#" className="dropdown-item">Mi cuenta</a></li>
                        <li role='presentation'><a href="#" className="dropdown-item">Cerrar sesión</a></li>
                    </ul>
                </div>
            </nav>
    )
}

export default NavBar
