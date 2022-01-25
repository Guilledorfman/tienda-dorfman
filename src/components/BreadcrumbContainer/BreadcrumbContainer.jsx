import React, {useState} from 'react'
import { Breadcrumb } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './BreadcrumbContainer.css'

const BreadcrumbContainer = ({currentCate}) => {

    const [ active, setActive ] = useState(currentCate)
    return (
        <div className="breadcrumb">
            <Breadcrumb>
                    <Link className="fs-4" to='/'>Home</Link>
                <Breadcrumb.Item >
                </Breadcrumb.Item>
                <Breadcrumb.Item className="fs-4" active>
                    <Link className="fs-4" to={`/categoria/${active}`}>{active}</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbContainer
