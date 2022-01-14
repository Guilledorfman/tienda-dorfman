import React from 'react'
import { Breadcrumb } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './BreadcrumbContainer.css'

const BreadcrumbContainer = ({idCate}) => {
    return (
        <div className="breadcrumb">
            <Breadcrumb>
                    <Link className="fs-4" to='/'>Home</Link>
                <Breadcrumb.Item >
                </Breadcrumb.Item>
                <Breadcrumb.Item className="fs-4" active>{idCate}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbContainer
