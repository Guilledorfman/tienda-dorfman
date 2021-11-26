import React from 'react'

const ItemListContainer = () => {
    return (
        <div className="container text-center">
            <h1 className="my-5">Acá va a ir la lista de productos</h1>
            <ul className="d-flex justify-content-around">
                <li className="btn-warning">Producto 1</li>
                <li className="btn-warning">Producto 2</li>
                <li className="btn-warning">Producto 3</li>
                <li className="btn-warning">Producto 4</li>
            </ul>
        </div>
    )
}

export default ItemListContainer
