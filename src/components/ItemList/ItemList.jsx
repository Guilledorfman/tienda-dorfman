import React, {useState} from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({data}) => {
    
    // recorre el array de productos y retorna un componente por cada uno
    const productList = data.map(producto=>{
        return(
                <Item key={producto.id} name={producto.name} price={producto.price} photo={producto.photo} description={producto.description} stock={producto.stock}/>
        )
    })
    return (
        <div className="main-content d-flex flex-wrap justify-content-around text-center">
            {productList}
        </div>
    )
}

export default ItemList
