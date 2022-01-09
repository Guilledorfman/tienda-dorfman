import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const Product = ({name, photo, price, stock, type, id}) => {

    return (
        <div className="itemCard card m-1 mb-5 border-0">
            <Link to={`/item/${id}`} className="link-item"></Link>
                <span className="badge rounded-pill bg-dark text-light">{type}</span>
                <img src={photo} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <h5>${price}</h5>
                    <h5>Stock: {stock}</h5>

                    <Link to={`/item/${id}`} className="btn btn-warning mt-3 fs-5">Ver detalle</Link>
                </div>
            </div>
    )
}

export default Product
