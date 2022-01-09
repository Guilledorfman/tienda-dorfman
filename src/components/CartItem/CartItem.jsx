import React, {useState, useEffect, useContext} from 'react'

import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ( {item, index} ) => {

    const { cartList, cartItemIncrease, cartItemDecrease, cartItemDelete } = useContext(CartContext)
    const [stockClass, setStockClass] = useState('stock available');
    const [maxStock, setMaxStock] = useState(false);
    const [itemQuantity, setItemQuantity] = useState(item.quantity)

    
    function alertStock(){

        setStockClass('stock unavailable')
        setTimeout(()=>{
            setStockClass('stock available')
        },200)
    }

    function checkStock(){

        if (cartItemIncrease(index) === false){
            alertStock();
        }  
            
    }


    const [ subTotal, setSubTotal ] = useState(0)

    useEffect(()=>{
        setSubTotal(cartList[index].price * cartList[index].quantity)
    },[cartList])

    return (
        <div className="cartListItem card">
            <div className="img-cont">
                <h2>{item.name}</h2>
                <img src={item.colors[0].img} alt='' />
                <b>${item.price}</b>
            </div>

            <div className="quantity-cont">
                <h2 className={stockClass}>x {cartList[index].quantity}</h2>
                <div>   
                    <button onClick={()=>cartItemDecrease(index)}>-</button>
                    <button onClick={()=>checkStock()}>+</button>
                </div>
            </div>

            <div className="subtotal-cont">
                <p>subtotal:</p>
                <b>${subTotal}</b>
            </div>

            <i className="fas fa-trash-alt" onClick={()=>cartItemDelete(item.id)} ></i>
        </div>
    )
}

export default CartItem
