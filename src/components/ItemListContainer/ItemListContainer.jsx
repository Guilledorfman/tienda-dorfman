import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
    const productos = [
        {
            name: 'Producto 1',
            description: 'Descripción del Producto 1',
            stock: 10,
            id: 1
        },{
            name: 'Producto 2',
            description: 'Descripción del Producto 2',
            stock: 5,
            id: 2
        },{
            name: 'Producto 3',
            description: 'Descripción del Producto 3',
            stock: 53,
            id: 3
        }
    ]

    //recorre el array de productos y retorna un componente por cada uno
    const productList = productos.map(producto=>{
        return(
            <ItemCount key={producto.id} name={producto.name} description={producto.description} stock={producto.stock}/>
        )
    })

    return (
        <div className="d-flex flex-wrap justify-content-around text-center">
            {productList}
        </div>
    )
}

export default ItemListContainer
