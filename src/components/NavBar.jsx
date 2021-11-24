import React from 'react'
import '../App.css'
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-4 border-bottom border-warning">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand ubuntu fs-3">Tienda<span className="ubuntu text-warning">Dorfman</span></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="menu-nav" className="collapse navbar-collapse">
                            <button className="btn-warning dropdown me-auto my-3">
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
                        <form className="d-flex me-auto">
                            <input className="search form-control me-2" type="search" placeholder="Buscar productos..." aria-label="Search"/>
                            <button className="btn btn-outline-warning" type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav align-items-center flex-row justify-content-between my-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ayuda</a>
                            </li>
                            <li className="nav-item">
                                <a className=''><i className="ml-auto fas fa-shopping-cart fs-2 text-warning"></i></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                    <i className="fas fa-user-circle fs-1 text-warning mr-2"></i>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item">Mi cuenta</a></li>
                                        <li><a href="#" className="dropdown-item">Cerrar sesión</a></li>
                                    </ul>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar
