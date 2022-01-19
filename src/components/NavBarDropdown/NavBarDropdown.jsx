import React from 'react'
import {Link} from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
import './NavBarDropdown.css'

const NavBarDropdown = ({categories}) => {



    const showCategoriesList = categories.map((cat)=>{
        return(
            <Link key={cat.id} to={cat.name} className="categoria dropdown-item fs-5 text-center d-flex align-items-center">{cat.listName}</Link>
        )
    })




    return (
        <NavDropdown  title="Categorías" id="basic-nav-dropdown">
            {showCategoriesList}
        </NavDropdown>
    )
}

export default NavBarDropdown
