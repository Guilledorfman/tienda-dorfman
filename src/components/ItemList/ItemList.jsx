import Item from '../Item/Item'
import {memo} from 'react'
import './ItemList.css'

const ItemList = memo(

    ({data}) => {
        const productList = data.map(producto=>{
            return(
                    <Item key={producto.id} name={producto.name} price={producto.price} photo={producto.colors[0].img} description={producto.description} stock={producto.stock} type={producto.type} id={producto.id}/>
            )
        })
        return (
            <div className="main-content d-flex flex-wrap justify-content-around text-center">
                {productList}
            </div>
        )
    }
)
export default ItemList
